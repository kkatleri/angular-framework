import { Directive, ElementRef, forwardRef, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const DATE_VALUE_PROVIDER = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DateValueAccessorDirective),
  multi: true
}

@Directive({
  selector: 'input([type=date][ngModel], input([type=date][formContro], input([type=date][formControlName])',
  standalone: true,
  providers: [DATE_VALUE_PROVIDER]
})
export class DateValueAccessorDirective implements ControlValueAccessor{

  constructor(private elementRef: ElementRef) { }

  @HostListener('input', ['$event.target.valueAsDate']) private onChange!: Function;
  @HostListener('blur', []) private onTouched!: Function; 

  writeValue(newValue: any): void {
    if(newValue instanceof Date)
      this.elementRef.nativeElement.value = newValue.toISOString().split('T')[0];
  }

  registerOnChange(fn: Function) {
    this.onChange = (value: Date) => {fn(value);}
  }
  registerOnTouched(fn: Function) {
    this.onTouched = fn;
  }

}
import { Component, Provider, forwardRef } from '@angular/core';
import { profileIconNames } from './profile-icon-names-list';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const PROFILE_ICON_SELECTOR_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ProfileIconSelectorComponent),
  multi: true
}

@Component({
  selector: 'profile-icon-selector',
  templateUrl: './profile-icon-selector.component.html',
  styleUrls: ['./profile-icon-selector.component.css'],
  providers: [PROFILE_ICON_SELECTOR_ACCESSOR]
})
export class ProfileIconSelectorComponent implements ControlValueAccessor{

  profileIconNames = profileIconNames;
  showAllIcons: boolean = true;
  selectedIcon!: string | null

  private onChange!: Function;
  private onTouched!: Function;

  writeValue(icon: string): void {
      this.selectedIcon = icon;
      if(icon && icon!='')
        this.showAllIcons=false;
      else
        this.showAllIcons=true;
  }

  registerOnChange(fn: Function): void {
      this.onChange = (icon: string) => {fn(icon);}
  }

  registerOnTouched(fn: Function): void {
     this.onTouched = fn; 
  }

  iconSelected(icon: string){
    this.showAllIcons = false;
    this.selectedIcon = icon;
    this.onChange(icon);
  }


}

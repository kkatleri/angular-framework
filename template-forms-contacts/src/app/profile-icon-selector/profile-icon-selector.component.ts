import { CommonModule } from '@angular/common';
import { Component, forwardRef } from '@angular/core';
import { profile_icon_images } from './profile-icon-images';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const PROFILE_ICON_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ProfileIconSelectorComponent),
  multi: true
}

@Component({
  selector: 'con-profile-icon-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-icon-selector.component.html',
  styleUrl: './profile-icon-selector.component.css',
  providers: [PROFILE_ICON_VALUE_ACCESSOR]
})
export class ProfileIconSelectorComponent implements ControlValueAccessor {


  profileIcons = profile_icon_images;
  showAllProfileIcons: boolean = false;
  selectedProfileIcon!: string | null;

  onChange!: Function;
  onTouched!: Function;

  setSelectedProfileIcon(selectedProfileIcon: string) {
    this.selectedProfileIcon = selectedProfileIcon;
    this.showAllProfileIcons = false;
    this.onChange(this.selectedProfileIcon);
  }

  writeValue(icon: string | null){
    this.selectedProfileIcon = icon;

    if(this.selectedProfileIcon && this.selectedProfileIcon !== '')
      this.showAllProfileIcons = false;
    else 
      this.showAllProfileIcons = true;
    
  }

  registerOnChange(fn: Function){
    this.onChange = (icon: string)=> {fn(icon)}; 
  }

  registerOnTouched(fn: Function){
    this.onTouched = fn;
  }
}

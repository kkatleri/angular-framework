import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactsService } from '../contacts/contacts.service';
import { addressTypes, phoneTypes } from '../contacts/contact.model';

@Component({
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  
  phoneTypesValues=phoneTypes;
  addressTypesValues=addressTypes;

  contactForm: FormGroup = this.formBuilder.nonNullable.group({
    id: '',
    firstName: '',
    lastName: '',
    dateOfBirth: <Date | null>null,
    favoritesRanking: <number | null>null,
    personal: false,
    phone: this.formBuilder.nonNullable.group({
      phoneNumber: '',
      phoneType: ''
    }),
    address: this.formBuilder.nonNullable.group({
      streetAddress: '',
      city: '',
      state: '',
      postalCode: '',
      addressType: ''
    }),
    notes: ''
  });

  constructor(
    private route: ActivatedRoute, 
    private contactService: ContactsService,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    const contactId = this.route.snapshot.params['id'];
    if (!contactId) return

    this.contactService.getContact(contactId).subscribe(contact => {
      if(!contact) return;
      this.contactForm.setValue(contact);
    });
  }

  saveContact() {
    console.log(this.contactForm.controls['favoritesRanking'].value, typeof this.contactForm.controls['favoritesRanking'].value);
    this.contactService.saveContact(this.contactForm.value).subscribe({
      next: () => this.router.navigate(['/contacts'])
    });
  }
}

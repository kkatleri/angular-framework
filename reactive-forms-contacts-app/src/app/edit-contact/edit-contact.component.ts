import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ContactsService } from '../contacts/contacts.service';

@Component({
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  
  contactForm: FormGroup = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    dateOfBirth: new FormControl(),
    favoritesRanking: new FormControl()
  })

  constructor(private route: ActivatedRoute, private contactService: ContactsService) { }

  ngOnInit() {
    const contactId = this.route.snapshot.params['id'];
    if (!contactId) return

    this.contactService.getContact(contactId).subscribe(contact => {
      if(!contact) return;
      this.contactForm.controls['firstName'].setValue(contact.firstName);
      this.contactForm.controls['lastName'].setValue(contact.lastName);
      this.contactForm.controls['dateOfBirth'].setValue(contact.dateOfBirth);
      this.contactForm.controls['favoritesRanking'].setValue(contact.favoritesRanking);
    });
  }

  saveContact() {
    console.log(this.contactForm.value);
  }
}

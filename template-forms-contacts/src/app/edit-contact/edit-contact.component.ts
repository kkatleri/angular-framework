import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../contacts/contact.model';
import { FormsModule, NgForm } from '@angular/forms';
import { ContactsService } from '../contacts/contacts.service';
import { delay } from 'rxjs';

@Component({
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  constructor(private route: ActivatedRoute, 
    private contactsService: ContactsService,
  private router: Router) { }

  contact: Contact = {
    id: '',
    firstName: '',
    lastName: '',
    dateOfBirth: null,
    favoritesRanking: 0,
    phone: {
      phoneNumber: '',
      phoneType: '',
    },
    address: {
      streetAddress: '',
      city: '',
      state: '',
      postalCode: '',
      addressType: '',
    },
  };

  ngOnInit() {
    const contactId = this.route.snapshot.params['id'];
    if (!contactId) return;
    this.contactsService.getContact(contactId).subscribe(
      c => {
        if(c) this.contact = c;
      });
  }

  saveContact(ngForm: NgForm) {
    console.log(this.contact)
    console.log(ngForm.value);
    this.contactsService.saveContact(this.contact).pipe(delay(3000)).subscribe({
      next: () => this.router.navigate(['/contacts'])
    });
  }
}

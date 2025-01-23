import { tick } from "@angular/core/testing";

export interface Contact {
  id: string,
  icon: string
  firstName: string,
  lastName: string,
  dateOfBirth: Date | null,
  favoritesRanking: number | null,
  personal: boolean
  phones: Phone[],
  address: Address,
  notes: string
}

export interface Phone {
  phoneNumber: string,
  phoneType: string,
}

export interface Address {
  streetAddress: string,
  city: string,
  state: string,
  postalCode: string,
  addressType: string,
}

export const phoneTypes=[
  {name: "mobile", title: "Mobile"},
  {name: "work", title: "Work"},
  {name: "other", title: "Other"}
]

export const addressTypes=[
  {name: "home", title: "Home"},
  {name: "work", title: "Work"},
  {name: "other", title: "Other"}
]
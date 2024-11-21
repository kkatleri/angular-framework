export interface Contact {
  id: string,
  firstName: string,
  lastName: string,
  dateOfBirth: string,
  favoritesRanking: number | null,
  personal: boolean,
  phone: Phone,
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

export const phoneTypes = [
  { value: 'home', label: 'Home' },
  { value: 'work', label: 'Work' },
  { value: 'mobile', label: 'Mobile' },
]

export const addressTypes = [
  { value: 'home', label: 'Home' },
  { value: 'work', label: 'Work' },
  { value: 'Other', label: 'Other' },
]
export interface Contact {
  id: string,
  profileIcon: string,
  firstName: string,
  lastName: string,
  dateOfBirth: Date | null,
  favoritesRanking: number | null,
  personal: boolean,
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
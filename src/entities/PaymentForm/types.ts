export interface ICreditCardProps {
  cardNumber: string;
  cardHolder: string;
  expirationMonth: string;
  expirationYear: string;
  cvv: string;
  logo?: string;
}

//API INTERFACES
export interface CardHolderIdentification {
  type: string;
  number: string;
}
export interface TokenRequest {
  card_number: string;
  card_expiration_month: string;
  card_expiration_year: string;
  security_code: string;
  card_holder_name: string;
  card_holder_birthday: string;
  card_holder_door_number: number;
  card_holder_identification: CardHolderIdentification;
}

//PaymentForm

export interface FormErrors {
  [key: string]: string;
}
export interface FormData {
  cardNumber: string;
  cardHolder: string;
  expirationDate: string;
  securityCode: string;
  dni: string;
  duesQuantity: string;
  cardHolderBirthdate: string;
}

export interface Payment extends TokenRequest {
  card_expiration_month: string;
  card_expiration_year: string;
  card_holder_door_number: number;
  card_holder_identification: {
    type: string;
    number: string;
  };
  amount: number;
  status?: string;
}

//PaymentForm

export interface PaymentFormProps {
  formData: FormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}
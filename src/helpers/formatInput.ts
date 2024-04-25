export const formatInput = (name: string, value: string): string => {
  switch (name) {
    case "cardNumber":
    case "securityCode":
    case "dni":
      // Asegurar que solo se ingresen números y se limite la longitud
      const maxLength = { cardNumber: 16, securityCode: 3, dni: 9 }[name];
      return value.replace(/\D/g, "").slice(0, maxLength);

    case "expirationDate":
      // Formatear como MM/YY
      const digits = value.replace(/\D/g, "");
      return digits.length <= 2
        ? digits
        : `${digits.slice(0, 2)}/${digits.slice(2, 4)}`;

    case "cardHolderBirthdate":
      // Formatear como DD-MM-YYYY
      const cleanDigits = value.replace(/\D/g, "");
      if (cleanDigits.length <= 2) {
        return cleanDigits;
      } else if (cleanDigits.length <= 4) {
        return `${cleanDigits.slice(0, 2)}-${cleanDigits.slice(2)}`;
      } else {
        return `${cleanDigits.slice(0, 2)}-${cleanDigits.slice(
          2,
          4
        )}-${cleanDigits.slice(4, 8)}`;
      }

    default:
      return value;
  }
};

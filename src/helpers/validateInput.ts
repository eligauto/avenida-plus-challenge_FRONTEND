export const validateInput = (name: string, value: string): string => {
  switch (name) {
    case "cardNumber":
      return value.length === 16 && /^\d+$/.test(value)
        ? ""
        : "Número de tarjeta inválido";

    case "securityCode":
      return value.length === 3 && /^\d+$/.test(value)
        ? ""
        : "Código de seguridad inválido";

    case "dni":
      return (value.length === 7 || value.length === 8) && /^\d+$/.test(value)
        ? ""
        : "DNI inválido";

    default:
      return "";
  }
};

import { useState } from "react";
import { FormData, Payment, FormErrors } from "../entities/PaymentForm/types";
import { createPayment } from "../helpers";

export const usePaymentProcessor = (
  formData: FormData,
  errors: FormErrors,
  total: number
) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const allFieldsValid = (): boolean => {
    const noErrors = Object.values(errors).every((error) => error === "");
    const allFilled = Object.values(formData).every(
      (field) => field.trim() !== ""
    );
    return noErrors && allFilled;
  };

  const handleSubmit = async () => {
    if (!allFieldsValid()) {
      setModalMessage("Por favor completa todos los campos correctamente.");
      setModalOpen(true);
      return;
    }

    const paymentData: Payment = {
      card_number: formData.cardNumber,
      card_expiration_month: formData.expirationDate.split("/")[0],
      card_expiration_year: formData.expirationDate.split("/")[1],
      security_code: formData.securityCode,
      card_holder_name: formData.cardHolder,
      card_holder_birthday: formData.cardHolderBirthdate.replace(/-/g, ""),
      card_holder_door_number: 1502,
      card_holder_identification: {
        type: "dni",
        number: formData.dni,
      },
      amount: total,
    };
    try {
      const response = await createPayment(paymentData);

      if (response.status !== "approved") throw new Error(response.message);
      setModalMessage("Pago realizado con éxito.");
      setModalOpen(true);
    } catch (error: any) {
      console.error("Error al realizar el pago:", error);
      setModalMessage(`Error al realizar el pago: ${error.message}`);
      setModalOpen(true);
    }
  };
  const handleCloseModal = () => {
    setModalOpen(false);
    setModalMessage("");
  };

  return { isModalOpen, handleSubmit, modalMessage, handleCloseModal };
};

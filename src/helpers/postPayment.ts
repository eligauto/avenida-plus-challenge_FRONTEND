import axios from "axios";
import { Payment } from "../entities/PaymentForm/types";

// Este helper va a hacer un POST a la API que creamos para procesar el pago.
export const createPayment = async (paymentData: Payment) => {
  try {
    const response = await axios.post(
      `http://localhost:3000/api/v1/payments/create`, // se que no es la mejor práctica tener la URL hardcodeada, pero por simplicidad y al ser el único lugar donde se hace un request a la API, lo dejo así.
      paymentData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error: any) {
    if (error.response.data.statusCode === 400) {
      throw new Error(error.response.data.message);
    }
  }
};

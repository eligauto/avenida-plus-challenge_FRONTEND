import axios from "axios";
import { Payment } from "../types";

export const createPayment = async (paymentData: Payment) => {
  try {
    const response = await axios.post(
      `http://localhost:3000/api/v1/payments/create`,
      paymentData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    
    return response.data;
  } catch (error: any) {
    console.error(error);
  }
};

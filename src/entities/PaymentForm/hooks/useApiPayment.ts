import { useState } from "react";
import { Payment } from "../types";
import { createPayment } from "../helpers/postPayment";

export const useApiPayment = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [paymentResponse, setPaymentResponse] = useState<Payment | null>(null);
    const [error, setError] = useState<string | null>(null);

    const postPayment = async (paymentData: Payment) => {
        setIsLoading(true);
        setIsError(false);
        try {
            const response = await createPayment(paymentData);
            setPaymentResponse(response);
        } catch (error: any) {
            setIsError(true);
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return { isLoading, isError, paymentResponse, error, postPayment };
}
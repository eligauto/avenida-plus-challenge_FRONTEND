import { useState, ChangeEvent } from 'react';
import { FormData, FormErrors } from '../entities/PaymentForm/types';
import { formatInput, validateInput } from '../helpers';

// Este hook va a manejar el estado del formulario y los errores de validación.
export const useFormData = () => {
    const [formData, setFormData] = useState<FormData>({
        cardNumber: "",
        cardHolder: "",
        expirationDate: "",
        securityCode: "",
        dni: "",
        duesQuantity: '1',
        cardHolderBirthdate: ""
    });

    const [errors, setErrors] = useState<FormErrors>({});

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        let formattedValue = formatInput(name, value);
        const error = validateInput(name, formattedValue);
        setFormData(prev => ({ ...prev, [name]: formattedValue }));
        setErrors(prev => ({ ...prev, [name]: error }));
    };

    return { formData, handleChange, errors, setFormData, setErrors };
};


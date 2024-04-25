import React, { useState } from "react";
import { OrderDetails, PaymentForm } from "./entities";
import { FormData, Payment } from "./entities/PaymentForm/types";
import { createPayment } from "./entities/PaymentForm/helpers/postPayment";
import ModalAlert from "./entities/ui/components/ModalAlert";

// Componente Padre:
export const PaymentPage = () => {

    const [formData, setFormData] = useState<FormData>({
        cardNumber: "",
        cardHolder: "",
        expirationDate: "",
        securityCode: "",
        dni: "",
        duesQuantity: '1',
        cardHolderBirthdate: ""
    });
    const [isModalOpen, setModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        if (name === "cardNumber" && value.length > 16) return;
        if (name === "expirationDate" && value.length > 5) return;
        if (name === "securityCode" && value.length > 3) return;
        if (name === "dni" && value.length > 8) return;
        if (name === "expirationDate" && value.length === 2 && !value.includes("/")) {
            return setFormData(prevState => ({
                ...prevState,
                expirationDate: value + "/"
            }));
        }
        if (name === "expirationDate" && value.length === 2 && value.includes("/")) {
            return setFormData(prevState => ({
                ...prevState,
                expirationDate: value.slice(0, 1)
            }));
        }
        if (name === "cardHolderBirthdate" && value.length > 10) return;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async () => {
        const expirationMonth = formData.expirationDate.slice(0, 2);
        const expirationYear = formData.expirationDate.slice(3);
        //Convertir el formData.cardHolderBirthdate a este formato: "01091994"
        const cardHolderBirthdate = formData.cardHolderBirthdate.split('-').join('');
        const paymentData: Payment = {
            card_number: formData.cardNumber,
            card_holder_name: formData.cardHolder,
            card_expiration_month: expirationMonth,
            card_expiration_year: expirationYear,
            security_code: formData.securityCode,
            card_holder_birthday: cardHolderBirthdate,
            card_holder_door_number: 1234,
            card_holder_identification: {
                type: "dni",
                number: formData.dni
            },
            amount: total
        };

        console.log("Datos del pago:", paymentData);

        try {
            const response = await createPayment(paymentData);
            if (response.statusCode !== 200) throw new Error(response.message);
            console.log("Pago realizado con éxito:", response);
            setModalMessage('Pago realizado con éxito.');
            setModalOpen(true);
        } catch (error) {
            console.error("Error al realizar el pago:", error);
            setModalMessage('Error al realizar el pago. Intente de nuevo.');
            setModalOpen(true);
        }
    };


    return (
        <div className="payment-page-container">
            <PaymentForm formData={formData} handleChange={handleChange} />
            <OrderDetails
                itemsCount={products.length}
                itemsCost={subtotal}
                shippingCost={shippingCost}
                subtotal={subtotal}
                interest={interest}
                CFT={CFT}
                total={total}
                onConfirm={handleSubmit}
            />
            <ModalAlert
                isOpen={isModalOpen}
                message={modalMessage}
                onClose={() => setModalOpen(false)}
            />
        </div>
    );
}

const products = [
    { id: 1, name: 'Producto 1', price: 25.00 },
    { id: 2, name: 'Producto 2', price: 25.00 },
    { id: 3, name: 'Producto 3', price: 25.00 },
    { id: 4, name: 'Producto 4', price: 25.00 },
    { id: 5, name: 'Producto 5', price: 25.00 },
    { id: 6, name: 'Producto 6', price: 25.00 },
];

// Valores calculados a partir de la lista de productos
const shippingCost = 35.00; // Costo de envío hardcodeado
const subtotal = products.reduce((acc, product) => acc + product.price, 0); // Suma los precios de todos los productos
const interest = 0;
const CFT = "TEA 0%"; // CFT hardcodeado
const total = subtotal + shippingCost + interest; // Total calculado
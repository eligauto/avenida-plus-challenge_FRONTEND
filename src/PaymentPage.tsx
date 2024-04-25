import { OrderDetails, PaymentForm } from "./entities";
import ModalAlert from "./entities/ui/components/ModalAlert";
import { useFormData, usePaymentProcessor, useProductCalculations } from "./hooks";

// Componente Padre:
export const PaymentPage = () => {

    const { products, total, CFT, interest, shippingCost, subtotal } = useProductCalculations();
    const { formData, handleChange, errors } = useFormData();
    const { isModalOpen, handleSubmit, handleCloseModal, modalMessage } = usePaymentProcessor(formData, errors, total);


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
                onClose={() => handleCloseModal()}
            />
        </div>
    );
}

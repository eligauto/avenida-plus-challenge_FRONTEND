import { OrderDetails, PaymentForm } from "./entities";

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

// Componente Padre:
export const PaymentPage = () => {
    return (
        <div className="payment-page-container">
            <PaymentForm />
            <OrderDetails
                itemsCount={products.length}
                itemsCost={subtotal}
                shippingCost={shippingCost}
                subtotal={subtotal}
                interest={interest}
                CFT={CFT}
                total={total}
            />
        </div>
    );
}


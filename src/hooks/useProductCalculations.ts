import { useMemo } from 'react';

// Este hook podria incluso aceptar parametros si necesitas una lógica más dinamica.
export const useProductCalculations = () => {
    const products = useMemo(() => [
        { id: 1, name: 'Producto 1', price: 25.00 },
        { id: 2, name: 'Producto 2', price: 25.00 },
        { id: 3, name: 'Producto 3', price: 25.00 },
        { id: 4, name: 'Producto 4', price: 25.00 },
        { id: 5, name: 'Producto 5', price: 25.00 },
        { id: 6, name: 'Producto 6', price: 25.00 },
    ], []);

    const subtotal = useMemo(() => products.reduce((acc, product) => acc + product.price, 0), [products]);
    const shippingCost = 35.00;  // Podría venir de otra fuente o ser dinámico.
    const interest = 0;
    const CFT = "TEA 0%"; // CFT hardcodeado
    const total = useMemo(() => subtotal + shippingCost, [subtotal, shippingCost]);

    return { products, subtotal, total, shippingCost, interest, CFT};
};
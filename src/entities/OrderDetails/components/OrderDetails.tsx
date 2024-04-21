import { IOrderDetailsProps } from "../types";

export const OrderDetails: React.FC<IOrderDetailsProps> = ({
    itemsCost,
    itemsCount,
    shippingCost,
    subtotal,
    interest = 0,
    CFT,
    total,
}) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Detalle de la orden</h5>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item border-0">
                        Productos (x{itemsCount})
                        <span className="float-end">${itemsCost.toFixed(2)}</span>
                    </li>
                    <li className="list-group-item">
                        Costo de envío
                        <span className="float-end">${shippingCost.toFixed(2)}</span>
                    </li>
                    <li className="list-group-item border-0">
                        Subtotal
                        <span className="float-end">${subtotal.toFixed(2)}</span>
                    </li>
                    {interest > 0 && (
                        <li className="list-group-item border-0">
                            Intereses
                            <span className="float-end">${interest.toFixed(2)}</span>
                        </li>
                    )}
                    <li className="list-group-item border-0">
                        CFT
                        <span className="float-end">{CFT}</span>
                    </li>
                    <li className="list-group-item border-bottom">
                        Total
                        <span className="float-end">${total.toFixed(2)}</span>
                    </li>
                </ul>
                <div className="form-check my-2">
                    <input className="form-check-input" type="checkbox" id="termsCheck" />
                    <label className="form-check-label" htmlFor="termsCheck">
                        Acepto los términos y condiciones
                    </label>
                </div>
                <button type="button" className="custom-btn">Comprar</button>
            </div>
        </div>
    );
};

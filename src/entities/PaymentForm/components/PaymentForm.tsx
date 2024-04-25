import React, { useState } from 'react';
import { CreditCard } from './CreditCard';
import { PaymentFormProps } from '../types';

export const PaymentForm: React.FC<PaymentFormProps> = ({ formData, handleChange }) => {


    const expirationMonth = formData.expirationDate.slice(0, 2);
    const expirationYear = formData.expirationDate.slice(3);

    return (
        <div className="card">
            <div className="card-body">
                <form className="row">
                    <div className="col-md-6">
                        <div className="card-body">
                            <h5 className="card-title my-4">¿Cómo querés pagar?</h5>
                            <div className="mb-3">
                                <h6 className='card-text'>Ingresá los datos de la tarjeta</h6>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="cardNumber"
                                    name="cardNumber"
                                    value={formData.cardNumber}
                                    onChange={handleChange}
                                    placeholder="Número de la tarjeta"
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="cardHolder"
                                    name="cardHolder"
                                    value={formData.cardHolder}
                                    onChange={handleChange}
                                    placeholder="Nombre y apellido en la tarjeta"
                                />
                            </div>
                            <div className="row">
                                <div className="col-6 mb-3">
                                    <label htmlFor="expirationDate" className="form-label">Fecha de expiración</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="expirationDate"
                                        name="expirationDate"
                                        value={formData.expirationDate}
                                        onChange={handleChange}
                                        placeholder="MM/AA"
                                    />
                                </div>
                                <div className="col-6 mb-3">
                                    <label htmlFor="securityCode" className="form-label">Código de seguridad</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="securityCode"
                                        name="securityCode"
                                        value={formData.securityCode}
                                        onChange={handleChange}
                                        placeholder="CVV"
                                    />
                                </div>
                            </div>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="dni"
                                    name="dni"
                                    value={formData.dni}
                                    onChange={handleChange}
                                    placeholder='DNI del titular de la tarjeta'
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="cardHolderBirthdate" className="form-label">Fecha de nacimiento del titular de la tarjeta</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="cardHolderBirthdate"
                                    name="cardHolderBirthdate"
                                    value={formData.cardHolderBirthdate}
                                    onChange={handleChange}
                                    placeholder='DD-MM-AAAA'
                                />
                            </div>
                            <div className="mb-3">
                                <select
                                    className="form-select"
                                    id="duesQuantity"
                                    name="duesQuantity"
                                    value={formData.duesQuantity}
                                    onChange={handleChange}
                                >
                                    <option value="1">1 cuota sin interés</option>
                                    <option value="3">3 cuotas sin interés</option>
                                    <option value="6">6 cuotas sin interés</option>
                                    <option value="12">12 cuotas sin interés</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <CreditCard
                            cardNumber={formData.cardNumber}
                            cardHolder={formData.cardHolder}
                            expirationMonth={expirationMonth}
                            expirationYear={expirationYear}
                            cvv={formData.securityCode}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};



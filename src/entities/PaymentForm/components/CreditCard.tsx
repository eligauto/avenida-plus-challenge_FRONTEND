import React, { useState } from "react";
import { ICreditCardProps } from "../types";
import chip from "../../../assets/cardchip.png";
import "../styles/CreditCard.css";
//Componente para diseñar la sección de la tarjeta de crédito
export const CreditCard: React.FC<ICreditCardProps> = ({
    cardNumber,
    cardHolder,
    expirationMonth,
    expirationYear,
    cvv,
}) => {

    const cardNumberFormated = cardNumber
        .replace(/\s/g, "")
        .match(/.{1,4}/g)
        ?.join(" ") || "";

    return (
        <div className="credit-card">
            <div className="card-container">
                <div className="chipcvv-container">
                    <div className="chip">
                        <img src={chip} alt="" />
                        <img id="icon" src="https://testing-first007.s3.amazonaws.com/assets/contactless.png" alt="" />
                    </div>
                    <div className="cvv">{cvv || 123}</div>
                </div>
                <div className="card-number">{cardNumberFormated || "**** **** **** ****"}</div>
                <div className="date-container">
                    <div className="date-since">
                        <p>DESDE<br />SINCE</p>
                        <div>01/20</div>
                    </div>
                    <div className="date-until">
                        <p>HASTA<br />UNTIL</p>
                        <div> {`${expirationMonth}/${expirationYear}`}</div>
                    </div>
                </div>
                <div className="card-name">{cardHolder.toUpperCase() || "NOMBRE APELLIDO"}</div>
            </div>
        </div>
    );
};

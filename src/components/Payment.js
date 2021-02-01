// Import payment buttons
import GooglePayButton from '@google-pay/button-react'

import React from 'react'
import { useParams } from 'react-router-dom';
import "./styles.css";


const Payment = () => {

    const {method} = useParams();
    console.log(method)

    const paymentRequest = {
      apiVersion: 2,
      apiVersionMinor: 0,
      allowedPaymentMethods: [
        {
          type: "CARD",
          parameters: {
            allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
            allowedCardNetworks: ["MASTERCARD", "VISA"],
          },
          tokenizationSpecification: {
            type: "PAYMENT_GATEWAY",
            parameters: {
              gateway: "example",
              gatewayMerchantId: 'exampleGatewayMerchantId'
            },
          },
        },
      ],
      merchantInfo: {
        merchantId: "12345678901234567890",
        merchantName: "Demo Merchant",
      },
      transactionInfo: {
        totalPriceStatus: "FINAL",
        totalPriceLabel: "Total",
        totalPrice: "1",
        currencyCode: "USD",
        countryCode: "US",
      },
      shippingAddressRequired: true,
      callbackIntents: ["PAYMENT_AUTHORIZATION"],
    };


    return (
      <div className="container">
        <div className="payment-con">
          {/* Implement payment buttons */}

          {(method === "G-Pay") ? (
              <GooglePayButton
            environment="TEST"
            paymentRequest={paymentRequest}
            onLoadPaymentData={(paymentRequest) => {
              console.log("Success", paymentRequest);
              
            }}
            onPaymentAuthorized= {paymentData => {
                console.log("Success", paymentData);
                return { transactionState: 'SUCCESS'}
            }}
            existingPaymentMethodRequired="false"
            buttonColor="black"
            buttonTyppe="Buy"
          />
          ): (<h1>Not developed yet</h1>)}

          
        </div>
      </div>
    );
}

export default Payment

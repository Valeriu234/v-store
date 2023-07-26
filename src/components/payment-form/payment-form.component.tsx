import React from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

import "./payment-form.styles.scss";
import ButtonComponent from "../button/button.component.tsx";

const PaymentFormComponent = () => {
	const stripe = useStripe();
	const elements = useElements();

	const paymentHandler = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!stripe || !elements) {
			return;
		}
		const response = await fetch("/.netlify/functions/create-payment-intent", {
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ amount: 10000 }),
		}).then((res) => res.json());

		// eslint-disable-next-line no-console
		console.log(response);
	};

	return (
		<div className="payment-form">
			<form onSubmit={paymentHandler}>
				<h2>Credit card payment</h2>
				<CardElement />
				<div className="payment-form__button">
					<ButtonComponent buttonType={"inverted"}>Pay now</ButtonComponent>
				</div>
			</form>
		</div>
	);
};

export default PaymentFormComponent;

import { useFormik } from "formik";
import * as Yup from "yup";

import {
	createAuthWithEmailAndPassword,
	createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils.js";

const initialValues = {
	displayName: "",
	email: "",
	password: "",
	confirmPassword: "",
};

const validationSchema = Yup.object({
	displayName: Yup.string()
		.max(15, "Must be 20 characters or less")
		.required("Required"),
	email: Yup.string().email("Invalid email address").required("Required"),
	password: Yup.string()
		.max(20, "Must be 20 characters or less")
		.required("Required"),
	confirmPassword: Yup.string()
		.oneOf([Yup.ref("password")], "Passwords must match")
		.required("Required"),
});

export interface formikValues {
	displayName: string;
	email: string;
	password: string;
	confirmPassword: string;
}

export const useFormikSignUpHook = () => {
	const onSubmitHandler = async ({
		email,
		password,
		displayName,
	}: formikValues) => {
		const response = await createAuthWithEmailAndPassword(
			email,
			password
		).catch((res) => alert(res.message));

		await createUserDocumentFromAuth(response?.user, {
			displayName: displayName,
		});
	};
	return useFormik({
		initialValues: initialValues,
		validationSchema: validationSchema,
		onSubmit: onSubmitHandler,
		validateOnChange: true,
	});
};

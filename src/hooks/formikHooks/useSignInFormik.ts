import { useFormik } from "formik";
import * as Yup from "yup";
import { signInAuthWithEmailAndPassword } from "../../utils/firebase/firebase.utils.js";

const initialValues = {
	email: "",
	password: "",
};

const validationSchema = Yup.object({
	email: Yup.string().email("Invalid email address").required("Required"),
	password: Yup.string()
		.max(20, "Must be 20 characters or less")
		.required("Required"),
});

interface formikValues {
	email: string;
	password: string;
}

export const useFormikSignInHook = () => {
	const onSubmitHandler = async ({ email, password }: formikValues) => {
		await signInAuthWithEmailAndPassword(email, password).catch((error) => {
			alert(error.message);
		});
	};

	return useFormik({
		initialValues: initialValues,
		validationSchema: validationSchema,
		onSubmit: onSubmitHandler,
		validateOnChange: true,
	});
};

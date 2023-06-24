import { useFormik } from "formik";
import * as Yup from "yup";

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
const onSubmitHandler = async (values: formikValues) => {
	alert(values);
};

export const useFormikSignInHook = () => {
	const formik = useFormik({
		initialValues: initialValues,
		validationSchema: validationSchema,
		onSubmit: onSubmitHandler,
		validateOnChange: false,
		validateOnBlur: false,
	});
	return formik;
};

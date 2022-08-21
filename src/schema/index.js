import * as Yup from 'yup';

export const registrationSchema = Yup.object({
	name: Yup.string().min(3).required("Please enter your name"),
	dob: Yup.string().required("Please enter your dob or age"),
	sex: Yup.string().required("Please enter your sex")
});
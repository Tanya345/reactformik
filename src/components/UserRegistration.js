import React, { createContext, useState } from 'react'
import AddressDetails from './AddressDetails'
import ContactDetail from './ContactDetail'
import OtherDetails from './OtherDetails'
import PersonalDetail from './PersonalDetail'
import { useFormik } from 'formik';
import { registrationSchema } from '../schema'
export const DataContext = createContext([]);

const initialValues =
{
	name: "",
	mobile: "",
	dob: "",
	sex: "",
	govtIdType: "",
	govtId: "",
	guardian: "",
	email: "",
	emergencyNo: "",
	address: "",
	country: "",
	state: "",
	city: "",
	pincode: "",
	occupation: "",
	religion: "",
	nationality: "",
	bloodGroup: "",
	marital: ""
}

const UserRegistration = () => {

	let [users, setUsers] = useState([])
	const { values, errors, handleChange, handleSubmit, touched } = useFormik({
		initialValues,
		validationSchema: registrationSchema,
		onSubmit: (values,action) => {
			setUsers(prevState =>[...prevState,{name: values.name, dob: values.dob, sex: values.sex }])
			action.resetForm();
		}
	})

	return (
		<DataContext.Provider value={{ values, errors, touched, handleChange }}>
			<div className='container'>
				<h3 className='mt-3 h-10'>UserRegistration</h3>
				<form className="form-container bg-in my-4 py-4 px-2">
					<PersonalDetail />
					<ContactDetail />
					<AddressDetails />
					<OtherDetails />
					<div className="d-flex justify-content-end bg-in mx-3">
						<button type="button" className="btn btn-danger mx-2">Cancel</button>
						<button type="button" className="btn btn-success mx-2" onClick={handleSubmit}>Submit</button>
					</div>
				</form>
				<div className="container-data  my-3 p-3">
					<h3>List Of Users</h3>
					{ users.length>0 ? <table className="table table-striped table-success">
						<thead>
							<tr>
								<th scope="col">#</th>
								<th scope="col">Name</th>
								<th scope="col">Dob/Age</th>
								<th scope="col">Sex</th>
							</tr>
						</thead>
						<tbody>
							{users.map((user,i) => {
								return (
									<tr key={i}>
										<th scope="row">{i+1}</th>
										<td>{user.name}</td>
										<td>{user.dob}</td>
										<td>{user.sex}</td>
									</tr>
								)
							})}
						</tbody>
					</table>: 
					<div className="container-sm">
						Registered Users will display here
					</div>}
				</div>
			</div>
		</DataContext.Provider>
	)
}

export default UserRegistration
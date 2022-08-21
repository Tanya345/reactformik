import React,{useContext} from 'react'
import { DataContext } from './UserRegistration'

const ContactDetail = () => {
	const { values,handleChange } = useContext(DataContext)

	return (
		<div className='d-flex flex-column align-items-start mx-3'>
			<h5>Contact Details</h5>
			<div className='d-flex justify-content-start flex-wrap w-100'>
				<div className="mb-3 d-flex flex-column w-30 mx-2">
					<label htmlFor="guardian" className="form-label align-self-start">Guardian Details</label>
					<select className="form-select" id="guardian" value={values?.guardian} onChange={handleChange}>
						<option>Enter Label</option>
						<option value="1">Father's Name</option>
						<option value="2">Mother's Name</option>
						<option value="3">Brother's Name</option>
						<option value="3">Sister's Name</option>
					</select>
					<input type="text" required className="form-control mt-2" id="guardian" name="guardian" placeholder="Enter Guardian Name" />
				</div>
				<div className="mb-3 d-flex flex-column w-20">
					<label htmlFor="email" className="form-label align-self-start">Email</label>
					<input type="email" className="form-control mt-2" id="email" name="email" placeholder="Enter Email" value={values?.email} onChange={handleChange}/>
				</div>
				<div className="mb-3 d-flex flex-column w-20">
					<label htmlFor="emergencyNo" className="form-label align-self-start">Emergency Contact No</label>
					<input type="number" className="form-control mt-2" id="emergencyNo" name="emergencyNo" placeholder="Enter Emergency No" value={values?.emergencyNo} onChange={handleChange}/>
				</div>
			</div>
		</div >
	)
}

export default ContactDetail
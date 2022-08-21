import React,{useContext} from 'react'
import { DataContext } from './UserRegistration'

const OtherDetails = () => {
	const {values,handleChange}=useContext(DataContext)
	return (
		<div className='d-flex flex-column align-items-start mx-3'>
			<h5>Other Details</h5>
			<div className='d-flex justify-content-start flex-wrap w-100'>
				<div className="mb-3 d-flex flex-column w-30 mx-2">
					<label htmlFor="occupation" className="form-label align-self-start">Occupation</label>
					<input type="text" required className="form-control mt-2" id="occupation" name="occupation"
					value={values.occupation} onChange={handleChange} placeholder="Enter Occupation" />
				</div>
				<div className="mb-3 d-flex flex-column w-30 mx-2">
					<label htmlFor="religion" className="form-label align-self-start">Religion</label>
					<select className="form-select" id="religion" value={values.religion} onChange={handleChange}>
						<option>Enter Religion</option>
						<option value="1">Hindu</option>
						<option value="2">Muslim</option>
						<option value="3">Sikhism</option>
						<option value="3">Islam</option>
					</select>
				</div>
				<div className="mb-3 d-flex flex-column w-30 mx-2">
					<label htmlFor="marital" className="form-label align-self-start">Marital Status</label>
					<select className="form-select" id="marital" value={values.marital} onChange={handleChange}>
						<option>Enter Marital Status</option>
						<option value="1">Married</option>
						<option value="2">Unmarried</option>
					</select>
				</div>
				<div className="mb-3 d-flex flex-column w-20 mx-2">
					<label htmlFor="bloodGroup" className="form-label align-self-start">Blood Group</label>
					<select className="form-select" id="bloodGroup" value={values.bloodGroup} onChange={handleChange}>
						<option>Group</option>
						<option value="1">A+</option>
						<option value="2">B+</option>
						<option value="3">AB+</option>
						<option value="3">O+</option>
					</select>
				</div>
				<div className="mb-3 d-flex flex-column w-20 mx-2">
					<label htmlFor="nationality" className="form-label align-self-start">Nationality</label>
					<input type="text" className="form-control mt-2" id="nationality" name="nationality" placeholder="Enter nationality" value={values.nationality} onChange={handleChange}/>
				</div>
			</div>
		</div >
	)
}

export default OtherDetails
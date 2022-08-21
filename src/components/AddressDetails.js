import React, { useContext } from 'react'
import { DataContext } from './UserRegistration'

const AddressDetails = () => {
	const { values, handleChange } = useContext(DataContext)

	return (
		<div className='d-flex flex-column align-items-start mx-3'>
			<h5>Address Details</h5>
			<div className='d-flex justify-content-start flex-wrap w-100'>
				<div className="mb-3 d-flex flex-column w-30 mx-2">
					<label htmlFor="address" className="form-label align-self-start">Sex</label>
					<input type="text" className="form-control mt-2" id="address" name="address" placeholder="Enter Address" value={values.address} onChange={handleChange} />
				</div>
				<div className="mb-3 d-flex flex-column w-30 mx-2">
					<label htmlFor="state" className="form-label align-self-start">State</label>
					<select className="form-select" id="guardian" value={values.state} onChange={handleChange}>
						<option>Enter State</option>
						<option value="1">Up</option>
						<option value="2">Haryana</option>
						<option value="3">UT</option>
						<option value="3">Delhi</option>
					</select>
				</div>
				<div className="mb-3 d-flex flex-column w-30 mx-2">
					<label htmlFor="city" className="form-label align-self-start">City</label>
					<input type="text" className="form-control mt-2" id="city" name="city" placeholder="Enter city" value={values.city} onChange={handleChange} />
				</div>
				<div className="mb-3 d-flex flex-column w-30 mx-2">
					<label htmlFor="country" className="form-label align-self-start">Country</label>
					<input type="text" className="form-control mt-2" id="country" name="country" placeholder="Enter country" value={values.country} onChange={handleChange} />
				</div>
				<div className="mb-3 d-flex flex-column w-20 mx-2">
					<label htmlFor="pincode" className="form-label align-self-start">PinCode</label>
					<input type="number" className="form-control mt-2" id="pincode" name="pincode" placeholder="Enter pincode" value={values.pincode} onChange={handleChange} />
				</div>
			</div>
		</div >
	)
}

export default AddressDetails
import React, { useContext } from 'react'
import { DataContext } from './UserRegistration'

const PersonalDetail = () => {
	const { values, errors, touched, handleChange } = useContext(DataContext)
	return (
		<div className='d-flex flex-column align-items-start mx-3'>
			<h5>Personal Details</h5>
			<div className='d-flex justify-content-start flex-wrap w-100'>
				<div className="mb-3 d-flex flex-column w-30 mx-2">
					<label htmlFor="name" className="form-label align-self-start">Name<sup className="text-danger">*</sup></label>
					<input type="text" required className="form-control" id="name" name="name" value={values.name} onChange={handleChange} placeholder="Enter Name" />
					{errors.name && touched.name && <strong className="text-danger align-self-start">{errors.name}</strong>}
				</div>
				<div className="mb-3 d-flex flex-column w-30 mx-2">
					<label htmlFor="mobile" className="form-label align-self-start">Mobile</label>
					<input type="number" className="form-control" id="mobile" name="mobile" placeholder="Enter Mobile" value={values.mobile} onChange={handleChange} />
				</div>
				<div className="mb-3 d-flex flex-column w-30 mx-2">
					<label htmlFor="dob" className="form-label align-self-start">Date of Birth or Age<sup className="text-danger">*</sup></label>
					<input type="number" required className="form-control" id="dob" name="dob" placeholder="DD/MM/YYYY or Age in Years" value={values.dob} onChange={handleChange} />
					{errors.dob && touched.dob && <strong className="text-danger align-self-start">{errors.dob}</strong>}
				</div>
				<div className="mb-3 d-flex flex-column w-30 mx-2">
					<label htmlFor="govtId" className="form-label align-self-start">Govt Issued ID</label>
					<select className="form-select" id="govtIdType" value={values.govtIdType} onChange={handleChange}>
						<option>ID Type</option>
						<option value="Adhaar No">Adhaar</option>
						<option value="PAN NO">PAN</option>
						<option value="Voter Card No">Voter</option>
					</select>
					<input type="text" className="form-control mt-2" name="govtId" id="govtId"
						placeholder={`${values.govtIdType ? values.govtIdType : 'Enter Govt ID'}`} value={values.govtId} onChange={handleChange} />
				</div>
				<div className="mb-3 d-flex flex-column w-20">
					<label htmlFor="sex" className="form-label align-self-start">Sex<sup className="text-danger">*</sup></label>
					<select className="form-select" required id="sex" value={values.sex} onChange={handleChange} placeholder="Enter Sex">
						<option>Enter Sex</option>
						<option value="male">Male</option>
						<option value="female">Female</option>
						<option value="other">Other</option>
					</select>
					{errors.sex && touched.sex && <strong className="text-danger align-self-start">{errors.sex}</strong>}
				</div>
			</div>
		</div>
	)
}

export default PersonalDetail
import './page.css'

const PersonalDeatails = ({ formData, handleChange, errors }) => {

    return (
       <>
       

            <h2>Personal Information</h2>

            <hr/>


            <div className="mb-3">
                <label for='name' className="form-label">Name :</label>
                <input id='name' className="form-control" name='name' value={formData.name} type='text' onChange={handleChange} placeholder="Enter your Name" />
                {errors.name && <p className='error'>{errors.name}</p>}

            </div>


<div className="mb-3">

<label for='email' className="form-label" >Email : </label>
            <input className="form-control" id='email' name='email' value={formData.email} type='email' onChange={handleChange} placeholder="Enter your Email" />

            {errors.email && <p className='error'>{errors.email}</p>}

</div>

           
<div className="mb-3">

<label className="form-label" for='phoneno'>Phone No : </label>
            <input className="form-control" id='phoneno' name='phone' value={formData.phone} type='text' onChange={handleChange} placeholder="Enter your PhoneNo" />

            {errors.phone && <p className='error'>{errors.phone}</p>}

</div>
           



</>
    )
}

export default PersonalDeatails
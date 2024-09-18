import './page.css'

const Address = ({ formData, handleChange, errors }) => {



    return (
       <>
            <h2>Address Information</h2>

            <hr/>

            <div className="mb-3">

                <label for='address' className="form-label">Address-1 : </label>
                <input className="form-control" id='address' name='address1' value={formData.address1} type='text' onChange={handleChange} placeholder="Address Line 1" />

                {errors.address1 && <p className='error'>{errors.address1}</p>}

            </div>



            <div className="mb-3">
                <label for='address-2' className="form-label">Address-2 : </label>
                <input className="form-control" id='address-2' name='address2' value={formData.address2} type='text' onChange={handleChange} placeholder="Address Line 2" />

            </div>




            <div className="mb-3">

                <label for='city' className="form-label">City : </label>
                <input className="form-control" id='city' name='city' value={formData.city} type='text' onChange={handleChange} placeholder="Enter City Name" />
                {errors.city && <p className='error'>{errors.city}</p>}

            </div>


            <div className="mb-3">

                <label for='state' className="form-label">State : </label>
                <input className="form-control" id='state' name='state' value={formData.state} type='text' onChange={handleChange} placeholder="Enter State Name" />
                {errors.state && <p className='error'>{errors.state}</p>}

            </div>


            <div className="mb-3">
                <label for='pincode' className="form-label">PinCode : </label>
                <input className="form-control" id='pincode' name='pincode' value={formData.pincode} type='text' onChange={handleChange} placeholder="Enter Your Pincode" />
                {errors.pincode && <p className='error'>{errors.pincode}</p>}

            </div>

            </>
    )
}

export default Address
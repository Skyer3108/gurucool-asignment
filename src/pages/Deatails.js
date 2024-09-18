import './page.css'

const Details=({formData})=>{


    return(
        <div>

            <h2>Confirmation</h2>
            

<hr/>
            <p>Name : {formData.name} </p>
            <p>Email : {formData.email} </p>

            <p>Phone : {formData.phone} </p>

            <p>Address Line 1 : {formData.address1} </p>
            <p>Address Line 2 : {formData.address2} </p>

            <p>City : {formData.city}</p>
            <p>State : {formData.state}</p>

            <p>Pin Code : {formData.pincode}</p>


        </div>
    )

}

export default Details
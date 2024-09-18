import { useEffect, useState } from "react"
import PersonalDeatails from "../pages/person"
import Address from "../pages/Address"
import Details from "../pages/Deatails"


const FormData = () => {

    const [step, setStep] = useState(1)

    const [formData, setFormData] = useState(() => {

        const savedData = localStorage.getItem('formData')

        return savedData ? JSON.parse(savedData) :
            {
                name: '',
                email: '',
                phone: '',
                address1: '',
                address2: '',
                city: '',
                state: '',
                pincode: ''
            }
    })


    const [errors, setErrors] = useState({})

    const nextStep = () => {

if(validation()){
    setStep(step + 1)
}
       
    }


    const prevStep = () => {

        setStep(step - 1)
    }


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const validation=()=>{

        const newErrors={}

        if(step===1){

            if(!formData.name){

                newErrors.name='Name is  required'
            }

            if(!formData.email){
                  newErrors.email='Email is required'
            }else if(!/\S+@\S+\.\S+/.test(formData.email)){
                newErrors.email='Email format is invalid'
            }

            if(!formData.phone){
                newErrors.phone='Phone number is required'
            }

            else if(formData.phone.length!==10){
                newErrors.phone='Phone number must be exactly 10 digits'
            }
        }


        else if(step===2){

            if(!formData.address1){

                newErrors.address1='Please Enter Your Address'
            }

            if(!formData.city){
                newErrors.city='Please Enter Your City'
            }

            if(!formData.state){
                newErrors.state='Please Enter Your State'
            }

            if(!formData.pincode){
                newErrors.pincode='Please Enter Your Pincode'
            }else if(formData.pincode.length<6)
            {
                 newErrors.pincode='Pincode must be exactly 5 digits'
            }
        }

        setErrors(newErrors)

        return Object.keys(newErrors).length===0

    }




    useEffect(() => {

        localStorage.setItem('formData', JSON.stringify(formData))

        console.log('local-2')
    }, [formData])






    return (
        <div className="container mt-5  form">

            {step === 1 && <PersonalDeatails formData={formData} handleChange={handleChange} errors={errors} />}

            {step === 2 && <Address formData={formData} handleChange={handleChange} errors={errors} />}


            {step === 3 && <Details formData={formData} />}


            
<div style={{display:'flex',justifyContent:'space-between'}}>
{step > 1 && <button className="btn btn-danger" onClick={prevStep}>Back</button>}

{step < 3 && <button className="btn btn-primary" onClick={nextStep}>Next</button>}

{step === 3 && <button className="btn btn-success" onClick={() => alert('Form was Submitted')}>Submit</button>}

</div>
                
            


        </div>
    )

}

export default FormData
import React from 'react'
import NavBar from './NavBar'
import {
  MDBContainer, MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBCard,
  MDBRadio,
  MDBTextArea
} from 'mdb-react-ui-kit'
import { useState } from 'react'
import { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';




const Contact = () => {
  const [Register, SetRegister] = useState({
    firstName: '',
    lastName: "",
    email: '',
    PhoneNumber: '',
    dateofbirth: '',
    state: '',
    city: '',
    pincode: '',
    address: ''
  })

  const [gender, setGender] = useState('Male');

  /* Validation State */
  const [error, SetError] = useState({
    firstNameErr: '',
    lastNameErr: "",
    emailErr: '',
    PhoneNumberErr: '',
    genderErr: '',
    dateofbirthErr: '',
    stateErr: '',
    cityErr: '',
    pincodeErr: '',
    addressErr: ''
  })




  const HandleuserName = (e) => {
    SetRegister({
      ...Register, firstName: e.target.value
    })
  }


  const HandleLastName = (e) => {
    SetRegister({
      ...Register, lastName: e.target.value
    })
  }


  const HandleEmail = (e) => {
    SetRegister({
      ...Register, email: e.target.value
    })
  }


  const HandlePhoneNumber = (e) => {
    SetRegister({
      ...Register, PhoneNumber: e.target.value
    })
  }


  const handleDate = (e) => {
    SetRegister({
      ...Register, dateofbirth: e.target.value
    })
  }




  const handleState = (e) => {
    SetRegister({
      ...Register, state: e.target.value
    })
  }

  const handleCity = (e) => {
    SetRegister({
      ...Register, city: e.target.value
    })
  }



  const handlePincode = (e) => {
    SetRegister({
      ...Register, pincode: e.target.value
    })
  }

  const handleAddress = (e) => {
    SetRegister({
      ...Register, address: e.target.value
    })
  }


  /*Sending the Form Data*/
  const Submit = (e) => {
    const { firstName, lastName, email, PhoneNumber, dateofbirth,
      state, city, pincode, address } = Register
    e.preventDefault()



    /*Form Validation*/

    if (firstName == '' || lastName == '' || email == '' || PhoneNumber == '' || dateofbirth == '' || state == '' || city == '' || pincode == '' || address == ''
    ) {
      SetError({
        firstNameErr: 'First name cannot be emtpy',
        lastNameErr: "last name cannot be emtpy",
        emailErr: 'email name cannot be emtpy',
        emailFormate: 'email formate err',
        PhoneNumberErr: 'phone number cannot be emtpy',
        dateofbirthErr: 'date of birth  cannot be emtpy',
        stateErr: ' state cannot be emtpy',
        cityErr: 'City cannot be emtpy',
        pincodeErr: 'pin code cannot be emtpy',
        addressErr: 'Address  cannot be emtpy'
      })




      // }else if(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(email)){
      //   SetError({
      //     emailFormate:'please provide proper email formate'
      //   })

    } else {
      const formData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        PhoneNumber: PhoneNumber,
        gender: gender,
        dateofbirth: dateofbirth,
        state: state,
        city: city,
        pincode: pincode,
        address: address
      }
      console.log(formData)
       
      toast.success('Data Saved Succesfully')
      

    } 
       

  }



  return (
    <React.Fragment>
      <ToastContainer />
      <NavBar />

      {/*Contact Form*/}
      <section className='mt-5'>
        <MDBContainer>
          <h3 variant='h3' className="text-center" >Contact Page</h3>

          <MDBRow>
            {/*Form*/}
            <form>
              <MDBCard className='py-5 px-5 mt-5'>
                <MDBRow className='mb-4'>
                  <MDBCol>
                    <MDBInput id='form6Example1' value={Register.firstName} onChange={HandleuserName} name='firstName' maxlength="15" label='First name' />
                    <p>{error.firstNameErr}</p>

                  </MDBCol>
                  <MDBCol>
                    <MDBInput id='form6Example2' value={Register.lastName} onChange={HandleLastName} maxlength="15" label='Last name'
                      name='Lastname' />
                    <p>{error.lastNameErr}</p>
                  </MDBCol>
                </MDBRow>

                <MDBRow className='mb-4'>
                  <MDBCol>
                    <MDBInput type='email' id='form6Example1' value={Register.email} onChange={HandleEmail} label='Email' name='email' />
                    <p>{error.emailErr}</p>
                    <p>{error.emailFormate}</p>
                  </MDBCol>
                  <MDBCol>
                    <MDBInput id='form6Example2' value={Register.PhoneNumber} maxLength='10' onChange={HandlePhoneNumber} label='PhoneNumber' name='phonenumber' />
                    <p>{error.PhoneNumberErr}</p>
                  </MDBCol>
                </MDBRow>


                <MDBRow className='mb-4'>
                  <MDBCol>
                    <MDBRadio name='gender' id='flexRadioDefault1' label="Male" checked={gender === 'Male'} value="Male" onClick={() => setGender('Male')} />
                    <MDBRadio name='gender' id='flexRadioDefault2' label='Female ' checked={gender === 'Female'} value="Female" onClick={() => setGender('Female')} defaultChecked />
                  </MDBCol>
                  <MDBCol>
                    <MDBInput id='form6Example2' value={Register.dateofbirth} onChange={handleDate} label='dateof birth' />
                    <p>{error.dateofbirthErr}</p>
                  </MDBCol>
                </MDBRow>

                <MDBRow className='mb-4'>
                  <MDBCol>
                    <MDBInput id='form6Example1' value={Register.state} name='state' onChange={handleState} label='State' />
                    <p>{error.stateErr}</p>
                  </MDBCol>
                  <MDBCol>
                    <MDBInput id='form6Example2' value={Register.city} name='city' onChange={handleCity} label='City' />
                    <p>{error.cityErr}</p>
                  </MDBCol>
                </MDBRow>

                <MDBRow className='mb-4'>
                  <MDBCol>
                    <MDBInput id='form6Example1' value={Register.pincode} onChange={handlePincode} label='PinCode' maxLength='6' name='pincode' />
                    <p>{error.pincodeErr}</p>
                  </MDBCol>
                </MDBRow>


                <MDBRow className='mb-4'>
                  <MDBCol>
                    <MDBTextArea value={Register.address} onChange={handleAddress} label='Message' id='textAreaExample' maxLength='150' rows={4} name='address' />
                    <p>{error.addressErr}</p>
                  </MDBCol>
                </MDBRow>




                <MDBBtn className='mb-4' onClick={Submit} type='submit' block>
                  Submit
                </MDBBtn>

              </MDBCard>

            </form>

          </MDBRow>



        </MDBContainer>
      </section>



    </React.Fragment>
  )
}


export default Contact
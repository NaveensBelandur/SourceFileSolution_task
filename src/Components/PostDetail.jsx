import React from 'react'
import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import {
  MDBContainer, MDBRow, MDBCard,
  MDBCardBody,
  MDBCardTitle, MDBBtn
} from 'mdb-react-ui-kit'
import { MDBTypography } from 'mdb-react-ui-kit';
import NavBar from './NavBar'
import { useLocation } from 'react-router-dom'

const PostDetails = () => {
  const [data, setData] = useState([])


  // Get Clicked Data from post Component
  const Location = useLocation()
  const Data = Location.state

  console.log('data from post', Data)


  useEffect(() => {
    try {
      fetch(`https://jsonplaceholder.typicode.com/posts/${Data}`, {
        method: "GET"
      })
        .then((response) => {
          const data = response.json()
            .then((data) => {
              console.log(data, 'insiide data')
              setData(data)
              toast.success('Post Data', {
                position: 'top-center'
              })
            })
        })
    }
    catch (err) {
      console.log(err.message)
      toast.err('data error')
      throw new Error(err.message)
    }

  }, [])




  return (
    <React.Fragment>
      <ToastContainer />
      <NavBar />
      <MDBContainer className='mt-4'>
        <h3 variant='h3' className="text-center" >Display User Post Data</h3>

        <MDBCard className='mb-2'>
          <MDBCardBody>
            <MDBTypography className='lead mb-0'>
              <p>Number - {data.id}</p>
              <p>Title - {data.title}</p>
              <p>Body - {data.body}</p>
            </MDBTypography>


          </MDBCardBody>
        </MDBCard>
      </MDBContainer>


    </React.Fragment>
  )
}


export default PostDetails
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
import { useNavigate } from 'react-router-dom'

const Post = () => {
  const [data, setData] = useState([])
  const Navigate = useNavigate()

  useEffect(() => {
    try {
      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: "GET"
      })
        .then((response) => {
          const data = response.json()
            .then((data) => {
              setData(data.slice(0, 50))

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

  const ClickedPost = (e) => {
    console.log(e, 'user id')
    Navigate('/Postdetails', { state: e })
  }

  return (
    <React.Fragment>
      <ToastContainer />
      <NavBar />
      <MDBContainer className='mt-4'>
        <h3 variant='h3' className="text-center" >Number of post - {data.length}</h3>
        {
          data.map((ele) => {
            return (
              <div key={ele.id}>

                <MDBCard className='mb-2'>
                  <MDBCardBody>
                    <MDBTypography className='lead mb-0'>
                      <p>Number - {ele.id}</p>
                      <p>Title - {ele.title}</p>
                      <p>Body - {ele.body}</p>
                      <MDBBtn color='info' onClick={() => {
                        ClickedPost(ele.id)
                      }}>
                        Know Post
                      </MDBBtn>
                    </MDBTypography>


                  </MDBCardBody>
                </MDBCard>
              </div>
            )
          })
        }


      </MDBContainer>


    </React.Fragment>
  )
}


export default Post
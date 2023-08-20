import React from 'react'
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn
} from 'mdb-react-ui-kit';
import NavBar from './NavBar'
import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';



const Home = () => {
  const [Data, SetData] = useState([])


  // Calling The Api
  useEffect(() => {
    try {
      fetch('https://jsonplaceholder.typicode.com/users', {
        method: "GET"
      })
        .then((response) => {
          const Data = response.json()
            .then((Data) => {
              console.log(Data, 'get')
              SetData(Data)
              toast.success('User Data fetched')
            })
            .catch((err) => {
              console.log(err)
            })
        })
    }
    catch (Err) {
      console.log(Err)
      toast.err('data not fetched')
      throw new Error('Data Error')
    }



  }, [])


  return (
    /*Navbar*/
    <React.Fragment>
      <ToastContainer />
      <NavBar />
      {/* ) Full width Carousel*/}
      <section>
        <MDBCarousel showIndicators showControls fade>
          <MDBCarouselItem
            className='w-100 d-block'
            itemId={1}
            src='https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg'
            alt='Carosel Image'
          >
            <h5>Carosel 1 </h5>

          </MDBCarouselItem>

          <MDBCarouselItem
            className='w-100 d-block'
            itemId={2}
            src='https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg'
            alt='Carosel Image'
          >
            <h5>Carosel 2 </h5>

          </MDBCarouselItem>

          <MDBCarouselItem
            className='w-100 d-block'
            itemId={3}
            src='https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg'
            alt='Carosel Image'
          >
            <h5>Carosel 3 </h5>

          </MDBCarouselItem>

          <MDBCarouselItem
            className='w-100 d-block'
            itemId={4}
            src='https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg'
            alt='Carosel Image'
          >
            <h5>Carosel 4 </h5>

          </MDBCarouselItem>

          <MDBCarouselItem
            className='w-100 d-block'
            itemId={5}
            src='https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg'
            alt='Carosel Image'
          >
            <h5>Carosel 5 </h5>

          </MDBCarouselItem>
        </MDBCarousel>


      </section>



      {/* User Details*/}
      <section>
        <MDBContainer className='mt-5'>
          <h3 variant='h3' className="text-center" >Team members list</h3>
          <div className='mt-2'>
            {/* <h3>Number of Team Member - {Data.length == 0 ? <p>Loading...</p> : <p>{Data.length}</p>}</h3> */}
            <h3>Number of Team Member - {Data.length}</h3>

            {
              Data.map((ele) => {
                return (
                  <div key={ele.id}>

                    <MDBCard className='mb-2'>
                      <MDBCardBody>
                        <MDBCardTitle>Name - {ele.name}</MDBCardTitle>
                        <MDBCardTitle>Email -{ele.email}</MDBCardTitle>
                        <MDBCardTitle>Phone - {ele.phone}</MDBCardTitle>

                      </MDBCardBody>
                    </MDBCard>
                  </div>
                )
              })
            }

          </div>

        </MDBContainer>
      </section>
    </React.Fragment >
  )
}


export default Home
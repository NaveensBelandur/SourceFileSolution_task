import React from 'react'
import NavBar from './NavBar'
import {
  MDBContainer, MDBRow, MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCol
} from 'mdb-react-ui-kit'
import { MDBTypography } from 'mdb-react-ui-kit';




const About = () => {
  return (
    <React.Fragment>
      <NavBar />

      {/* About Page */}
      <MDBContainer className='mt-5'>
        <h3 variant='h3' className="text-center" >About us</h3>
        <MDBTypography className='lead mb-2 mt-2'>
          Naveen Beladnur techonologies we are top leading app developer and digital marketing company in India and we also work on web3 done are some of your team
        </MDBTypography>

        <MDBRow className='row-cols-1 row-cols-md-2 g-4 mt-5'>
          <MDBCol>
            <MDBCard>
              <MDBCardImage
                src='https://mdbootstrap.com/img/new/standard/city/041.webp'
                alt='...'
                position='top'
              />
              <MDBCardBody>
                <MDBCardTitle className="text-center">CEO</MDBCardTitle>
                <MDBCardText>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum earum quasi quod nam nostrum non necessitatibus sequi assumenda id eveniet ipsum provident ut sapiente perferendis deleniti esse sunt, tempora dolorem!
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard>
              <MDBCardImage
                src='https://mdbootstrap.com/img/new/standard/city/042.webp'
                alt='...'
                position='top'
              />
              <MDBCardBody>
                <MDBCardTitle className="text-center">Tech Lead</MDBCardTitle>
                <MDBCardText>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore sapiente animi corporis distinctio porro excepturi odio, id cumque fugit eveniet illo adipisci sequi atque odit consequuntur, velit possimus suscipit dolores.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard>
              <MDBCardImage
                src='https://mdbootstrap.com/img/new/standard/city/043.webp'
                alt='...'
                position='top'
              />
              <MDBCardBody>
                <MDBCardTitle className="text-center">Lead</MDBCardTitle>
                <MDBCardText>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio cum enim ducimus, nostrum praesentium quasi voluptatum assumenda incidunt, nobis commodi nihil non, sequi corrupti minima. Nam a enim officiis voluptatibus?
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard>
              <MDBCardImage
                src='https://mdbootstrap.com/img/new/standard/city/044.webp'
                alt='...'
                position='top'
              />
              <MDBCardBody>
                <MDBCardTitle className="text-center">Team and Staff</MDBCardTitle>
                <MDBCardText>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem earum dolore id nostrum, quisquam numquam nobis facilis eveniet fugiat ullam quod maxime consequuntur dolorem eaque facere culpa vitae illum sed.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>



      </MDBContainer>


    </React.Fragment>
  )
}


export default About
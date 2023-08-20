import React from 'react'
import { MDBContainer, MDBRow, MDBTypography } from 'mdb-react-ui-kit'





const Error = () => {
  return (
    <React.Fragment>
      <MDBContainer>
        <MDBRow className='pt-5'>
          <MDBTypography tag='h2' className="text-center">Error Page not Found</MDBTypography>
        </MDBRow>
      </MDBContainer>
    </React.Fragment>
  )
}


export default Error
import React from "react";
import HOC from "../component/HOC";
import login1 from "./../Img/login1.png";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
}
from 'mdb-react-ui-kit';
import { LOGIN } from "../routes";

const Register = () => {
  return (
    <HOC HeaderTitle="Register" navbar={false}>
      <MDBContainer fluid>
      <MDBRow>

      <MDBCol sm='6' className='d-none d-sm-block px-0'>
          <img src={login1} alt="login1" className="w-100" style={{height:'70%', objectFit: 'cover', objectPosition: 'left'}} />
        </MDBCol>

        <MDBCol sm='6'>

        <div className='' style={{textAlign:"center", marginRight:"50px", paddingTop:"50px"}}>
            
            <span className="fw-bold mb-0"><h1>Kalpataru</h1>
            <h4 style={{fontSize:"24px"}}>Register</h4></span>
         
          </div>

          <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4' style={{marginTop:"-50px"}}>

           
            <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Nama Lengkap' id='formControlLg' type='name' size="lg"/>
            <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Email' id='formControlLg' type='email' size="lg"/>
            <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Password' id='formControlLg' type='password' size="lg"/>
          
            <MDBBtn className="mb-4 px-5 mx-5 w-100" color='success' size='lg' href={LOGIN}>Login</MDBBtn>
            <p className="small mb-5 pb-lg-3 ms-5">Saya setuju dengan<a class="text-muted" href="#!"> Syarat dan ketentuan.</a></p> 
            <p className='ms-5' style={{marginTop:"-50px"}}>Sudah mempunyai Akun? <a href={LOGIN} class="link-info">LOGIN</a></p>

          </div>

        </MDBCol>

       

      </MDBRow>

    </MDBContainer>
    </HOC>
  );
};

export default Register;

import React from "react";
import visaa from '../images/Visa.webp';
import Mastercard1 from '../images/Mastercard.png';
import home from '../images/home.png';
import office from '../images/office.png';

import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";

export default function App() {
  return (
    <MDBContainer fluid className="py-5" style={{ backgroundColor: "#eee" }}>
      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="12" lg="10" xl="8">
          <MDBCard>
            <MDBCardBody className="p-md-5">
              <div>
                <h4>Shipping to</h4>
               

                <p className="text-muted pb-2">
                  Please make the payment to start enjoying all the features of
                  our premium plan as soon as possible
                </p>

                <p >
               <a href="/Payment">Checkout</a>
                </p>

              </div>
              
              <div className="px-3 py-4 border  border-2 rounded mt-4 d-flex justify-content-between">
                <div className="d-flex flex-row align-items-center">
                  <img
                    src={home}
                    className="rounded"
                    width="60"
                    
                  />
                  <div className="d-flex flex-column ms-4">
                    <span className="h5 mb-1">Home</span>
                    <span className="small text-muted">Flat -A, Floor-3 House, R/A78, Karachi, Pakistan</span>
                  </div>
                </div>
                
                <div className="d-flex flex-row align-items-center">
                  <img
                    src={office}
                    className="rounded"
                    width="60"
                  />
                <div className="d-flex flex-column ms-4">
                    <span className="h5 mb-1">Office</span>
                    <span className="small text-muted">A-25, Bahadurabad Chowrangi Karachi, Pakistan</span>
                  </div>
                  </div>
              </div>
              <h4 className="mt-5">Payment Method</h4>
              <div className="mt-4 d-flex justify-content-between align-items-center">
                <div className="d-flex flex-row align-items-center">
                  <img
                    src={visaa}
                    className="rounded p-2"
                    width="70" 
                  />
                  <div className="d-flex flex-column ms-3">
                    <span className="h5 mb-1">Visa Card</span>
                    <span className="small text-muted">
                      1234 XXXX XXXX 2570
                    </span>
                  </div>
                </div>
                <MDBInput
                  label="CVC"
                  id="form1"
                  type="text"
                  style={{ width: "70px" }}
                />
              </div>
              <div className="mt-4 d-flex justify-content-between align-items-center">
                <div className="d-flex flex-row align-items-center p-2">
                  <img
                    src={Mastercard1}
                    className="rounded p-2"
                    width="60"
                  />
                  <div className="d-flex flex-column ms-3">
                    <span className="h5 mb-1">Master Card</span>
                    <span className="small text-muted">
                      2344 XXXX XXXX 8880
                    </span>
                  </div>
                </div>
                <MDBInput
                  label="CVC"
                  id="form2"
                  type="text"
                  style={{ width: "70px" }}
                />
              </div>
              <h6 className="mt-4 mb-3 text-primary text-uppercase">
                ADD PAYMENT METHOD
              </h6>
              <MDBInput
                label="Email address"
                id="form3"
                size="lg"
                type="email"
              />
              <MDBBtn href="/Profile" className="mt-3 btn-success">
                {" "}
                Place Order  <MDBIcon fas icon="small-arrow-alt-right" />
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
import React, { useState } from 'react'
import Payment from '../Payment';
import PaymentSuccess from '../PaymentSuccess';

function FeedBackComponent() {
    const [showModal, setShowModal] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
  
    const showAlertModal = (show) => {
      setShowAlert(show);
    };
  
    const showHidePaymentModal = (show) => {
      setShowModal(show);
    };
  return (
    <>
     <div class="container">
        <div
          class="row justify-content"
          style={{
            border: "1px solid #707070",
            borderRadius: "32px",
            height: "400px",
            textAlign: "center",
          }}
        >
          <div class="mt-3 col-md-4">
            <h3 style={{ marginTop: "50px", fontWeight: "bold" }}>
              Standard Pack
            </h3>
            <br />
            <br />
            <h2 style={{ fontWeight: "bold" }}>₹ 4,500 /-</h2>
            <button
              style={{
                border: "#064D4F",
                background: "#07595B",
                borderRadius: "10px",
                color: "white",
                width: "250px",
                height: "35px",
                marginTop: "20px",
              }}
              onClick={() => {
                setShowModal(true);
              }}
            >
              book now
            </button>
            <p class="vertical"></p>
          </div>

          <div class="mt-3 col-md-4" style={{ textAlign: "justify" }}>
            <h3 style={{ fontWeight: "bold ", marginTop: "10px" }}>Includes</h3>
            <br />
            <ul>
              <li>Lorem ipsum dolor sit amet, consetetur sadipscing</li>
              <li>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam
              </li>
              <li>Lorem ipsum dolor sit amet, consetetur sadipscing</li>
              <li>Lorem ipsum dolor sit amet, consetetur sadipscing</li>
              <li>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam
              </li>
            </ul>
          </div>
          <div class="mt-3 col-md-4">
            <h3
              style={{
                fontWeight: "bold",
                textAlign: "justify",
                marginTop: "10px",
              }}
            >
              Feedback
            </h3>
            <div>
              <div
                className="overflow"
                style={{
                  overflow: "auto",
                  height: 300,
                  width: 420,
                }}
              >
                <div style={{ display: "flex" }}>
                  <div
                    style={{
                      border: "1px solid #707070",
                      width: "150px",
                      height: "160px",
                      borderRadius: "10px",
                      marginLeft: "25px",
                      // opacity:0.9 
                    }}
                  >
                    <img
                      style={{
                        width: "20px",
                        borderRadius: "20px",
                        marginRight: "45px",
                      }}
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWdkHet93dkgMDY7eYYG6DMqF75NWtPO_Inw&usqp=CAU "
                      alt=""
                    />
                    Renu_ka
                    <p style={{ fontSize: "10px", textAlign: "justify" }}>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusam et justo duo dolores et ea rebum. Stet
                    </p>
                  </div>
                  <div
                    className="ms-4"
                    style={{
                      border: "1px solid  #707070",
                      width: "150px",
                      height: "130px",
                      borderRadius: "10px",
                      marginTop: "10px",
                    }}
                  >
                    <img
                      style={{
                        width: "20px",
                        borderRadius: "20px",
                        marginRight: "45px",
                      }}
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWdkHet93dkgMDY7eYYG6DMqF75NWtPO_Inw&usqp=CAU "
                      alt=""
                    />
                    Renu_ka
                    <p style={{ fontSize: "10px", textAlign: "justify" }}>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos{" "}
                    </p>
                  </div>
                </div>
                <div style={{ display: "flex" }}>
                  <div
                    class="mt-3"
                    style={{
                      border: "1px solid  #707070",
                      width: "150px",
                      height: "150px",
                      borderRadius: "10px",
                      marginLeft: "25px",
                    }}
                  >
                    <img
                      style={{
                        width: "20px",
                        borderRadius: "20px",
                        marginRight: "45px",
                      }}
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWdkHet93dkgMDY7eYYG6DMqF75NWtPO_Inw&usqp=CAU "
                      alt=""
                    />
                    Renu_ka
                    <p style={{ fontSize: "10px", textAlign: "justify" }}>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusam et justo duo dolores et ea rebum. Stet
                    </p>
                  </div>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <div
                    class=""
                    style={{
                      border: "1px solid  #707070",
                      width: "150px",
                      height: "150px",
                      borderRadius: "10px",
                      marginTop: "10px",
                    }}
                  >
                    <img
                      style={{
                        width: "20px",
                        borderRadius: "20px",
                        marginRight: "45px",
                      }}
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWdkHet93dkgMDY7eYYG6DMqF75NWtPO_Inw&usqp=CAU "
                      alt=""
                    />
                    Renu_ka
                    <p style={{ fontSize: "10px", textAlign: "justify" }}>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos{" "}
                    </p>
                  </div>
                </div>
                <div style={{ display: "flex" }}>
                  <div
                    class="mt-3"
                    style={{
                      border: "1px solid  #707070",
                      width: "150px",
                      height: "150px",
                      borderRadius: "10px",
                      marginLeft: "25px",
                    }}
                  >
                    <img
                      style={{
                        width: "20px",
                        borderRadius: "20px",
                        marginRight: "45px",
                      }}
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWdkHet93dkgMDY7eYYG6DMqF75NWtPO_Inw&usqp=CAU "
                      alt=""
                    />
                    Renu_ka
                    <p style={{ fontSize: "10px", textAlign: "justify" }}>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusam et justo duo dolores et ea rebum. Stet
                    </p>
                  </div>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <div
                    class=""
                    style={{
                      border: "1px solid  #707070",
                      width: "150px",
                      height: "150px",
                      borderRadius: "10px",
                      marginTop: "10px",
                    }}
                  >
                    <img
                      style={{
                        width: "20px",
                        borderRadius: "20px",
                        marginRight: "45px",
                      }}
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWdkHet93dkgMDY7eYYG6DMqF75NWtPO_Inw&usqp=CAU "
                      alt=""
                    />
                    Renu_ka
                    <p style={{ fontSize: "10px", textAlign: "justify" }}>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <Payment
          showModal={showModal}
          showHidePaymentModal={showHidePaymentModal}
          setShowAlert={setShowAlert}
        />
      )}
      {showAlert && (
        <PaymentSuccess showAlert={showAlert} showAlertModal={showAlertModal} />
      )}
    </>
  )
}

export default FeedBackComponent
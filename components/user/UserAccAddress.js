import React from "react";
import ReactModelAddress from "../elements/ReactModelAddress";
 
const UserAccAddress = () => {
  return (
    <>
      <div className="user-address">
        <h3>My Address</h3>
        <div className="row">
          <div className="col-lg-6">
            <div className="address-list">
              <div className="head">
                Office{" "}
                <a href="#">
                  Edit <i className="bi bi-pencil"></i>
                </a>
              </div>
              <div className="info">
                <span>
                  1114, JMD Megapolis
                  <br />
                  Sector 48 , Gurgaon
                  <br />
                  Haryana 201201
                </span>
              </div>
            </div>
          </div>
           
          <div className="col-lg-12">
          <div className="btn-addrres">
            <ReactModelAddress />
          </div>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default UserAccAddress;

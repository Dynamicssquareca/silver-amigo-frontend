import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const ReactModelAddress = (args) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
       
      <a href="#" className="btn btn-md" onClick={toggle}>Add New Address</a>
      <Modal isOpen={modal} toggle={toggle} {...args} size="lg">
        <ModalHeader toggle={toggle}>Edit Your Profiles</ModalHeader>
        <ModalBody>
        <form className="row g-3">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="First Name"
          />
        </div>
        <div className="col-md-6">
          <input type="text" className="form-control" placeholder="Last Name" />
        </div>
        <div className="col-12">
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="Street Name"
          />
        </div>
        <div className="col-12">
          <input
            type="text"
            className="form-control"
            id="inputAddress2"
            placeholder="Apartment, studio, or floor"
          />
        </div>
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            id="inputCity"
            placeholder="Pincode"
          />
        </div>

        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            id="inputZip"
            placeholder="City"
          />
        </div>
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            id="inputCity"
            placeholder="State"
          />
        </div>

        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            id="inputZip"
            placeholder="Country"
          />
        </div>
        <div className="col-md-2">
          <input
            type="text"
            className="form-control"
            id="inputCity"
            placeholder="+91"
          />
        </div>

        <div className="col-md-10">
          <input
            type="text"
            className="form-control"
            id="inputZip"
            placeholder="1234567890"
          />
        </div>
         
      </form>
        </ModalBody>
        <ModalFooter>
          <div className="check-out mt-50">
            <button type="submit" className="btn btn-md">
              Updated
            </button>
          </div>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ReactModelAddress;

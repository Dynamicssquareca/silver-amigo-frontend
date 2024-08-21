import React from "react";
import ReactModel from "../elements/ReactModel";

const UserProfileInfo = () => {
  return (
    <>
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
            type="email"
            className="form-control"
            id="email"
            placeholder="Eamil ID"
          />
        </div>
        <div className="col-md-12">
          <div className="row">
            <label for="inputPassword" className="col-sm-2 col-form-label">
              Your Gender
            </label>
            <div className="col-sm-10">
              <div className="rado-form">
                <div className="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="option1"
                  />
                  <label class="form-check-label" for="inlineRadio1">
                    Male
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    value="option2"
                  />
                  <label class="form-check-label" for="inlineRadio2">
                    Female
                  </label>
                </div>
              </div>
            </div>
          </div>
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
      <div className="check-out mt-50">
        <ReactModel />
      </div>
    </>
  );
};

export default UserProfileInfo;

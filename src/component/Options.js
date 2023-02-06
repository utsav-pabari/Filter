import React from "react";

const Options = () => {
  return (
    <div className="w-100">
      <div className="container">
        <div className="col-md-3">
          <div className="w-100">
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="search"
              />
            </div>
            <h6>FILTER</h6>
            <div className="my-3">
              <h5 className="border-bottom border-dark pb-2">Business</h5>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" />
              <label className="form-check-label">Corporate</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" />
              <label className="form-check-label">
                Renewable Power & Transition
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" />
              <label className="form-check-label">Infrastructure</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" />
              <label className="form-check-label">Private Equity</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" />
              <label className="form-check-label">Real Estate</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" />
              <label className="form-check-label">Insaurance Solutions</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" />
              <label className="form-check-label">Public Securities</label>
            </div>
            <div className="my-3">
              <h5 className="border-bottom border-dark pb-2">
                Leadership Role
              </h5>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" />
              <label className="form-check-label">Managing Partners</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" />
              <label className="form-check-label">Managing Directors</label>
            </div>
            <div className="my-3">
              <h5 className="border-bottom border-dark pb-2">Region</h5>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" />
              <label className="form-check-label">North America</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" />
              <label className="form-check-label">South America</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" />
              <label className="form-check-label">Asia Pacific</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" />
              <label className="form-check-label">Europe & Middle East</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" />
              <label className="form-check-label">India</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Options;


import React from "react";

const Search = () => {
  return (
    <>

      <a href="#offcanvasTop" data-bs-toggle="offcanvas" className="mini-cart-icon">
        {/* <img
                                                src="/img/themepic/icons/icon-cart.svg"
                                                alt="Silver Amigo - Cart"
                                            /> */}
        <i className="bi bi-search bi-one-two"></i>
      </a>

      <div className="offcanvas offcanvas-top offcanvas-height" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
        <div className="offcanvas-body">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                  <div className="off-my-search">
                  <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                <h3>What are you looking for?</h3>
                <form className="f-earc-style" action={'/search?p='}>
                  <div className="input-group">
                    <input
                      type="text"
                      name="q"
                      className="form-control"
                      placeholder="Search for products..."
                    />
                    <button
                      className="btn btn-outline-secondary"
                      type="submit"
                      id="button-addon2"
                    >
                      <i className="bi bi-search"></i>
                    </button>
                  </div>
                </form>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>



    </>
  );
};

export default Search;

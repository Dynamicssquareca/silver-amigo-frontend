// components/OffcanvasContentLeft.js
export default function OffcanvasContentTop({ closeOffcanvas }) {
    return (
      <>
        <form action={'/search?p='}>
        <div className="input-group">
          <input
            type="text"
            name="q"
            className="form-control"
            placeholder="Search"
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
        {/* <button className="btn btn-secondary" onClick={closeOffcanvas}>
          Close
        </button> */}
      </>
    );
  }
  
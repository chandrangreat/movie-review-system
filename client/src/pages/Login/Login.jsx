import React from 'react';

export default function Login() {
  return (
    <div className="d-flex flex-column align-items-center">
      <h1>Login</h1>
      <form
        className="container d-flex justify-content-center"
        onSubmit={(e) => {
          // submitLogin(e);
        }}
      >
        <div className="row">
          <div className="col-12 my-5">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" className="form-control" id="username" />
            </div>
            <button type="submit" className="btn btn-dark">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

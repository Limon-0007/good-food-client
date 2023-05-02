import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const photoURL = form.photo.value
        const email = form.email.value
        const password = form.password.value

        console.log(name, photoURL, email, password);
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
                {/* name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="username" className="input input-bordered" />
              </div>
                {/* photo url*/}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered" />
              </div>
              {/* email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" />
              </div>
              {/* password */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              {/* button */}
              <div className="form-control mt-4">
                <button className="btn btn-primary">Register</button>
              </div>
              <p className='font-semibold mt-2'><small>Already have an account? please </small><Link to="/login" className='text-orange-700 underline'>Login</Link></p>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;
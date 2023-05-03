import React, { useContext, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import app from "../../../firebase/firebase.config";
import { AuthContext } from "../../../Routes/AuthContext/AuthProviders";

const Login = () => {
  const [error, setError] = useState("")
  const location = useLocation()
  const { handleSignIn } = useContext(AuthContext);
  const from = location.state?.from?.pathname || "/"
  const navigate = useNavigate()

  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  // google sign in
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, {replace: true})
        setError("")
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // github sign in

  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const loggedUser = result.message;
        console.log(loggedUser);
        navigate(from, {replace: true})
        setError("")
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // sign in with email and password
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    handleSignIn(email, password)
    .then(result => {
      const loggedUser = result.user
      navigate(from, {replace: true})
      setError("")
      form.reset()
      console.log(loggedUser);
    })
    .catch(()=> {
      setError("wrong password")
    })
    // console.log(email, password);
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <p className="font-semibold text-red-700">{error}</p>
              <label className="label">
                <Link href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-4">
              <button className="btn btn-primary">Login</button>
            </div>
            <p className="font-semibold mt-2">
              <small>Don't have an account? please </small>
              <Link to="/register" className="text-orange-700 underline">
                Register
              </Link>
            </p>
            <p className="text-center font-bold">or</p>
            <hr className="h-4" />
            {/* sign in buttons */}
            <div className="text-center">
              <button
                onClick={handleGoogleSignIn}
                className="font-semibold bg-blue-500 text-white rounded px-4 py-2 mb-2 w-full flex gap-2 items-center"
              >
                <FaGoogle></FaGoogle> Sign in with Google
              </button>
              {/* github */}
              <button
                onClick={handleGithubSignIn}
                className="font-semibold bg-slate-500 text-white rounded px-4 py-2 w-full flex gap-2 items-center"
              >
                <FaGithub></FaGithub> Sign in with Github
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

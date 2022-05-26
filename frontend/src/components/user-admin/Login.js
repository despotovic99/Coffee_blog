import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/LogReg.css";
import l from "../../images/login.jpg";
import axios from "axios";

const Login = () => {
  const history = useNavigate();
  const [loginInput, setLogin] = useState({
    email: "",
    password: "",
    error_list: [],
  });

  const handleInput = (e) => {
    e.persist();
    setLogin({
      ...loginInput,
      [e.target.name]: e.target.value,
    });


  };

  const handleLogin = (e) => {
    e.preventDefault()
    console.log(loginInput)
    axios.post('http://localhost:8000/api/login',loginInput)
        .then((res)=>{
          console.log(res.data)
      if(res.data.success){
          console.log(res.data.access_token)
        window.sessionStorage.setItem('auth_token',res.data.access_token);
      }
    }).catch((e)=>{
      console.log(e)
    })
  };

  return (
    <>
      <section
        className="h-100 gradient-form"
        id="logPage"
        style={{
          backgroundColor: +"#eee",
        }}
      >
        <div className="container py-5 h-100" id="logCon">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-10">
              <div
                className="card rounded-3 text-black"
                style={{ backgroundColor: "transparent", width: "800px" }}
              >
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="card-body p-md-5 mx-md-4">
                      <div className="text-center">
                        <h4 className="mt-1 mb-5 pb-1 " id="title">
                          Dobrodosli u Coffee blog!
                        </h4>
                      </div>

                      <form onSubmit={handleLogin}>
                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Unesite email adresu"
                            onChange={handleInput}
                            value={loginInput.email}
                            name="email"
                          />
                          <span>{loginInput.error_list.email}</span>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Unesite sifru"
                            onChange={handleInput}
                            value={loginInput.password}
                            name="password"
                          />
                          <span>{loginInput.error_list.password}</span>
                        </div>

                        <div className="loginBtn">
                          <button id="btnLogin" type="submit">
                            Prijavi se
                          </button>
                        </div>

                        <div className="loginToRegister">
                          <a href="/register">
                            <p
                              className="mb-0 me-2"
                              style={{ color: "white", textDecoration: "none" }}
                            >
                              Ne posedujem nalog.
                            </p>
                          </a>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex">
                    <img
                      src={l}
                      alt=""
                      style={{
                        width: "700px",
                        height: "530px",
                        margin: "10px",
                        borderRadius: "1em",
                      }}
                    />
                    <div className="text-white px-3 py-4 p-md-5 mx-md-4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Login;

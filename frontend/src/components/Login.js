import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LogReg.css";
import l from "../images/login.jpg";
import { Button } from "./Button";






const Login = () => {
  
  const history = useNavigate();
  const [loginInput, setLogin] =useState({
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
   /* e.preventDefault();
    const data = {
      email: loginInput.email,
      password: loginInput.password,
    };
    axios
      .get("/sanctum/csrf-cookie")
      .then((response) => {
        axios
          .post("api/login", data)
          .then((res) => {
            if (
              res.data.status === 200
            ) {
              localStorage.setItem(
                "auth_token",
                res.data.token
              );
              localStorage.setItem(
                "auth_name",
                res.data.name
              );
              swal(
                "Success",
                res.data.message,
                "success"
              );
              if (
                res.data.role ===
                "admin"
              ) {
                history.push(
                  "/admin/dashboard"
                );
              } else {
                history.push("/");
              }
            } else if (
              res.data.status === 401
            ) {
              swal(
                "Warning",
                res.data.message,
                "warning"
              );
            } else {
              setLogin({
                ...loginInput,
                error_list:
                  res.data
                    .validation_errors,
              });
            }
          
          });
        
      });*/
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
          <div className="col-xl-10" >
            <div className="card rounded-3 text-black" style={{backgroundColor:"transparent", width:"800px"}}>
              <div className="row g-0">
                <div className="col-lg-6">
                  <div className="card-body p-md-5 mx-md-4">
                    <div className="text-center">
                      
                      <h4 className="mt-1 mb-5 pb-1 " id="title">
                        Dobrodosli u Coffee blog!
                      </h4>
                    </div>

                    <form
                      onSubmit={
                        handleLogin
                      }
                    >


                      <div className="form-outline mb-4">
                        
                        
                        <input
                          type="email"
                          id="form2Example11"
                          className="form-control"
                          placeholder="Unesite email adresu"
                          onChange={
                            handleInput
                          }
                          value={
                            loginInput.email
                          }
                          name="email"
                        />
                        <span>
                          {
                            loginInput
                              .error_list
                              .email
                          }
                        </span>

                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form2Example22"
                          className="form-control"
                          placeholder="Unesite sifru"
                          onChange={
                            handleInput
                          }
                          value={
                            loginInput.password
                          }
                          name="password"
                        />
                        <span>
                          {
                            loginInput
                              .error_list
                              .password
                          }
                        </span>

                      </div>

                      <div className="text-center pt-1 mb-5 pb-1">
                      <Button className="btn"
                             buttonStyle="bordered"
                             buttonSize="small"
                             text=" Prijavi se"
                             route='/home'
                             type="submit"
                            ></Button>
                       
                      </div>

                      <div className="d-flex align-items-center justify-content-center pb-4">
                        <p className="mb-0 me-2" style={{color:"white"}}>
                          Ne posedujem nalog.
                        </p>
                        <Button className="btn"
                             buttonStyle="bordered"
                             buttonSize="medium"
                             text="Registruj se"
                             route='/register'
                            ></Button>
                        
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 d-flex">
                <img src={l} alt="" style={{width:'700px', height: '530px', margin:"10px",borderRadius:"1em"}}/>
                  <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  
       
    );
  }
  export default Login;


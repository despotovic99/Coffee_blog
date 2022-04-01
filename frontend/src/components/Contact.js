import React from 'react';
import {useState} from "react";
import { FaEnvelope, FaPhone, FaInstagram} from 'react-icons/fa'
import {BsFacebook, BsTwitter } from 'react-icons/bs'
import '../styles/Contact.css';
import InputField from "./InputField";
import { Button } from "./Button";


export const Contact = () => {
   
    const [name,setName]=useState('');
    const [lastname,setLastname]=useState('');
    const [email,setEmail]=useState('');
    const [message,setMessage]=useState('');
    const handleClick = (e) => {
        e.preventDefault();
        let vN=name;
        let vLn=lastname;
        let vE=email;
        let vM=message;
       
        console.log("Ime: "+vN+"\n Prezime: "+vLn+"\n Email: "+vE+"\n Poruka: "+vM);
        
    }
    return (

        
        
                        
                        
                        
                  

    /*<div class='Contact' >
      <div class="title">
        <h2>KONTAKT</h2>
      </div>
      <div class="half">
        <div class="item">
          <InputField value={name}  id="name" type="text" placeholder="Vase ime" 
                        onChange= {(e) => setName(e.target.value)}/>
        </div>
        <div class="item">
        <InputField value={lastname} type="text" placeholder="Vase prezime" onChange= {(e) => setLastname(e.target.value)}/>
        </div>
        <div class="item">
          <InputField value={email} id="email" type="text" placeholder="Vas email" onChange= {(e) => setEmail(e.target.value)} />
        </div>
      </div>
      <div class="full">
        <textarea value={message} name='Message' id="message" placeholder='Poruka' cols='30' rows='10' onChange= {(e) => setMessage(e.target.value)}/>
      </div>
      <div class="action">
      <Button className="btnSubmit"
                             buttonStyle="color"
                             buttonSize="small"
                             onClick={handleClick}
                             text="Posalji"
                             route='/contacts'
                            ></Button>
       <Button className="btnReset"
                             buttonStyle="color"
                             buttonSize="small"
                             onClick={handleClick}
                             text="Posalji"
                             route='/contacts'
                            ></Button>
        
      </div>
      <div class="icons">
         <FaInstagram style={{marginRight: '1rem'}} />
        <BsTwitter style={{marginRight: '1rem'}} />
        <BsFacebook style={{marginRight: '1rem'}} />
        <FaPhone style={{marginRight: '1rem'}} />
        <FaEnvelope style={{marginRight: '1rem'}} />
         
      </div>
    </div>
   
*/
<div class='ContactPage'>
    <div class="containerContact">
        <div class='header'>
            <h1>KONTAKT</h1>
        </div>
        <div class="content">
            <div class="content-form">
                <div>
                
                    <h2>Facebook <BsFacebook style={{marginRight: '1rem'}} /></h2>
                </div>

                <div>
                
                    <h2>Instagram <FaInstagram style={{marginRight: '1rem'}} /></h2>
                </div>

                <div>
                
                    <h2>E-mail <FaEnvelope style={{marginRight: '2rem'}} /></h2>
                    
                </div>
            </div>
        </div>

      
        <div class="form">
            <div class="right">
              <div class="contact-form">
              <InputField value={name}  id="name" type="text" placeholder="Vase ime i prezime" 
                        onChange= {(e) => setName(e.target.value)}/>
                  <div className='spand' style={{marginTop:-75+"px"}}>Ime i prezime</div>
              </div>
  
              <div class="contact-form">
              <InputField value={email}  id="email" type="text" placeholder="Vas email" 
                        onChange= {(e) => setEmail(e.target.value)}/>
                  <div className='spand' style={{marginTop:-75+"px"}}>E-mail </div>
              </div>
              <div class="contact-form">
                  <textarea name="text">
                    
                  </textarea>
                  <div className='spand' style={{marginTop:-85+"px"}}> Sadrzaj poruke</div>
              </div>
  
              <div class="contact-form">
              <Button className="btnReset"
                             buttonStyle="color"
                             buttonSize="small"
                             onClick={handleClick}
                             text="Posalji"
                             route='/contacts'
                            ></Button>
              </div>
              </div>
            </div>
          </div>
    
        
        
    </div>    



        
      
    );
}

export default Contact;
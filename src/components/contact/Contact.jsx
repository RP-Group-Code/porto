import React from "react";
import "./contact.css";
import { HiOutlineMailOpen } from "react-icons/hi";
import { ImWhatsapp } from "react-icons/im";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import {message, Button} from 'antd';



const Contact = () => {
  const form = useRef();
  


  const sendEmail = (e) => {
    e.preventDefault();
    console.log(e);
    setTimeout(() =>{
      message.success({
        content:"Berhasil Mengirim Pesan",
        className: "alert__succes"
      })
    }, 4000);
  
    emailjs.sendForm("service_4hdww8s", "template_ii64zn6", form.current, "XN0kDuvaz55ZHTJfa").then(
      (result) => {
        console.log(result.text);
       
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h3 data-aos="fade-down" data-aos-duration="1000" className="title">Contact Me</h3>
      <h5 data-aos="fade-down" data-aos-duration="1000" className="subtitle">Send Me Message</h5>
      <div className="container contact__container">
        <div className="contact__options" >
          <article className="contact__message" data-aos="zoom-in-right" data-aos-duration="1000">
            <HiOutlineMailOpen className="icon__contact" />
            <h4>Email</h4>
            <h5>porto@ruli.site</h5>
            <a href="mailto:porto@ruliproject.site?body=Halo, Saya tertarik dengan keahlian anda, silahkan kirim konfirmasi balasan&subject=Contact_Porto_Ruli" target="_blank">
              Send a Message
            </a>
          </article>
          <article className="contact__message" data-aos="zoom-out-right" data-aos-duration="1000">
            <ImWhatsapp className="icon__contact" />
            <h4>WhatApp</h4>
            <h5>+62-8773-8971-392</h5>
            <a href="https://api.whatsapp.com/send?phone=6287738971392&text=Hi Maruli" target="_blank">
              Send a Message
            </a>
          </article>
          {/* <article className="contact__message">
            <h4>Email</h4>
            <h5>porto@ruli.site</h5>
            <a href="porto@ruli.site">Send a Message</a>
          </article> */}
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input data-aos="zoom-in-down" data-aos-duration="500" type="text" name="name" placeholder="Your Full Name" required />
          <input data-aos="zoom-in-down" data-aos-duration="500" type="email" name="email" placeholder="Your Email" required />
          <textarea data-aos="zoom-in-down" data-aos-duration="500" type="message" name="message" rows="7" placeholder="Your Message" required />
         
          <div className="tombol" data-aos="fade-down" data-aos-duration="1000">
            <button type="submit" className="btn btn-red">
              <p>SEND MESSAGE</p> 
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;

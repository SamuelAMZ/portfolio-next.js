import React, { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [captchaState, setCaptachaState] = useState(false);

  const handleContact = async (e) => {
    e.preventDefault();
    // load button
    setIsLoading(true);
    // validate values
    if (values.name && values.email && values.message) {
      // check for captcha
      if (captchaState) {
        console.log("go");

        let date = new Date();
        let current_date =
          date.getFullYear() +
          "-" +
          (date.getMonth() + 1) +
          "-" +
          date.getDate();

        const url = "https://green-python-sock.cyclic.app/lfish/contact-self";
        const data = {
          name: values.name,
          email: values.email,
          message: values.message,
          captcha: captchaState,
          date: current_date,
        };

        axios
          .post(url, data)
          .then((res) => {
            // console.log(res.data.message);
            notification("Message sent, txs");
            setIsLoading(false);
            emptyFields();
          })
          .catch((err) => {
            // console.log(err.response.data.message);
            notification(`Erreur ${err.response.data.message}`);
            setIsLoading(false);
          });
      } else {
        notification("Verify reCaptcha");
        setIsLoading(false);
      }
    } else {
      console.log("here");
      notification("verify fields");
      setIsLoading(false);
    }
  };

  const handleCaptcha = (e) => {
    if (e) {
      setCaptachaState(e);
    } else {
      setCaptachaState(false);
    }
  };

  const emptyFields = () => {
    setValues({
      name: "",
      email: "",
      message: "",
    });
  };

  const notification = (text) => {
    const header = document.querySelector(".header");

    let notif = document.createElement("div");
    notif.classList.add("notification");
    notif.innerText = text;

    header.appendChild(notif);

    let top = 3;
    Array.from(document.querySelectorAll(".notification")).forEach((not) => {
      not.style.top = top + 5.5 + "%";
      top = top + 5.5;
    });

    let indexRem = setTimeout(() => {
      document.querySelector(".notification").remove();
      if (!notif) {
        clearTimeout(indexRem);
      }
    }, 7000);
  };

  return (
    <div className="contact-form">
      <form onSubmit={(e) => handleContact(e)}>
        <div className="item">
          <label htmlFor="nom">Name</label>
          <div className="input-item">
            <AiOutlineUser />
            <input
              type="text"
              id="nom"
              required
              placeholder="Jhon Doe"
              onChange={(e) =>
                setValues({
                  name: e.target.value,
                  email: values.email,
                  message: values.message,
                })
              }
              value={values.name}
            />
          </div>
        </div>
        <div className="item">
          <label htmlFor="email">Email</label>
          <div className="input-item">
            <MdOutlineEmail />
            <input
              type="email"
              id="email"
              required
              placeholder="jhondoe@gmail.com"
              onChange={(e) =>
                setValues({
                  name: values.name,
                  email: e.target.value,
                  message: values.message,
                })
              }
              value={values.email}
            />
          </div>
        </div>
        <div className="item">
          <label htmlFor="message">Message</label>
          <div className="input-item">
            <textarea
              id="message"
              cols="30"
              rows="30"
              required
              placeholder="Hello Sam..."
              onChange={(e) =>
                setValues({
                  name: values.name,
                  email: values.email,
                  message: e.target.value,
                })
              }
              value={values.message}
            ></textarea>
          </div>
        </div>
        {/* captcha */}
        <ReCAPTCHA
          className="thecaptcha"
          sitekey="6Ld8_QYjAAAAACK8HR2xBedxgOPORx1Drn0FlXnb"
          onChange={handleCaptcha}
        />

        {isLoading && (
          <button className="full-btn" disabled>
            Sending ...
          </button>
        )}
        {!isLoading && <button className="full-btn">Send</button>}
      </form>
    </div>
  );
};

export default ContactForm;

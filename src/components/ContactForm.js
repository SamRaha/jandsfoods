import React, { useState, useEffect, useRef, TextareaHTMLAttributes } from "react";
import $ from "jquery";
import "./ContactForm.scss";
import ReCAPTCHA from "react-google-recaptcha";
import dotenv from "dotenv";
import TextareaAutosize from "react-autosize-textarea";
import LeftLeaves from "../assets/left-leaves-contact-form.svg";
import RightLeaves from "../assets/right-leaves-contact-form.svg";
dotenv.config();

function ContactForm() {
    const [reCaptchaCompleted, setreCaptchaCompleted] = React.useState(false);
    function onChange(value) {
        console.log("Captcha value:", value);
        setreCaptchaCompleted(true);
    }
    function submitContactForm(e) {
        e.preventDefault();
        var Namere = /[A-Za-z]{1}[A-Za-z]/;
        if (!Namere.test($("#name-input").val())) {
            alert("Name can not less than 2 char");
            return;
        }
        var mobilere = /[0-9]{10}/;
        if (!mobilere.test($("#mobile-input").val())) {
            alert("Please enter valid mobile number");
            return;
        }
        if ($("#email-input").val() === "") {
            alert("Please enter your email id");
            return;
        }

        var reeamil = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
        if (!reeamil.test($("#email-input").val())) {
            alert("Please enter valid email address");
            return;
        }

        var $contactFormContent = $("#contact-form-content");
        var $contactFormConfirmation = $("#contact-form-confirmation");

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var name = $("#name-input").val();
        var mobile = $("#mobile-input").val();
        var email = $("#email-input").val();
        var message = $("#message-input").val();
        var data = {
            name: name,
            mobile: mobile,
            email: email,
            message: message,
        };
        var raw = JSON.stringify(data);

        var requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
        };
        if (reCaptchaCompleted) {
            console.log("recaptcha completed");
            fetch("https://tmo7dk53bd.execute-api.eu-west-1.amazonaws.com/dev/", requestOptions)
                .then((response) => response.text())
                .then((result) => console.log(result))
                .then(() => {
                    // alert("Successfull");
                    document.getElementById("contact-form").reset();
                    $contactFormContent.addClass("display-none");
                    $contactFormConfirmation.addClass("display-block");

                    // location.reload();
                })
                .catch((error) => {
                    console.log("error", error) && alert("unsuccesful");
                });
        } else {
            console.log("recaptcha not completed");
        }
    }
    return (
        <div className="contact-form-div">
            <div className="contact-form">
                <form method="post">
                    <div id="contact-form-confirmation">
                        <p>
                            Thank you for sending a message to the Hermes Local team. <br></br>
                            We will aim to respond to your enquiry within three working days.
                        </p>
                    </div>
                    <div id="contact-form-content" className="contact-form-contents">
                        <div className="contact-form-title">
                            <h1>Send us a message</h1>
                            <p>We will contact you as soon as possible</p>
                        </div>
                        <div className="contact-form-fields">
                            <label htmlFor="nameInput">Name *</label>
                            <input type="text" id="name-input" />
                            <label htmlFor="phonenumberinput">Mobile Number *</label>
                            <input type="phone" id="mobile-input" />
                            <label htmlFor="exampleInputEmail1">Email *</label>
                            <input type="email" id="email-input" />
                            <label htmlFor="messageinput">Message *</label>
                            <TextareaAutosize rows="2" id="message-input" onResize={(e) => {}} />
                        </div>
                        <div className="g-recaptcha" data-sitekey="6Lc7cVMUAAAAAM1yxf64wrmO8gvi8A1oQ_ead1ys"></div>

                        <div className="recaptcha-div">
                            <ReCAPTCHA sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY} onChange={onChange} />
                        </div>
                        <div className="terms">
                            <p>By pressing the submit button, you are agreeing to be contacted by J & S Foods.</p>
                        </div>
                        <button
                            type="submit"
                            onClick={(event) => {
                                submitContactForm(event);
                            }}
                            className="submit-button"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
            <img className="left-leaves-contact-form" src={LeftLeaves} alt="" />
            <img className="right-leaves-contact-form" src={RightLeaves} alt="" />
        </div>
    );
}

export default ContactForm;

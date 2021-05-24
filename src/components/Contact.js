import React from "react";
import $ from "jquery";
import "./Contact.scss";

function Contact() {
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
        if ($("#email-input").val() == "") {
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
    }
    return (
        <div className="contact-form contact-section container-fluid">
            <form id="contact-form" className="contact-form-background" method="post">
                <div id="contact-form-confirmation" className="contact-form-confirmation">
                    <p>
                        Thank you for sending a message to the Hermes Local team. <br></br>
                        We will aim to respond to your enquiry within three working days.
                    </p>
                </div>
                <div id="contact-form-content">
                    <div className="mb-3 text-center">
                        <h3 className="contact-form-header">CONTACT FORM</h3>
                    </div>
                    <label for="nameInput" className="form-label">
                        Name
                    </label>
                    <input type="text" id="name-input" placeholder="Enter name here…" className="form-control" />
                    <br />
                    <label for="phonenumberinput" className="form-label">
                        Mobile Number
                    </label>
                    <input type="phone" id="mobile-input" placeholder="Enter phone number" className="form-control" />
                    <br />
                    <label for="exampleInputEmail1" className="form-label">
                        Email address
                    </label>
                    <input type="email" id="email-input" placeholder="Enter email here…" className="form-control" />
                    <br />
                    <label for="messageinput" className="form-label">
                        Message
                    </label>
                    <textarea id="message-input" rows="3" placeholder="Enter your message…" className="form-control"></textarea>
                    <br />
                    <div className="g-recaptcha" data-sitekey="6Lc7cVMUAAAAAM1yxf64wrmO8gvi8A1oQ_ead1ys" className="form-control"></div>
                    <div className="mb-3">
                        <p className="terms">By pressing the submit button, you are agreeing to be contacted by Hermes.</p>
                    </div>
                    <button
                        type="submit"
                        onClick={(event) => {
                            submitContactForm(event);
                        }}
                        className="btn submit-button"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Contact;

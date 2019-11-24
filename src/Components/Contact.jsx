import React from "react";
import styled from "styled-components";

const Button = styled.button`
    background-color: #5e4d85;
    border-radius: 25px;
    border: 1px solid #1f2f47;
    cursor: pointer;
    color: #fff;
    font-size: 15px;
    padding: 17px 57px;
    text-decoration: none;
    text-shadow: 0px 1px 0px #263666;

    &:hover {
        transform: scale(1.03);
    }
`;

const Input = styled.input`
    padding: 1.5rem;
    margin: 1.5rem 0;
    width: 90%;
    border: 1px solid #362066;
    font-size: 1.5rem;
`;

const TextArea = styled.textarea`
    width: 90%;
    min-height: 100px;
    font-size: 1.5rem;
    padding: 1rem;
    border: 1px solid #362066;
    outline: none;
    margin: 1rem 0;
`;

const Form = styled.form`
    label {
        font-size: 1.5rem;
    }
    padding: 2rem;
    font-size: 2rem;

    button {
        margin: 1rem auto;
        display: flex;
        min-width: 15%;
        justify-content: center;
    }
`;

const ContactSection = styled.section`
    width: 90vw;
    display: flex;
    flex-wrap: wrap;
    padding: 2rem 0;
    justify-content: center;
    align-items: center;

    .contact {
        width: 100%;
        margin: 2rem;
        padding: 2rem 0;
        border-radius: 10px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
        box-shadow: 1px 2px 5px 0 rgba(0, 0, 0, 0.2),
            0 -1px 5px 0 rgba(0, 0, 0, 0.1);

        p {
            font-size: 2rem;
            width: 100%;
            text-align: center;
            margin: 2rem;
        }

        .contact-form {
            width: 50%;
            display: flex;
            align-items: center;
            justify-content: center;

            @media (max-width: 900px) {
                width: 70%;
            }

            @media (max-width: 750px) {
                width: 90%;
            }
        }
    }
`;

const darkModeSettings = {
    color: `rgb(233, 233, 233)`,
    backgroundColor: "rgb(23, 23, 35"
};

function Contact(props) {
    const darkStyling = props.darkMode ? darkModeSettings : null;
    return (
        <div className="contact-container" style={darkStyling}>
            <ContactSection>
                <div className="contact">
                    <p>
                        Thanks for taking the time to reach out. How can I help
                        you today?
                    </p>

                    <div className="contact-form">
                        <Form
                            action="/success"
                            name="contact"
                            method="POST"
                            data-netlify="true"
                            data-netlify-honeypot="bot-field"
                        >
                            <input type="hidden" name="bot-field" />
                            <input
                                type="hidden"
                                name="form-name"
                                value="contact"
                            />

                            <label htmlFor="name">Name</label>
                            <Input
                                type="text"
                                id="name"
                                placeholder="Your Name"
                                name="name"
                                required
                            />

                            <label htmlFor="email">Email</label>
                            <Input
                                type="email"
                                id="email"
                                placeholder="Your Email"
                                name="email"
                                required
                            />

                            <label htmlFor="message">Message</label>
                            <TextArea
                                id="message"
                                placeholder="Your Message"
                                name="message"
                                required
                            />
                            <Button type="submit">Send</Button>
                        </Form>
                    </div>
                </div>
            </ContactSection>
        </div>
    );
}

export default Contact;

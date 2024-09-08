import React from "react";
import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    .input-group {
      border: 1px solid black;
    }
    input::placeholder {
      color: black;
      font-weight: 500;
    }
    padding: 3rem 0 5rem 0;

    .container {
      margin-top: 3rem;
      text-align: center;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <h2 className="common-heading">Feel Free to Contact me</h2>
      <div className="container grid grid-two-column">
        <div className="container">
          <div className="contact-form">
            <form
              action="https://formspree.io/f/mblrbwld"
              method="POST"
              className="contact-inputs"
            >
              <input
                type="text"
                name="username"
                placeholder="username"
                autoComplete="off"
                className="input-group"
                required
              />

              <input
                type="email"
                name="Email"
                placeholder="Email"
                autoComplete="off"
                className="input-group"
                required
              />

              <textarea
                name="message"
                cols="30"
                rows="6"
                autoComplete="off"
                className="input-group"
                required
              ></textarea>

              <input type="submit" value="send" />
            </form>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11447.471830573513!2d79.46315693976872!3d16.886241370537203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a352e82e04b87e9%3A0x9a4759c8276f8490!2sPeddadevulapally%2C%20Telangana%20508207!5e0!3m2!1sen!2sin!4v1725769530024!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </Wrapper>
  );
};

export default Contact;

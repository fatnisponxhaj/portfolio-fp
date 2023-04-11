import React, { useState, useRef } from "react";
import styled from "styled-components";
import { MdAlternateEmail } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { HiOutlineMailOpen, HiHeart } from "react-icons/hi";
import { AiFillGithub, AiFillLinkedin, AiOutlineArrowUp } from "react-icons/ai";
import { BsFacebook, BsSlack } from "react-icons/bs";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import { Slide, Zoom, Fade } from "react-awesome-reveal";
// import { useToast } from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
import './contact-form.scss'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Footer = () => {
  const scrollUp = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  // const toast = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lrhnkuj",
        "template_v78s4e8",
          name !== "" &&
          email !== "" &&
          message !== ""
          ? (
            form.current
            )
          : toast.warn("Please fill the contact form"),
        "mv_knTG3hqeBZPw2w"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setName(() => "");
    setEmail(() => "");
    setMessage(() => "");
    // e.target.value.clear();
  };
  return (
    <>
    <Container id="contact">
      <Profile>
        <Slide direction="left" delay={1}>
          <h1>Contact</h1>
        </Slide>
        <div className="address">
          <Slide direction="left">
            <h1>Address:</h1>
          </Slide>
          <Slide direction="left">
            <p>MS-96 Rr. Venet Bajrami, Mati 1, Prishtina, Kosova</p>
          </Slide>
        </div>
        <div className="links">
          <Slide direction="left">
            <h1>Contact me directly:</h1>
          </Slide>
          <div>
            <span>
              <FiPhoneCall />
            </span>
            <Slide direction="left">
              <a href="tel:+38349283441">+383 49 283 441</a>
            </Slide>
          </div>
          <div>
            <Slide direction="left">
              <span>
                <HiOutlineMailOpen />
              </span>
            </Slide>
            <Slide>
              <a href="mailto:fatnisponxhaj@gmail.com">fatnisponxhaj@gmail.com</a>
            </Slide>
          </div>
        </div>
        <div className="profiles">
          <Slide direction="left">
            <h1>Check my profiles</h1>
          </Slide>
          <div className="icons">
            <Zoom>
            <span>
                <a href="https://www.linkedin.com/in/fatnis-p-297178107/" target="_blank" rel="noreferrer">
                  <AiFillLinkedin/>
                </a>
              </span>
            </Zoom>
            <Zoom>
            <span>
                <a href="https://github.com/fatnisponxhaj" target="_blank" rel="noreferrer">
                  <AiFillGithub/>
                </a>
              </span>
            </Zoom>
            <Zoom>
              <span>
                <a href="/">
                  <BsFacebook />
                </a>
              </span>
            </Zoom>
            <Zoom>
              <span>
                <a href="/">
                  <BsSlack />
                </a>
              </span>
            </Zoom>
          </div>
        </div>
        <Fade>
          <ArrowUp onClick={scrollUp}>
            <AiOutlineArrowUp />
          </ArrowUp>
        </Fade>
      </Profile>
      <div className="form-style">
          <form  onSubmit={sendEmail} ref={form}>
            <div className="name-input">
              <span>
                <CgProfile />
              </span>
              <input type="text" placeholder="Fullname..."
                name="name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                 />
            </div>
            <div className="email-input">
              <span>
                <MdAlternateEmail />
              </span>
              <input type="email" placeholder="Email..." 
               name="email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               />
            </div>
            <div className="message-input">
              <span className="messageIcon">
                <FiMail />
              </span>
              <textarea cols="30" rows="10" placeholder="Message..."
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button className="submit-btn"
            onClick={() =>
              name !== ""&&
              email !== "" &&
              message !== ""
                ? toast.success("Contact email has been sent succesfully! \n We will be in touch soon. Thank you!")
                : null
            }
            ><input type="submit" value="Send" className="submit-btn"/></button>
          </form>
          <ToastContainer />
      </div>
      
    </Container>
    <Container >
     <div class="footer">
      <h3>Developed with&#160;</h3> <HiHeart  className="heart"/> <h3 className="fatnis">&#160;Fatnis Ponxhaj</h3>
      </div>
    </Container>
    </>
  );
};

export default Footer;

const Container = styled.div`
  margin-top: 2rem;
  position: relative;
  padding: 2rem 0;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 650px) {
    flex-direction: column;
    gap: 3rem;
  }

  .heart{
    color:red;
    height:1.3rem;
    width:1.3rem;
  }
  .footer{
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    border-radius:1px;
    background:linear-gradient(-3deg,#01be96 -250%,rgb(43,43,58) 50%);
    padding:1rem;
    width:100%
  }
  .fatnis{
    color:#01be96;
    white-space: nowrap;
  }
`;
const Profile = styled.div`
  flex: 1;
  .address {
    padding: 1rem 0;
    h1 {
      font-size: 1.2rem;
    }

    p {
      width: 60%;
      padding-top: 0.5rem;
      @media (max-width: 650px) {
        width: 100%;
      }
    }
  }

  .links {
    h1 {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }

    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      a {
        text-decoration: none;
        color: lightgray;
        transition: 300ms ease-in-out;
        :hover {
          color: #01be96;
        }
      }
    }
  }

  .profiles {
    h1 {
      font-size: 1.2rem;
      padding: 1rem 0;
    }

    .icons {
      display: flex;
      align-items: center;

      a {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #000;
        width: 2rem;
        height: 2rem;
        margin-right: 0.5rem;
        border-radius: 50px;
        margin-top: 0.2rem;
        color: #fff;
        transition: 300ms ease-in-out;
        :hover {
          background-color: #01be96;
        }
      }
    }
  }
`;
const ArrowUp = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: #01be96;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.3rem;
  font-weight: 700;
  margin-top: 2rem;
  @media (max-width: 650px) {
    position: absolute;
    right: 3rem;
    top: 16rem;
  }
`;
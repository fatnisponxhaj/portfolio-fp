import React from "react";
import styled from "styled-components";
import { AiFillGithub } from "react-icons/ai";
import { GiEarthAmerica } from "react-icons/gi";
import { FaLinkedinIn } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";

const ProfComponent = () => {
  return (
    <Container id="home">
      <Slide direction="left">
        <Texts>
          <h4>
            Hello <span className="green">I'am</span>
          </h4>
          <h1 className="green">FATNIS PONXHAJ</h1>
          <h3>Software Developer & Quality Assurance Engineer</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            iusto. Adipisci in qui officia provident tenetur sequi, deserunt
            corporis quos?
          </p>
          <button><a class="lets-talk" href="#contact">Let's talk</a></button>
          <Social>
            <p>Check out my :</p>
            <div className="social-icons">
              <span>
                <a href="https://www.linkedin.com/in/fatnis-p-297178107/" target="_blank" rel="noreferrer">
                  <FaLinkedinIn />
                </a>
              </span>
               <span>
                <a href="https://github.com/fatnisponxhaj" target="_blank" rel="noreferrer">
                  <AiFillGithub/>
                </a>
              </span>
              <span>
                <a href="/" target="_blank" rel="noreferrer">
                  <GiEarthAmerica />
                </a>
              </span>
            </div>
          </Social>
        </Texts>
      </Slide>
      <Slide direction="right" className="slider-cls">
        <Profile>
          <img
            src="https://res.cloudinary.com/randomlite/image/upload/v1681047606/Fatnis/fatnisprofile_hmbiov.png"
            alt="profile"
          />
        </Profile>
      </Slide>
    </Container>
  );
};

export default ProfComponent;

const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 6rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  z-index: 1;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 640px) {
    flex-direction: column;
    position:relative;
    .slider-cls{
     position:absolute;
     z-index:-1;
     display:flex;
     justify-content:center;
     width:100%;
    }
  }
`;
const Texts = styled.div`
  flex: 1;
  h4 {
    padding: 1rem 0;
    font-weight: 500;
  }
  h1 {
    font-size: 2rem;
    font-family: "Secular One", sans-serif;
    letter-spacing: 2px;
  }
  h3 {
    font-weight: 500;
    font-size: 1.2rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
  }
  p {
    font-weight: 300;
  }

  button {
    padding: 0.7rem 2rem;
    margin-top: 3rem;
    cursor: pointer;
    background-color: #01be96;
    border: none;
    color: #fff;
    font-weight: 500;
    filter: drop-shadow(0px 10px 10px #01be9551);
    position: relative;
    transition: 400ms ease-in-out;
    :hover {
      filter: drop-shadow(0px 12px 12px #01be9570);
    }
  }
  .lets-talk{
    color: #fff;
    text-decoration: none;
  }
`;
const Social = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  p {
    font-size: 0.9rem;
    @media (max-width: 690px) {
      font-size: 0.7rem;
    }
  }

  .social-icons {
    display: flex;
    align-items: center;
    gap: 1rem;
    span {
      width: 2.3rem;
      height: 2rem;
      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
      background-color: #01be96;
      position: relative;
      transition: transform 400ms ease-in-out;
      :hover {
        transform: rotate(360deg);
      }
    }

    a {
      color: #fff;
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
const Profile = styled.div`
  img {
    width: 17rem;
    height:auto;
    filter: drop-shadow(0px 10px 10px #01be9570);
    transition: transform 400ms ease-in-out;
    @media (max-width: 790px) {
      width: 15rem;
    }

    @media (max-width: 660px) {
      width: 15rem;
    }

    @media (max-width: 640px) {
      width: 15rem;
      opacity:0.5;
    }
  }

  :hover img {
    transform: translateY(-10px);
  }
`;

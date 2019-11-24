/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import styled from "styled-components";
import { FaGithub, FaGlobe } from "react-icons/fa";
import data from "../data";

const Conatiner = styled.div`
  z-index: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  .card {
    margin: 30px auto;
    width: 400px;
    height: 400px;
    border-radius: 40px;
    box-shadow: 5px 5px 30px 7px rgba(0, 0, 0, 0.1),
      -5px -5px 30px 7px rgba(0, 0, 0, 0.1);
    transition: 0.4s;
    color: rgba(0, 0, 0, 0.85);

    @media screen and (max-width: 450px) {
      width: 250px;
      height: 250px;
    }
  }

  .card .card_image {
    width: inherit;
    height: inherit;
    border-radius: 40px;
  }

  .card .card_image img {
    width: inherit;
    height: inherit;
    border-radius: 40px;
    object-fit: cover;
  }

  .card .card_title {
    text-align: center;
    border-radius: 0px 0px 40px 40px;
    font-family: sans-serif;
    font-weight: bold;
    font-size: 30px;
    margin-top: -80px;
    height: 40px;
  }

  .card_title {
    display: flex;
    justify-content: space-evenly;
    position: relative;
    bottom: -3rem;

    a:visited {
      color: rgba(0, 0, 0, 0.8);
    }
  }

  .card:hover {
    transform: scale(1.01, 1.01);
    box-shadow: 5px 5px 30px 15px rgba(0, 0, 0, 0.05),
      -5px -5px 30px 15px rgba(0, 0, 0, 0.05);
  }

  .title-white {
  }

  .title-black {
    color: black;
  }
`;

export default function Card() {
  return (
    <Conatiner>
      {data.map((card, index) => {
        return (
          <div className="card">
            <div className="card_image">
              <img src={card.image} />
            </div>
            <div className="card_title title-white">
              <p>{card.title}</p>
              <div className="links">
                <a href={card.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
                <a
                  href={card.deployed}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGlobe />
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </Conatiner>
  );
}

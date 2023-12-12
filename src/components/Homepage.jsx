import React from "react";
import '../App.css';
import { Box, Button, Flex, Image,Divider } from "@chakra-ui/react";
import homepage from "../Images/homepage.mp4";
import Swiper1MainPart from "./Swiper1MainPart";
import help from "../Images/help.png";
import message from '../Images/message.png';
import main from '../Images/main.png'
const Homepage = () => {
  return (
    <div className="div_box">
      <Box className="box1">
        <Box className="box">
          <h1 className="heading">
            <span className="heading_span">
              The only AI customer service solution you need
            </span>
          </h1>
          <div className="">
            <br />
            <br />
            <span className="spane">
              The only solution that combines an AI chatbot, help desk, and
              proactive support—so you can keep costs low, support teams happy,
              and customers satisfied.
            </span>
          </div>
        </Box>
        <br />
        <br />
        <br />
        <Flex justifyContent={"center"}>
          <Button
            style={{
              height: "3rem",
              borderRadius: "2rem",
              padding: "0 1.5rem",
              backgroundColor: "#0057ff",
              color: "#fff",
            }}
          >
            Start free trial
          </Button>
          <button className="view_button">View demo</button>
        </Flex>
        <br />
        <br />
        <Box width={"80%"} margin={"auto"} className="video">
          <video className="video" src={homepage} autoPlay muted />
        </Box>
        <section className="svg_name">
          <svg
            class="shape-section__shape"
            viewBox="0 0 1440 84"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M1440 85H0v-2C458.698 26.24 931.453 0 1406.246 0H1440Z"
              fill="#ffffff"
            ></path>
          </svg>
        </section>
      </Box>
      <br />
      <br />
      <div className="logo_carosuel">
        <span className="logo_carosuel">TRUSTED BY +25,000 BUSINESSES</span>
      </div>
      <br />
      <br />
      <Box>
        <Box width={"80%"} margin={"auto"}>
          <Swiper1MainPart />
        </Box>
      </Box>
      <Box>
        <Image src={help} />
      </Box>
      <br/>
      <Box>
        <Image src={message} />
      </Box>
      <br/>
      <Divider/>
      <br/>
      <Box>
        <Image src={main} />
      </Box>
    </div>
  );
};

export default Homepage;
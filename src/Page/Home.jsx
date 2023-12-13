
import React, { useState } from "react";
import Chatbox from "./Chatbox";
import { GrChat } from "react-icons/gr";
import { Box, Button, Divider, Flex, Image } from "@chakra-ui/react";
import help from "../Images/help.png";
import message from '../Images/message.png';
import main from '../Images/main.png'
import homepage from "../Images/homepage.mp4";

const Home = () => {
  const [chatboxOpen, setChatboxOpen] = useState(false);

  const handleChatboxToggle = () => {
    setChatboxOpen(!chatboxOpen);
  };

  return (
    <div className="container mx-auto">
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
          {/* <Swiper1MainPart /> */}
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
    
      <button
        className="fixed bottom-4 right-10 p-4 bg-blue-500 text-white rounded-full transition-all duration-300"
        onClick={handleChatboxToggle}
      >
        <GrChat/>
      </button>

    
      {chatboxOpen && (
        <Chatbox handleChatboxToggle={handleChatboxToggle}/>
      )}
    </div>
  );
};

export default Home;

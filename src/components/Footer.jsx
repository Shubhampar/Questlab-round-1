import React from "react";
import { Flex, Button } from "@chakra-ui/react";
import '../App.css'
const Footer = () => {
  const columnStyle = {
    flex: 1,
    padding: "20px",
  };
  return (
    <div>
      <h1
        className="h1_tag_footer"
        
      >
        Join the future of customer <br />
        service
      </h1>
      <br />
      <Flex justifyContent={"center"}>
        <Button
          style={{
            height: "3rem",
            borderRadius: "2rem",
            padding: "0 1.5rem",
            backgroundColor: "#0057ff",
            color: "#fff",
            padding: "12px 30px",
          }}
        >
          Start free trial
        </Button>
        <button
          style={{
            color: "#0057ff",
            borderColor: "#0057ff",
            borderRadius: "30px",
            marginLeft: "30px",
            backgroundColor: "transparent",
            boxShadow: "inset 0 0 0 2px #0057ff",
            color: "#0057ff",
            padding: "12px 30px",
          }}
        >
          View demo
        </button>
      </Flex>
      <br/>
      <br/>
      <br/>
      <div  className='footer_div_part'>
        {/* Pricing Column */}
        <div style={columnStyle}>
          <h2
            style={{ fontSize: "24px", fontWeight: "600", fontStyle: "italic" }}
          >
            Pricing
          </h2>
          <br />
          <ul style={{ listStyle: "none" }} className='ul_li'>
            <li>Use Cases</li>
            <br />
            <li>Support</li>
            <br />
            <li>Engage</li>
            <br />
            <li>Convert</li>
            <br />
          </ul>
          <h2 style={{ fontSize: "24px", fontWeight: "600", fontStyle: "italic" }}>Comapany Size</h2>
          <br/>
          <br/>
          <ul style={{ listStyle: "none" }} className='ul_li'>
            <li>blog</li>
            <br />
            <li>Watch a Demo</li>
            <br />
            <li>Academy</li>
            <br />
            <li>Webinar</li>
            <br />
          </ul>
        </div>

        {/* Company Size Column */}
        <div style={columnStyle}>
          <h2
            style={{ fontSize: "24px", fontWeight: "600", fontStyle: "italic" }}
          >
            Company Size
          </h2>
          <br />
          <ul style={{ listStyle: "none" }} className='ul_li'>
            <li>Mid-Market / Enterprise</li>
            <br />
            <li>Small Business</li>
            <br />
            <li>Early Stage</li>
          </ul>
          <br/>
          <br/>
          <br/>
          <h2 style={{ fontSize: "24px", fontWeight: "600", fontStyle: "italic" }}>Industries</h2>
          <br/>
          <br/>
          <ul style={{ listStyle: "none" }} className='ul_li'>
            <li>blog</li>
            <br />
            <li>Watch a Demo</li>
            <br />
            <li>Academy</li>
            <br />
            <li>Webinar</li>
            <br />
          </ul>
        </div>

        {/* Industries Column */}
        <div style={columnStyle}>
          <h2
            style={{ fontSize: "24px", fontWeight: "600", fontStyle: "italic" }}
          >
            Resources
          </h2>
          <br />
          <ul style={{ listStyle: "none" }} className='ul_li'>
            <li>Financial Services</li>
            <br />
            <li>E-commerce</li>
            <br />
            <li>Education</li>
            <br />
            <li>Healthcare</li>
          </ul>
        </div>

        {/* Features Column */}
        <div style={columnStyle}>
          <h2
            style={{ fontSize: "24px", fontWeight: "600", fontStyle: "italic" }}
          >
            Company
          </h2>
          <br />
          <ul style={{ listStyle: "none" }} className='ul_li'>
            <li>Business Messenger</li>
            <br />
            <li>Customizable bots</li>
            <br />
            <li>Automated answers</li>
            <br />
            {/* Add more features here */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
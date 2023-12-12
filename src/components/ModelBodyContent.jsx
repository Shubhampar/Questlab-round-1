import React, { useEffect, useState } from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import "../App.css";
import right from "../Images/right-arrow.png";
import sidebar from "../Images/sidebar.png";
import home from "../Images/home.png";
import news1 from "../Images/news.png";
import news2 from "../Images/news2.png";
import news3 from "../Images/news3.png";
import axios from "axios";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Input,
} from "@chakra-ui/react";

const ModalBodyContent = () => {
  const [text, setText] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [val, setVal] = useState("");

  const getData = async () => {
    setLoading(true);
    try {
      let res = await axios.get(`https://questlab-server1.onrender.com`);
      console.log("res",res.data)
      console.log("datd", res.data);
      setText(res.data);

      setLoading(true);
    } catch (err) {
      console.log("err", err);
      setError(true);
    }
  };

  const handleAdd = async () => {
    try {
      await axios.post(`https://questlab-server1.onrender.com/add`, { val });
    } catch (err) {
      console.log("err", err);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Box className="mainBox">
        <Box className="modalMain">
          <Image
            src={
              "https://downloads.intercomcdn.com/i/o/355439/a7cdd3705c65918af17f3ce0/1bb87d41d15fe27b500a4bfcde01bb0e.png"
            }
            width={"40px"}
          />
          <Box style={{ display: "flex", justifyContent: "center" }}>
            <Image
              borderRadius={"50px"}
              src="https://static.intercomassets.com/avatars/5627346/square_128/5627346-1665143648.jpeg"
              width={"40px"}
            />
            <Image
              borderRadius={"50px"}
              src="https://static.intercomassets.com/avatars/5526474/square_128/5526474-1665143561.png"
              width={"40px"}
            />
            <Image
              borderRadius={"50px"}
              src="https://static.intercomassets.com/avatars/5084876/square_128/5084876-1665143037.jpg"
              width={"40px"}
            />
          </Box>
        </Box>
        <h1 className="h1_main_modal_tag">
          Hello there.
          <br /> How can we help?
        </h1>

        <Box
          style={{
            padding: "12px 0px",
            display: "flex",
          }}
        >
          <Box>
            <h3
              style={{
                fontSize: "21px",
                color: "rgba(0, 0, 0, 0.416)",
              }}
            >
              Send up message
            </h3>
            <p>we typically reply within a day</p>
          </Box>
          <Box>
            <Image src={right} width={"40px"} />
          </Box>
        </Box>
        <Box>
          <Image src={sidebar} />
        </Box>
      </Box>
      <br />
      <br />
      <Box>
        {loading &&
          text?.msg?.map((el) => {
            return (
              <div>
                <h1>{el.message}</h1>
              </div>
            );
          })}
      </Box>
      <Flex>
        <Input
          type="text"
          placeholder="Type Message here"
          onChange={(e) => setVal(e.target.value)}
        />
        <Button
          style={{ backgroundColor: "rgb(110, 110, 222)" }}
          onClick={handleAdd}
        >
          Add
        </Button>
      </Flex>
      <br />
      <br />
      <Box
        style={{
          padding: "15px 0px",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          position: "sticky",
          bottom: "0px",
          zIndex: 1,
        }}
      >
        <Flex
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Box>
            <Image src={home} width={"35px"} />
            <Text fontWeight={"600"}>Home</Text>
          </Box>
          <Box>
            <Image src={news1} width={"35px"} />
            <Text fontWeight={"600"}>News</Text>
          </Box>
          <Box>
            <Image src={news2} width={"35px"} />
            <Text fontWeight={"600"}>Message</Text>
          </Box>
          <Box>
            <Image src={news3} width={"35px"} />
            <Text fontWeight={"600"}>Help</Text>
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default ModalBodyContent;
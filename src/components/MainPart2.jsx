import React from "react";
import { Image, Box } from "@chakra-ui/react";
import "../App.css";
import legacy from "../Images/legacy.png";
const MainPart2 = () => {
  return (
    <div>
      <Image
        margin={"auto"}
        src={
          "https://images.ctfassets.net/xny2w179f4ki/2xUzzQQsF8l9BTt6WbOc08/32d50a786b2de379139719fe1e946098/Wolt.svg"
        }
        alt="wolt"
      />
      <br />
      <blockquote className="blog">
        <span className="blog_span">
          The thing I noticed most about the inbox is the speed. In a test, we
          saw a <br />
          15% increase in the number of conversations handled
        </span>
      </blockquote>
      <Box className="flex_name">
        <Box className="flex_name_flex">
          <Image src="https://images.ctfassets.net/xny2w179f4ki/7kZTr8se1QPFB14alEIiZl/b707a306318133c34d50cd63d76e0c98/Avatar_Pelle.png?w=176&fm=webp" />
          <Box
            style={{
              display: "block",
            }}
          >
            <h1
              style={{
                color: "#041527",
                fontSize: "24px",
                lineHeight: "114%",
                textAlign: "left",
                fontWeight: "700",
              }}
            >
              Pelle Blarke
            </h1>
            <div className="div">
              <span className="div_span">
                International Strategy and <br />
                Operations Manager, Wolt
              </span>
            </div>
          </Box>
        </Box>
      </Box>
      <Box>
        <Image src={legacy} />
      </Box>
    </div>
  );
};

export default MainPart2;
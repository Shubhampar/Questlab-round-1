import './App.css';
// import AllRoutes from './components/AllRoutes';
import { Heading, Image } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from './components/Homepage';
import MainPart2 from './components/MainPart2';
import ModelBodyContent from "./components/ModelBodyContent";
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
} from "@chakra-ui/react";
import comment from "./Images/comment.png";

function BasicUsage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        style={{
          position: "fixed",
          top: "400px",
          right: "20px",
          zIndex: 1,
          padding: "12px 20px",
          backgroundColor: "#4CAF50",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          cursor: "pointer",
        }}
        onClick={onOpen}
      >
        <Image src={comment} width={"50px"} />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Message Added</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ModelBodyContent />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
      <br />
      <MainPart2 />
      <Footer />
      <BasicUsage />
    </div>
  );
}

export default App;






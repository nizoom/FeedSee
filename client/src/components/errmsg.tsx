import { Fade } from "@chakra-ui/react";
import React from "react";

interface ErrProps {
  modalMsg: string;
}

const ResponseErrorMsg: React.FC<ErrProps> = ({ modalMsg }) => {
  return (
    <Fade in={modalMsg ? true : false}>
      <div
        style={{
          backgroundColor: "#F72585",
          borderRadius: "15px",
          padding: "5px",
          width: "200px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            marginLeft: "10px",
          }}
        >
          <p style={{ fontSize: "large", marginBottom: "0" }}> Error </p>
          <p>{modalMsg}</p>
        </div>
      </div>
    </Fade>
  );
};

export default ResponseErrorMsg;

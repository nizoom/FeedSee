import { Container, Text } from "@chakra-ui/react";
import Reat from "react";
const ProgressBar: React.FC = () => {
  return (
    <Container>
      <style>
        {`.indeterminate-progress-bar {
                background-color: #4CC9F0;
                margin: 5% 30%;
                border-radius: 99px;
                height: 15px;
                position: relative;
                overflow: hidden;
                }
            
            .indeterminate-progress-bar__progress {
                background-color: #B5179E;
                border-radius: 99px;
                position: absolute;
                bottom: 0;
                top: 0;
                width: 50%;
                animation-duration: 2s;
                animation-iteration-count: infinite;
                animation-name: indeterminate-progress-bar;
            }
            @keyframes indeterminate-progress-bar {
                from {
                    left: -50%;
                }
                to {
                    left: 100%;
                }
            }`}
      </style>
      <div className="indeterminate-progress-bar">
        <div className="indeterminate-progress-bar__progress"></div>
      </div>
    </Container>
  );
};

export default ProgressBar;

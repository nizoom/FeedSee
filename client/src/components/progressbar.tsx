import { Container, Fade, Text, useDisclosure } from "@chakra-ui/react";
import Reat, { useEffect, useState } from "react";

interface ProgressBarProps {
  isLoading: boolean;
}
const ProgressBar: React.FC<ProgressBarProps> = ({ isLoading }) => {
  //   const { isOpen } = useDisclosure();
  const [progressBarClass, setProgressBarClass] = useState<string>(
    "progress-bar-inactive"
  );
  useEffect(() => {
    if (isLoading && progressBarClass === "progress-bar-inactive") {
      setProgressBarClass("progress-bar-active");
    }
    if (isLoading) {
      setTimeout(() => {
        setProgressBarClass("progress-bar-inactive");
      }, 4000);
    }
  }, [isLoading]);
  console.log(isLoading);
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
            }
            @keyframes fadeInOut {
                0% {
                  opacity: 0;
                }
                50% {
                  opacity: 1;
                }
                100% {
                  opacity: 0;
                }
              }
            .progress-bar-active {
                animation: fadeInOut 4s linear 1 forwards;
            }
            .progress-bar-inactive {
                display: none;
            }
            .
            `}
      </style>
      <Container className={progressBarClass}>
        <div className="indeterminate-progress-bar">
          <div className="indeterminate-progress-bar__progress"></div>
        </div>
      </Container>
    </Container>
  );
};

export default ProgressBar;

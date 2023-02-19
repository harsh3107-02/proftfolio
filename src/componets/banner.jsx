import { Col, Container, Row } from "react-bootstrap";
import header from "../assests/img/pngegg (2).png";
import { useState, useEffect } from "react";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { isVisible } from "@testing-library/user-event/dist/utils";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [" MERN Stack Developer", "UI/UX Designer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };
  return (
    <div className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animated_animate__fadeIn" : ""}>
                  <h2>Hi my name is Harsh</h2>
                  <h1>
                    {`I'm `}
                    <span>{text}</span>
                  </h1>
                  <p>
                    Hello! I'm a full stack in building web applications. I have
                    expertise in front-end development with HTML, CSS,
                    JavaScript and modern frameworks like React as well as
                    back-end development with Node.js, Express jsand MongoDB
                    databases.
                  </p>
                  <a
                    href="https://drive.google.com/file/d/1aFSOu2T7fKBVE28iUqk243Q8R96hBg1y/view?usp=sharing"
                    download
                    className="download"
                  >
                    My Resume
                  </a>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={header} className="banner_img" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

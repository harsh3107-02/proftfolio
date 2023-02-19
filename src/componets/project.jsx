import { Nav, Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./projectcard";
import projImg1 from "../assests/img/social-media.png";
import projImg2 from "../assests/img/amazon.png";
import projImg3 from "../assests/img/Wheather APi.png";
import projImg4 from "../assests/img/chatting.png";
import projImg5 from "../assests/img/Data share-R.png";
import projImg7 from "../assests/img/coffie.png";
import projImg6 from "../assests/img/secret register.png";
import projImg8 from "../assests/img/netflix.png";
import projImg9 from "../assests/img/spotify clone .png";
import projImg10 from "../assests/img/shoes.png";
import projImg11 from "../assests/img/Red store.png";
// import colorSharp2 from "../assets/img/color-sharp2.png";
// import "animate.css";
// import TrackVisibility from 'react-on-screen';

export const Project = () => {
  const projects = [
    {
      title: "Social Media",
      description: "Function Like Posting Data and Likes",
      imgUrl: projImg1,
      link: "https://social-relation.netlify.app",
    },
    {
      title: "Ecommerce Application",
      description: "Firabase Login and React Context API",
      imgUrl: projImg2,
      link: "https://harsh3107-02.github.io/e-commerce-frontend/",
    },
    {
      title: "Messeger Frontend",
      description: "React Based Frontend",
      imgUrl: projImg4,
      link: "https://messg.netlify.app/",
    },
    {
      title: "Weather API",
      description: "Fetching Data From API And Posting Data",
      imgUrl: projImg3,
      link: "https://harsh3107-02.github.io/Weather-API/",
    },
    {
      title: "Blog Site",
      description: "Post the Data",
      imgUrl: projImg5,
      link: "https://blog-site-dwwj.onrender.com",
    },
    {
      title: "Authentication Secret",
      description: "Safely Store Your Secrets",
      imgUrl: projImg6,
      link: "https://secret-2aby.onrender.com",
    },
    {
      title: "Coffee Ecommerce",
      description: "Frontend HTML CSS JS",
      imgUrl: projImg7,
      link: "https://harsh3107-02.github.io/Rage_coffie/",
    },
    {
      title: "Netflix Landing Page",
      description: "Frontend HTML CSS JS",
      imgUrl: projImg8,
      link: "https://harsh3107-02.github.io/netflix/",
    },
    {
      title: "Spotify & Music",
      description: "Mostly Work of JavaScript",
      imgUrl: projImg9,
      link: "https://harsh3107-02.github.io/Spotify-Clone/",
    },
  ];
  const projects2 = [
    {
      title: "Shoes_Ecommerce",
      description: "Shaddow Design To Attrack Customer",
      imgUrl: projImg10,
      link: "https://harsh3107-02.github.io/shoes_ecomerce/",
    },
    {
      title: "E_Commerce Website",
      description: "Using HTML CSS & JS",
      imgUrl: projImg11,
      link: "https://harsh3107-02.github.io/E-Commerce/",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <div className="">
              <h2>Projects</h2>
              <p>
                A small gallery of recent projects chosen by me. I've done them
                all together with amazing people from companies around the
                globe. It's only a drop in the ocean compared to the entire
                list.
              </p>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav
                  variant="pills"
                  className="nav-pills mb-5 justify-content-center align-items-center"
                  id="pills-tab"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content id="slideInUp" className={""}>
                  <Tab.Pane eventKey="first">
                    <Row>
                      {projects.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <Row>
                      {projects2.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={""}></img>
    </section>
  );
};

// visitiy

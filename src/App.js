import React, { Component } from "react";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";
import "./app.css";

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header
            className="top-header"
            title="Welcome to KevinHT websites"
            scroll
          >
            <Navigation>
              <Link to="/aboutme">About Me</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/project">Project</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/home">Home</Link>
            </Navigation>
          </Header>
          <Drawer title="Menu">
            <Navigation>
              <Link to="/aboutme">About Me</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/project">Project</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/home">Home</Link>
            </Navigation>
          </Drawer>

          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;

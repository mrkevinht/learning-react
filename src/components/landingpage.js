import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class landingpage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/1/18/Call_of_Duty_WWII_Cover_Art.jpg/220px-Call_of_Duty_WWII_Cover_Art.jpg"
              alt="avatar"
              className="avatar-img"
            />
            <div className="banner-text">
              <h1>Call of Duty: Modern Warface</h1>
              <hr />
              <p>
                HTML/CSS | JAVASCRIPT | BOOTSTRAP | REVIT API | PYTHON |
                ALGORITHM
              </p>

              <div className="social-link">
                <a
                  href="http://google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                <a
                  href="http://google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

                <a
                  href="http://google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-free-code-camp" aria-hidden="true" />
                </a>

                <a
                  href="http://google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-youtube-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default landingpage;

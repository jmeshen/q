import React, { Component } from "react";
import { render } from "react-dom";
import styled, { injectGlobal } from "styled-components";
import List from "./List";
import Nav from "./Nav";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export default class Main extends Component {
  render() {
    return (
      <Root>
        <Nav />
        <List />
      </Root>
    );
  }
}

render(<Main />, document.getElementById("app"));

injectGlobal`
  body {
    padding: 0;
    margin: 0;
    font-size: 10px;
  }
`;

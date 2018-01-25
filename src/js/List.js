import React, { Component } from "react";
import styled from "styled-components";
import SubmitBox from "./SubmitBox";

const ListContainer = styled.div`
  background-color: #242526;
  color: white;
  width: 100%;
  height: 100vh;
  font-size: 1.4rem;
  margin: 0 auto;
`;

const ListItem = styled.li`
  width: 90%;
  padding: 0.5rem;
  list-style: none;
`;

const links = [
  "https://google.com",
  "https://reddit.com",
  "https://youtube.com"
];

const LinksList = links.map((link, index) => (
  <ListItem key={index}>
    <input type="checkbox" /> {link}
  </ListItem>
));

class List extends Component {
  render() {
    return (
      <ListContainer>
        <SubmitBox />
        <ul>{LinksList}</ul>
      </ListContainer>
    );
  }
}

export default List;

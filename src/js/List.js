import React, { Component } from 'react';
import styled from 'styled-components';
import SubmitBox from './SubmitBox';

const ListContainer = styled.div`
  width: 100%;
  font-size: 1.4rem;
  margin: 0 auto;
`;

const LinksList = styled.ul`
  display: flex;
  flex-direction: column;
  max-width: 68rem;
  margin: 0 auto;
`;

const ListItem = styled.li`
  width: 90%;
  padding: 0.5rem;
  list-style: none;
`;

const links = [
  'https://google.com',
  'https://reddit.com',
  'https://youtube.com',
];

const LinkItems = links.map((link, index) => (
  <ListItem key={index}>
    <input type="checkbox" /> {link}
  </ListItem>
));

class List extends Component {
  render() {
    return (
      <ListContainer>
        <SubmitBox />
        <LinksList>{LinkItems}</LinksList>
      </ListContainer>
    );
  }
}

export default List;

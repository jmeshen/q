import React, { Component } from "react";
import styled from "styled-components";

const SubmitForm = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
  input {
    width: 100%;
    max-width: 60rem;
    font-size: 1.4rem;
    padding: 0.5rem;
  }
  button {
    width: 3rem;
  }
`;

class SubmitBox extends Component {
  render() {
    return (
      <SubmitForm>
        <input type="text" placeholder="Share a link with me!" />
        <button>+</button>
      </SubmitForm>
    );
  }
}

export default SubmitBox;

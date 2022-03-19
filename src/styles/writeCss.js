import styled from "styled-components";

const WriteContainer = styled.div`
  max-width: 100%;
  height: 100vh;
  form {
    max-width: 90%;
    display: flex;
    flex-direction: column;
    margin: 30px auto;
    input {
      max-width: 100%;
      height: 50px;
      border: none;
      margin-bottom: 30px;
      padding-left: 10px;
      padding: 0;
      font-size: 20px;
      &:focus {
        outline: none;
        border-bottom: 2px solid gray;
      }
    }
    textarea {
      max-width: 100%;
      height: 300px;
      resize: none;
      border: none;
      padding-left: 10px;
      padding: 0;
      font-size: 20px;
      margin-bottom: 30px;
    }
    button {
      width: 100px;
      height: 50px;
      margin: auto;
      border: none;
      border-radius: 10px;
      font-size: 18px;
      font-weight: 900;
      cursor: pointer;
      &:hover {
        color: #fff;
        background-color: #aed6f1;
      }
    }
  }
`;

export default WriteContainer;

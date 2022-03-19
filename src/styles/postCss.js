import styled from "styled-components";

const PostContainer = styled.div`
  max-width: 100%;
  height: 100vh;
`;

const PerPost = styled.div`
  max-width: 90%;
  max-height: auto;
  margin: auto;
  margin: 50px 50px;
  padding: 20px 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  border: 1px solid #000;
  box-shadow: 1px 1px 8px #000;
  position: relative;
  cursor: pointer;
  &:hover {
    transform: scale(1.02);
  }
  h1 {
    margin-bottom: 20px;
    padding: 20px 0;
    @media (max-width: 420px) {
      max-width: 100%;
      font-size: 15px;
    }
  }
  h2 {
    height: auto;
    font-weight: lighter;
    font-size: 18px;
    @media (max-width: 420px) {
      max-width: 100%;
      font-size: 12px;
    }
  }
  .editIcon {
    position: absolute;
    right: 100px;
    bottom: 30px;
    @media (max-width: 420px) {
      position: absolute;
      right: 50px;
      bottom: 20px;
    }
  }
  .delIcon {
    position: absolute;
    right: 50px;
    bottom: 30px;
    @media (max-width: 420px) {
      position: absolute;
      right: 20px;
      bottom: 20px;
    }
  }
`;

export { PostContainer, PerPost };

import styled from "styled-components";

const HeaderContainer = styled.div`
  max-width: 100%;
  height: 80px;
  background-color: #e5e7e9;
  ul {
    max-width: 100%;
    height: 100%;
    list-style: none;
    padding: 0px;
    display: flex;
    justify-content: center;
    li {
      padding: 20px 50px;
      box-sizing: border-box;
      font-size: 1.5em;
      font-weight: 900;
      cursor: pointer;
      a {
        text-decoration: none;
        color: black;
      }
      &:hover:after {
        display: block;
      }
      &::after {
        content: "";
        border: 1px solid black;
        display: none;
      }
      @media (max-width: 420px) {
        max-width: 100%;
        font-size: 15px;
        padding: 30px 30px;
        box-sizing: border-box;
      }
    }
  }
`;

export default HeaderContainer;

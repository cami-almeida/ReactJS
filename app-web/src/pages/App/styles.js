import styled from "styled-components";

export const Container = styled.div`
display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Form = styled.form`
width: 400px;
background: #fff;
padding: 20px;
flex-direction: column;
align-items: center;
  }
  img {
    align-items: center;
    width: 100px;
    margin: 10px 0 40px;
    
  }
  button {
    color: #fff;
    font-size: 16px;
    background: #000000;
    height: 56px;
    border: 0;
    border-radius: 5px;
    width: 100%;
  }
  hr {
    margin: 20px 0;
    border: none;
    border-bottom: 1px solid #cdcdcd;
    width: 100%;
  }
  a {
    font-size: 16;
    font-weight: bold;
    color: #696969;
    text-decoration: none;
  }
`;

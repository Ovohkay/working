import React from "react";
import { FcGoogle } from "react-icons/fc";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FiArrowLeftCircle } from "react-icons/fi";
import image from "../image/user.png";

const OptionSignup = () => {
  return (
    <Container>
      <Wrapper>
        <InputPart>
          <IconTop to="/">
            <FiArrowLeftCircle />
          </IconTop>
          <SignTitle>Sign Up as a User</SignTitle>
          <NavLink to="/user/signup">
            <InputButton type="submit">Sign up</InputButton>
          </NavLink>
          <Break>
            <hr />
            or
            <hr />
          </Break>
          <SignTitle>Sign Up as as an Admin</SignTitle>
          <NavLink to="/admin/signup">
            <InputButton type="submit">Sign up</InputButton>
          </NavLink>
        </InputPart>
        <ImagePart>
          <ImgBoxHold>
            <ImgBox>
              <ImgMain src={image} />
            </ImgBox>
          </ImgBoxHold>
        </ImagePart>
      </Wrapper>
    </Container>
  );
};

export default OptionSignup;

const Break = styled.div`
  display: flex;
  width: 300px;
  margin: 30px 0;
  hr {
    height: 0.5px;
    width: 100px;
    border: none;
    background-color: gray;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Montserrat;
  background-color: ${(props) => props.theme.pageBackground};
`;
const Wrapper = styled.div`
  width: 55%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 800px) {
    justify-content: center;
  }
`;
const InputPart = styled.div``;
const ImagePart = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: flex-end;
  @media (max-width: 800px) {
    display: none;
  }
`;
const IconTop = styled(NavLink)`
  font-size: 30px;
  text-decoration: none;
  color: ${(props) => props.theme.textColor};
`;
const SignInputHold = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
`;
const SignTitle = styled.div`
  font-size: 25px;
  font-weight: 700;
  color: ${(props) => props.theme.textColor};
`;
const SignSubTitle = styled.div`
  font-size: 12px;
  color: #77838f;
`;
const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;
const InputDiv = styled.input`
  height: 45px;
  width: 280px;
  margin: 10px 0;
  border: none;
  outline: none;
  border-radius: 5px;
  padding-left: 10px;
  font-family: Montserrat;
  font-weight: 700;
  font-size: 13px;
  background-color: #e8effc;
  ::placeholder {
    color: #377dff;
  }
`;
const InputButton = styled.button`
  height: 40px;
  width: 100px;
  border: none;
  outline: none;
  font-family: Montserrat;
  font-weight: 700;
  color: #fff;
  background-color: #377dff;
  border-radius: 3px;
  margin-top: 20px;

  margin-left: 100px;
  cursor: pointer;
  transition: all 350ms;
  :hover {
    transform: scale(0.98);
  }
`;
const HasAcc = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: ${(props) => props.theme.textColor};
  span {
    color: #377dff;
    cursor: pointer;
    font-weight: 700;
    /* font-size: 15px; */
  }
`;

const ImgBox = styled.div`
  height: 320px;
  width: 300px;
  /* background-color: ${(props) => props.theme.pageBackground}; */
  background-color: #fff;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
`;
const ImgMain = styled.img`
  width: 290px;
  /* margin-top: -65px; */
`;

const ImgBoxHold = styled.div`
  margin-top: 80px;
`;
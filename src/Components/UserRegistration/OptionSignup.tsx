// import React from "react";
// import { FcGoogle } from "react-icons/fc";
// import { NavLink } from "react-router-dom";
// import styled from "styled-components";
// import { FiArrowLeftCircle } from "react-icons/fi";
// import image from "../image/user.png";

// const OptionSignup = () => {
//   return (
//     <Container>
//       <Wrapper>
//         <InputPart>
//           <IconTop to="/">
//             <FiArrowLeftCircle />
//           </IconTop>
//           <SignTitle>Sign Up as a User</SignTitle>
//           <NavLink to="/user/signup">
//             <InputButton type="submit">Sign up</InputButton>
//           </NavLink>
//           <Break>
//             <hr />
//             or
//             <hr />
//           </Break>
//           <SignTitle>Sign Up as as an Admin</SignTitle>
//           <NavLink to="/admin/signup">
//             <InputButton type="submit">Sign up</InputButton>
//           </NavLink>
//         </InputPart>
//         <ImagePart>
//           <ImgBoxHold>
//             <ImgBox>
//               <ImgMain src={image} />
//             </ImgBox>
//           </ImgBoxHold>
//         </ImagePart>
//       </Wrapper>
//     </Container>
//   );
// };

// export default OptionSignup;

// const Break = styled.div`
//   display: flex;
//   width: 300px;
//   margin: 30px 0;
//   hr {
//     height: 0.5px;
//     width: 100px;
//     border: none;
//     background-color: gray;
//   }
// `;

// const Container = styled.div`
//   width: 100%;
//   height: 100%;
//   min-height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-family: Montserrat;
//   background-color: ${(props) => props.theme.pageBackground};
// `;
// const Wrapper = styled.div`
//   width: 55%;
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-between;
//   @media (max-width: 800px) {
//     justify-content: center;
//   }
// `;
// const InputPart = styled.div``;
// const ImagePart = styled.div`
//   display: flex;
//   flex-flow: column wrap;
//   align-items: flex-end;
//   @media (max-width: 800px) {
//     display: none;
//   }
// `;
// const IconTop = styled(NavLink)`
//   font-size: 30px;
//   text-decoration: none;
//   color: ${(props) => props.theme.textColor};
// `;
// const SignInputHold = styled.div`
//   display: flex;
//   flex-flow: column wrap;
//   justify-content: center;
//   align-items: center;
// `;
// const SignTitle = styled.div`
//   font-size: 25px;
//   font-weight: 700;
//   color: ${(props) => props.theme.textColor};
// `;
// const SignSubTitle = styled.div`
//   font-size: 12px;
//   color: #77838f;
// `;
// const InputForm = styled.form`
//   display: flex;
//   flex-direction: column;
//   margin-bottom: 40px;
// `;
// const InputDiv = styled.input`
//   height: 45px;
//   width: 280px;
//   margin: 10px 0;
//   border: none;
//   outline: none;
//   border-radius: 5px;
//   padding-left: 10px;
//   font-family: Montserrat;
//   font-weight: 700;
//   font-size: 13px;
//   background-color: #e8effc;
//   ::placeholder {
//     color: #377dff;
//   }
// `;
// const InputButton = styled.button`
//   height: 40px;
//   width: 100px;
//   border: none;
//   outline: none;
//   font-family: Montserrat;
//   font-weight: 700;
//   color: #fff;
//   background-color: #377dff;
//   border-radius: 3px;
//   margin-top: 20px;

//   margin-left: 100px;
//   cursor: pointer;
//   transition: all 350ms;
//   :hover {
//     transform: scale(0.98);
//   }
// `;
// const HasAcc = styled.div`
//   font-size: 12px;
//   font-weight: 500;
//   color: ${(props) => props.theme.textColor};
//   span {
//     color: #377dff;
//     cursor: pointer;
//     font-weight: 700;
//     /* font-size: 15px; */
//   }
// `;

// const ImgBox = styled.div`
//   height: 320px;
//   width: 300px;
//   /* background-color: ${(props) => props.theme.pageBackground}; */
//   background-color: #fff;
//   border-radius: 12px;
//   box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
// `;
// const ImgMain = styled.img`
//   width: 290px;
//   /* margin-top: -65px; */
// `;

// const ImgBoxHold = styled.div`
//   margin-top: 80px;
// `;
// import React from "react";
// import { FcGoogle } from "react-icons/fc";
// import { NavLink } from "react-router-dom";
// import styled from "styled-components";
// import { FiArrowLeftCircle } from "react-icons/fi";
// import image from "../image/user.png";

// const OptionSignin = () => {
//   return (
//     <Container>
//       <Wrapper>
//         <InputPart>
//           <IconTop to="/">
//             <FiArrowLeftCircle />
//           </IconTop>
//           <SignTitle>Sign In </SignTitle>
//           <NavLink to="/user/signin">
//             <InputButton type="submit">Sign In as a User</InputButton>
//           </NavLink>
//           <Break>
//             <hr />
//             or
//             <hr />
//           </Break>
//           <SignTitle>Sign In </SignTitle>
//           <NavLink to="/admin/signin">
//             <InputButton type="submit">Sign In as as an Admin</InputButton>
//           </NavLink>
//         </InputPart>
//         <ImagePart>
//           <ImgBoxHold>
//             <ImgBox>
//               <ImgMain src={image} />
//             </ImgBox>
//           </ImgBoxHold>
//         </ImagePart>
//       </Wrapper>
//     </Container>
//   );
// };

// export default OptionSignin;

// const Break = styled.div`
//   display: flex;
//   width: 300px;
//   margin: 30px 0;
//   hr {
//     height: 0.5px;
//     width: 100px;
//     border: none;
//     background-color: gray;
//   }
// `;

// const Container = styled.div`
//   width: 100%;
//   height: 100%;
//   min-height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-family: Montserrat;
//   background-color: ${(props) => props.theme.pageBackground};
// `;
// const Wrapper = styled.div`
//   width: 55%;
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-between;
//   @media (max-width: 800px) {
//     justify-content: center;
//   }
// `;
// const InputPart = styled.div``;
// const ImagePart = styled.div`
//   display: flex;
//   flex-flow: column wrap;
//   align-items: flex-end;
//   @media (max-width: 800px) {
//     display: none;
//   }
// `;
// const IconTop = styled(NavLink)`
//   font-size: 30px;
//   text-decoration: none;
//   color: ${(props) => props.theme.textColor};
// `;
// const SignInputHold = styled.div`
//   display: flex;
//   flex-flow: column wrap;
//   justify-content: center;
//   align-items: center;
// `;
// const SignTitle = styled.div`
//   font-size: 25px;
//   font-weight: 700;
//   color: ${(props) => props.theme.textColor};
// `;
// const SignSubTitle = styled.div`
//   font-size: 12px;
//   color: #77838f;
// `;
// const InputForm = styled.form`
//   display: flex;
//   flex-direction: column;
//   margin-bottom: 40px;
// `;
// const InputDiv = styled.input`
//   height: 45px;
//   width: 280px;
//   margin: 10px 0;
//   border: none;
//   outline: none;
//   border-radius: 5px;
//   padding-left: 10px;
//   font-family: Montserrat;
//   font-weight: 700;
//   font-size: 13px;
//   background-color: #e8effc;
//   ::placeholder {
//     color: #377dff;
//   }
// `;
// const InputButton = styled.button`
//   height: 40px;
//   width: 200px;
//   border: none;
//   outline: none;
//   font-family: Montserrat;
//   font-weight: 700;
//   color: #fff;
//   background-color: #377dff;
//   border-radius: 3px;
//   margin-top: 20px;

//   margin-left: 50px;
//   cursor: pointer;
//   transition: all 350ms;
//   :hover {
//     transform: scale(0.98);
//   }
// `;
// const HasAcc = styled.div`
//   font-size: 12px;
//   font-weight: 500;
//   color: ${(props) => props.theme.textColor};
//   span {
//     color: #377dff;
//     cursor: pointer;
//     font-weight: 700;
//     /* font-size: 15px; */
//   }
// `;

// const ImgBox = styled.div`
//   height: 320px;
//   width: 300px;
//   /* background-color: ${(props) => props.theme.pageBackground}; */
//   background-color: #fff;
//   border-radius: 12px;
//   box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
// `;
// const ImgMain = styled.img`
//   width: 290px;
//   /* margin-top: -65px; */
// `;

// const ImgBoxHold = styled.div`
//   margin-top: 80px;
// `;

import React from "react";
import styled from "styled-components";
import perfect from "../image/perfect.png";
import school from "../image/adds.png";

import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillLinkedin,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import easy from "../image/explorer.png";

const OptionSignup = () => {
  return (
    <Container>
      <Wrapper>
        <Brand>
          {/* <Logo>
						<Bar>One</Bar>
						<LogoTitle wid>One Church Network</LogoTitle>
					</Logo> */}

          <LogoHolder to="/">
            <Logo>
              <img src={easy} alt="" />
            </Logo>
            <LogoTitle>Easy pay</LogoTitle>
          </LogoHolder>

          <Text>track your company's salary disbursment with easy</Text>
          {/* <Brief wid>
            “Woman,” Jesus replied, “believe me, a time is coming when you will
            worship the Father neither on this mountain nor in Jerusalem. John
            4:21
          </Brief> */}
        </Brand>

        <Line />
        <MainCard>
          <LogoTitle1>
            <Brief>Let's Help you Get Started</Brief>
          </LogoTitle1>

          <HolderData bg="#377dff" to="/admin/signup">
            <Content>
              <TextContext>Sign Up as a company </TextContext>
              {/* <TextDetail>
                In the last days the mountain of the LORD’s temple will be
                established as the highest of the mountains... Micah 4:1
              </TextDetail> */}
            </Content>
            <Image src={school} alt="school" />
          </HolderData>

          <HolderData bg="#8c0e0f" to="/user/signup">
            <Content>
              <TextContext>Sign Up as a company's staff</TextContext>
              {/* <TextDetail>
                In the last days the mountain of the LORD’s temple will be
                established as the highest of the mountains... Micah 4:1
              </TextDetail> */}
            </Content>
            <Image src={perfect} alt="perfect" />
          </HolderData>

          <Info>
            <SocialText>
              {/* Don't Have an Account? <Span to="/">Register</Span> */}
            </SocialText>
            <SocialText>{/* <Span to="/">Forgot Pasword?</Span> */}</SocialText>
          </Info>
        </MainCard>
      </Wrapper>
    </Container>
  );
};

export default OptionSignup;

const LogoTitle = styled.div`
  font-weight: 700;
  color: gray;
  width: 100px;
  line-height: 1;
  font-size: 18px;
  color: #377dff;
`;

const Logo = styled.div`
  padding: 18px;
  /* background-color: #377dff; */
  color: white;
  border: 1px solid #377dff;
  border-radius: 50px;
  margin-right: 5px;
  font-weight: 700;
  img {
    width: 100%;
    height: 100%;
  }
`;

const LogoHolder = styled(Link)`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  margin-bottom: 30px;
`;

const TextContext = styled.div`
  font-weight: 700;
  font-size: 23px;
  margin-bottom: 10px;
`;

const TextDetail = styled.div`
  font-size: 11px;
  width: 250px;
`;

const Content = styled.div`
  padding-left: 20px;
  color: white;
  line-height: 1.2;
`;

const Image = styled.img`
  /* width: 40px; */
  height: 230%;
  object-fit: fill;

  @media screen and (max-width: 425px) {
    /* width: 95%; */
    height: 190%;
    object-fit: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: -100px;
  }
`;

const HolderData = styled(Link)<{ bg: string }>`
  text-decoration: none;
  margin: 10px 0;
  width: 100%;
  height: 120px;
  background-color: ${({ bg }) => bg};
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

  transition: all 350ms;

  :hover {
    cursor: pointer;
    transform: scale(0.99);
  }

  @media screen and (max-width: 425px) {
    width: 95%;

    display: flex;
    /* flex-direction: column; */
    align-items: center;
  }
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Icons = styled.div`
  display: flex;
  margin-top: 20px;
`;

const Icon3 = styled(AiFillLinkedin)`
  font-size: 35px;
  color: #0077b7;
  :hover {
    cursor: pointer;
  }
`;

const Icon2 = styled(AiFillTwitterSquare)`
  font-size: 35px;
  color: #50abf1;
  :hover {
    cursor: pointer;
  }
`;

const Icon1 = styled(AiFillFacebook)`
  font-size: 35px;
  color: #475993;
  :hover {
    cursor: pointer;
  }
`;

const SocialText = styled.div`
  font-size: 12px;
  display: flex;
  margin-top: 0px;
`;

const Social = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const MainCard = styled.div`
  width: 600px;
  flex-direction: column;
  display: flex;
  align-items: center;

  @media screen and (max-width: 425px) {
    width: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Line = styled.div`
  height: 400px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  margin: 0 0px;

  @media screen and (max-width: 1010px) {
    display: none;
  }
`;

const Brief = styled.div`
  margin-top: 20px;
  color: gray;
  font-size: 10px;
  text-align: center;

  @media screen and (max-width: 1010px) {
    display: none;
  }
`;

const Text = styled.div`
  font-weight: 700;
  margin-top: 25px;
  text-align: center;
  width: 300px;
  font-size: 25px;
  line-height: 1.1;
  color: #377dff;
  opacity: 0.8;

  @media screen and (max-width: 1010px) {
    margin-top: 5px;
  }
`;

const LogoTitle1 = styled.div`
  font-weight: 700;
  color: gray;
  margin-bottom: 50px;
  color: #377dff;
  font-size: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

// const LogoTitle = styled.div`
// 	font-weight: 500;
// 	color: gray;
// `;

const Bar = styled.div`
  width: 130px;
  height: 100px;
  border-radius: 10px;
  margin-bottom: 15px;
  background-color: #fffbf8;
  box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px,
    rgba(17, 17, 26, 0.1) 0px 0px 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  font-weight: 900;
  color: #377dff;
`;

const Brand = styled.div`
  width: 400px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Wrapper = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1010px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (max-width: 425px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

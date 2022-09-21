import React from 'react';

import styled, { keyframes, ThemeProvider } from 'styled-components';

import { darkTheme } from './Theme';

import LogoComponent from '../reuseables/LogoComponent';

import SocialIcons from '../reuseables/SocialIcons';

import PowerButton from '../reuseables/PowerButton';

import ParticlesComponents from '../reuseables/ParticlesComponents';

import astronaut from '../assets/Images/spaceman.png';

import BigTitle from '../reuseables/BigTitle';

const float = keyframes`
0% {transform: translateY(-10px)}
50% {transform: translateY(15px) translateX(15px)}
100% {transform: translateY(-10px)}
`;

const Spaceman = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 20vw;
  animation: ${float} 4s ease infinite;
  img {
    width: 100%;
    height: auto;
  }
`;

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5s;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);

  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;

  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
`;

const AboutPage = () => {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Box>
          <LogoComponent theme="dark" />
          <SocialIcons theme="dark" />
          <PowerButton />
          <ParticlesComponents theme="dark" />

          <Spaceman>
            <img src={astronaut} alt="profile" />
          </Spaceman>

          <Main>
            I'm a front-end developer located in India. I love to create simple
            yet beautiful websites with great user experience.
            <br /> <br />
            I'm interested in the whole frontend stack Like trying new things
            and building great projects.
            <br /> <br />
            I'm an independent freelancer and blogger. I love to write blogs and
            read books. I believe everything is an Art when you put your
            consciousness in it. You can connect with me via social links.
          </Main>

          <BigTitle text="ABOUT" top="10%" left="5%" />
        </Box>
      </ThemeProvider>
    </>
  );
};

export default AboutPage;

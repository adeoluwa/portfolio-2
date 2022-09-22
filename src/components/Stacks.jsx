import React from 'react';

import styled, { ThemeProvider } from 'styled-components';

import { lightTheme } from './Theme';

import { Develope } from './AllSvgs';

import LogoComponent from '../reuseables/LogoComponent';

import SocialIcons from '../reuseables/SocialIcons';

import PowerButton from '../reuseables/PowerButton';

import ParticlesComponents from '../reuseables/ParticlesComponents';

import BigTitle from '../reuseables/BigTitle';

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  cursor: pointer;

  font-family: 'Ubuntu Mono', monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);

  ${Main}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }

  & > *:first-child {
    margin-right: 1rem;
  }
`;

const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;

  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  ul,
  p {
    margin-left: 2rem;
  }
`;

const Stacks = () => {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <Box>
          <LogoComponent theme="light" />
          <SocialIcons theme="light" />
          <PowerButton />
          <ParticlesComponents theme='light' />
          <Main>
            <Title>
              <Develope width={40} height={40} /> Extra
            </Title>
            <Description>
              I also do backend development from time to time.
            </Description>
            <Description>
              <strong>Languages and stacks</strong>
              <ul>
                <li>Python</li>
                <li>Django</li>
                <li>Javascript</li>
                <li>Node JS</li>
              </ul>
            </Description>
          </Main>
          <Main>
            <Title>
              <Develope width={40} height={40} /> Frontend Development
            </Title>
            <Description>
              I love to bring designs to life, while keeping it clean, minimal
              and simple
            </Description>
            <Description>
              <strong>Skills</strong>
              <p>
                Html, CSS, Js, React,Redux, Styled Components, Sass, Bootstrap,
                Tailwind, Antd, Firebase. etc..
              </p>
            </Description>
            <Description>
              <strong>Version Control</strong>
              <ul>
                <li>Git & Github</li>
              </ul>
            </Description>
          </Main>
          <BigTitle text="Skills" top='83%' left='30%' />
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Stacks;

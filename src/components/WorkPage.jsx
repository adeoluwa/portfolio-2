import React, { useRef, useEffect } from 'react';

import styled, { ThemeProvider } from 'styled-components';

import { darkTheme } from './Theme';

import LogoComponent from '../reuseables/LogoComponent';

import SocialIcons from '../reuseables/SocialIcons';

import PowerButton from '../reuseables/PowerButton';

import { Work } from '../data/WorkData';

import Card from '../reuseables/Card';

import { YinYang } from './AllSvgs';

import BigTitle from '../reuseables/BigTitle';

const Box = styled.div`
  background-color: ${(props) => props.theme.body};

  height: 400vh;
  position: relative;
  display: flex;
  align-items: center;
`;

const Main = styled.ul`
  position: fixed;
  top: 12rem;
  left: calc(10rem + 15vw);
  height: 40vh;
  display: flex;
  color: white;
`;

const Rotate = styled.span`
  display: block;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 80px;
  height: 80px;
  z-index: 1;
`;

const WorkPage = () => {
  const ref = useRef(null);
  const yingyang = useRef(null)

  useEffect(() => {
    let element = ref.current;

    const rotate = () => {
      element.style.transform = `translateX(${-window?.pageYOffset}px)`;

      yingyang.current.style.transform = `rotate(`+ -window?.pageYOffset + 'deg)'
    };

    window.addEventListener('scroll', rotate);

    return () => window.removeEventListener('scroll', rotate);
  }, []);

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Box>
          <LogoComponent theme="dark" />
          <SocialIcons theme="dark" />
          <PowerButton />

          <Main ref={ref}>
            {Work.map((d) => (
              <Card key={d.id} data={d} />
            ))}
          </Main>
          <Rotate ref={yingyang}>
            <YinYang width={80} height={80} fill={darkTheme?.text} />
          </Rotate>

          <BigTitle text='WORK' top='10%' right='20%' />
        </Box>
      </ThemeProvider>
    </>
  );
};

export default WorkPage;

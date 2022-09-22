import React from 'react';

import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

import { Github, Twitter } from '../components/AllSvgs';

import { motion } from 'framer-motion';

import { darkTheme } from '../components/Theme';

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  bottom: 0;
  left: 2rem;

  z-index: 3;

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
`;
const Line = styled(motion.span)`
  width: 2px;
  height: 8rem;
  background-color: ${(props) =>
    props?.color === 'dark' ? darkTheme?.text : darkTheme?.body};
`;

const SocialIcons = (props) => {
  return (
    <Icons>
      <motion.div
        initial={{ transform: 'scale(0)' }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: 'spring', duration: 1, delay: 1.2 }}
      >
        <NavLink
          style={{ color: 'inherit' }}
          target="_blank"
          to={{ pathname: 'https://github.com/adeoluwa' }}
        >
          <Github
            width={25}
            height={25}
            fill={props?.theme === 'dark' ? darkTheme.text : darkTheme.body}
          />
        </NavLink>
      </motion.div>
      <motion.div
        initial={{ transform: 'scale(0)' }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: 'spring', duration: 1, delay: 1.4 }}
      >
        <NavLink
          style={{ color: 'inherit' }}
          target="_blank"
          to={{ pathname: 'https://twitter.com/deeollu' }}
        >
          <Twitter
            width={25}
            height={25}
            fill={props?.theme === 'dark' ? darkTheme.text : darkTheme.body}
          />
        </NavLink>
      </motion.div>

      <Line
        color={props?.theme}
        initial={{
          height: 0,
        }}
        animate={{
          height: '8rem',
        }}
        transition={{
          type: 'spring',
          duration: 1,
          delay: 0.8,
        }}
      />
    </Icons>
  );
};

export default SocialIcons;

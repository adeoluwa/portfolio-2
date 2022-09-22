import React from 'react';

import styled from 'styled-components';

import img from '../assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg';

import LogoComponent from '../reuseables/LogoComponent';

import SocialIcons from '../reuseables/SocialIcons';

import PowerButton from '../reuseables/PowerButton';

import { Blogs } from '../data/BlogData';

import BlogComponent from './BlogComponent';

import { motion } from 'framer-motion';

// import AnchorComponents from '../reuseables/Anchor';

import BigTitle from '../reuseables/BigTitle';

const MainContainer = styled(motion.div)`
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
`;
const Container = styled.div`
  background-color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.8)`};
  width: 100%;
  height: auto;
  position: relative;
  padding-bottom: 5rem;
  
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
  grid-gap: calc(1rem + 2vw);
`;

//* Framer-motion config
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

const BlogPage = () => {
  return (
    <>
      <MainContainer
        variants={container}
        initial="hidden"
        animate="show"
        exit={{
          opacity: 0,
          transition: { duration: 0.5 },
        }}
      >
        <Container>
          <LogoComponent />
          <PowerButton />
          <SocialIcons />
          {/* <AnchorComponents numbers={numbers} /> */}
          <Center>
            <Grid>
              {Blogs.map((blog) => {
                return <BlogComponent key={blog.id} blog={blog} />;
              })}
            </Grid>
          </Center>
          <BigTitle text="Blog" top="5rem" left="5rem" />
        </Container>
      </MainContainer>
    </>
  );
};

export default BlogPage;

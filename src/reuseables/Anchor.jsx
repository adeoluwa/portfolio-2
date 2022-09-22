import React, { useRef, useEffect } from 'react';

import {Anchor, Link } from '../components/AllSvgs';

import styled from 'styled-components';

// import { Anchor } from '../components/AllSvgs';

const Container = styled.div`
  position: relative;
`;

const Slider = styled.div`
  position: fixed;
  top: 0;
  right: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transform: translateY(-100%);

  .chanin {
    transform: rotate(135deg);
  }
`;

const PreDisplay = styled.div`
  position: absolute;
  top: 0;
  right: 2rem;
`;

const AnchorComponent = (props) => {
  const ref = useRef(null);
  const hiddenRef = useRef(null);

  useEffect(() => {

    const handleScroll = ()=>{
      let scrollposition = window.pageYOffset
      let windowSize = window.innerHeight;
      let bodyHeight = document.body.offsetHeight;

      let diff = Math.max(bodyHeight - (scrollposition + windowSize))

      let diffp = (diff * 100) / (bodyHeight - windowSize)

      ref.current.style.transform = `translateY(${-diffp}%)`

      if (window.pageYOffset > 5) {
        hiddenRef.current.style.display = 'none'
      } else {
        hiddenRef.current.style.display = 'block'
      }

       window.addEventListener('scroll', handleScroll)
    }
    

    return () => window.removeEventListener('scroll', handleScroll)
  }, []);

  return (
    <Container>
      <PreDisplay>
        <Anchor width={70} height={70} fill="currentColor" />
      </PreDisplay>
      <Slider ref={ref}>
        {[...Array(props.numbers)].map((x, id) => {
          return (
            <Link
              key={id}
              width={25}
              height={25}
              fill="currentColor"
              className="chain"
            />
          );
        })}
        <Anchor width={70} height={70} fill="currentColor" />
      </Slider>
    </Container>
  );
};

export default AnchorComponent;

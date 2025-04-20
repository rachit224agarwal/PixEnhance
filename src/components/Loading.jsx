import React from 'react';
import styled from 'styled-components';

const Loading = () => {
  return (
    <StyledWrapper className='flex items-center justify-center h-full'>
      <div className="loader" />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .loader {
    width: 64px;
    height: 64px;
    position: relative;
    background: #d7f7fc;
    border-radius: 4px;
    overflow: hidden;
  }

  .loader:before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 40px;
    height: 40px;
    transform: rotate(45deg) translate(30%, 40%);
    background: #193CB8;
    box-shadow: 32px -34px 0 5px #50A2FF;
    animation: slide 2s infinite ease-in-out alternate;
  }

  .loader:after {
    content: "";
    position: absolute;
    left: 10px;
    top: 10px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #50A2FF;
    transform: rotate(0deg);
    transform-origin: 35px 145px;
    animation: rotate 2s infinite ease-in-out;
  }

  @keyframes slide {
    0% , 100% {
      bottom: -35px
    }

    25% , 75% {
      bottom: -2px
    }

    20% , 80% {
      bottom: 2px
    }
  }

  @keyframes rotate {
    0% {
      transform: rotate(-15deg)
    }

    25% , 75% {
      transform: rotate(0deg)
    }

    100% {
      transform: rotate(25deg)
    }
  }`;

export default Loading;

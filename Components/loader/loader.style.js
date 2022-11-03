import styled from 'styled-components'

export const Balls = styled.div`
  display: flex;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);

  .ball {
    animation: oscillate 1s ease-in forwards infinite;
    color: #f29756;
    font-size: 30px;
    font-weight: bold;
    height: 40px;
    margin: 0 5px 0 0;
    width: 65px;
  }

  .one {
    animation-delay: 0.1s;
  }
  .two {
    animation-delay: 0.2s;
  }
  .three {
    animation-delay: 0.3s;
  }

  @keyframes oscillate {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(20px);
    }
    100% {
      transform: translateY(0);
    }
  }
`
export const Screen = styled.div`
  animation: fade 0.4s ease-in forwards;
  background: white;
  display: flex;
  height: 100vh;
  opacity: 0;
  position: relative;
  width: 100%;

  @keyframes fade {
    0% {
      opacity: 0.4;
    }
    50% {
      opacity: 0.8;
    }
    100% {
      opacity: 1;
    }
  }
`
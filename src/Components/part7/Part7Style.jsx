import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: #000;

  .our-work-txt {
    position: absolute;
    width: 60vw;
    height: 0vh;
    z-index: 9;

    h1 {
      &:nth-child(1) {
        position: absolute;
        top: 0;
        left: 35%;
        transform: translate(-20%, -50%);
        color: #fff;
        font-size: 5vw;
      }

      &:nth-child(2) {
        position: absolute;
        bottom: 0;
        right: 35%;
        transform: translate(20%, 50%);
        color: #fff;
        font-size: 5vw;
      }
    }
  }

  .our-work-txt-div {
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60vw;
    height: 0vh;
    background-color: #fff;

    .scroll-work {
      width: 100%;
      height: 60vh;
      background-color: #919191;
      overflow: hidden;

      .scroll-img {
        width: 100%;
        margin-top: 0%;
        transition: all cubic-bezier(0.19, 1, 0.22, 1) 1s;

        img {
          width: 100%;
        }
      }
    }
  }

  #demo {
    position: absolute;
    bottom: -10%;
    padding: 1.5vw 3vw;
    background-color: #d1d1d1;
    font-size: 0.8vw;
    border: none;
    border-radius: 50px;
  }
  .inenergfdcv{
    margin-top: 20px;
    padding-top:20px;
  }
`;

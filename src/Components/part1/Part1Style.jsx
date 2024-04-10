import styled from "styled-components";

export const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #000;
  overflow: hidden;

  .content-part-1 {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;

    .rotate-div {
      display: flex;
      align-items: start;
      justify-content: center;
      gap: 3vw;
      width: 200vw;
      height: 200vh;
      background-color: #000;
      scale: 1;

      .row-div {
        display: flex;
        flex-direction: column;
        gap: 3vh;
        width: calc(200vw / 5);
        height: 100%;

        .img-div {
          width: 100%;
          height: calc(100% / 4);
          border-radius: 10px;
          overflow: hidden;

          img {
            width: 100%;
          }
        }
      }

      .row-div-1 {
        margin-top: 13%;
      }

      .row-div-2 {
        margin-top: 10%;
      }

      .row-div-3 {
        margin-top: 8%;
      }

      .row-div-4 {
        margin-top: 5%;
      }
    }

    .overlay-div {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      width: 100%;
      height: 100vh;
      background-color: #00000000;
      font-size: 5vw;
      border-radius:20px;
     
      h1 {
        opacity: 0;
      }

      .scroll-down {
        position: absolute;
        bottom: 8%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 1vh;
        color: #fff;

        h3 {
          font-size: 0.7vw;
        }

        .scroll-p {
          width: 6vw;
          height: 2px;
          border-radius: 50px;
          background-color: #ffffff55;

          .scrolling {
            width: 0vw;
            height: 2px;
            border-radius: 50px;
            background-color: #fff;
          }
      
        }
      }
    }
  }
`;

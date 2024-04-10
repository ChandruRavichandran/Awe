import styled from "styled-components";

export const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #fff;

  .rounded-div-wrapper {
    /* border: 1px solid red; */
    position: relative;
    width: 100%;
    height: 100px;
    overflow: hidden;
    margin-top: -100px;

    .rounded-div {
      position: absolute;
      left: 50%;
      transform: translate(-50%);
      width: 150%;
      height: 750%;
      border-radius: 50%;
      background-color: #fff;
    }
  }

  .content-2 {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: #fff;
    overflow: hidden;

    .text-area {
      position: absolute;
      opacity: 0.2;
      left: 5%;
      width: 100%;
      font-weight: 800;
    }

    .text-area-hover {
      position: absolute;
      left: 5%;
      opacity: 1;
    }

    .text-area h1,
    .text-area-hover h1 {
      font-size: 7vw;
    }

    .text-area h2,
    .text-area-hover h2 {
      margin-left: 40vw;
      font-size: 7vw;
    }

    .text-area-hover h1 {
      width: 0%;
      text-wrap: nowrap;
      overflow: hidden;
    }

    .text-area-hover h2 {
      width: 0%;
      text-wrap: nowrap;
      overflow: hidden;
    }
  .gifimahe img{
    width:332px;
    height:249px
    height:20%;
    position:absolute;
    right:8vw;
    bottom:10vw;
    
  }
  @media (max-width:700px) {
    .gifimahe{
      padding-left:200px;
    }
    .gifimahe img{
        width:146px;
        height:109px;
   
      }
      .text-area h2,
      .text-area-hover h2 {
        margin-left: 0;
        font-size: 7vw;
      }
  
}

`;

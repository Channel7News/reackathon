import styled from "styled-components";

export const ArticleContainer = styled.div`
  width: 40%;
  height: 300px;
  border: 5px solid black;
  display: flex;
  flex-direction: row;
  margin-bottom: 5px;
  align-self: center;
  margin: 5px;

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 150px;
  }
`;

export const ArticleTitle = styled.h1`
  font-size: 22px;
  margin-top: 5px;
  margin-left: 5px;

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    font-size: 10px;
  }
`;

export const ArticleSource = styled.h2`
  font-size: 20px;
  margin-top: 5px;
  margin-left: 5px;

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    font-size: 10px;
  }
`;

export const ArticleLink = styled.a`
  font-size: 15px;
  margin-top: 5px;
  margin-left: 5px;
  font-weight: 800;

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    font-size: 5px;
  }
`;

export const ArticleDatePublished = styled.h3`
  font-size: 15px;
  margin-top: 5px;
  margin-left: 5px;

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    font-size: 7px;
  }
`;

export const ArticleDescription = styled.p`
  font-size: 15px;
  width: 100%;
  margin-top: 5px;
  margin-left: 5px;

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    font-size: 8px;
  }
`;

export const ArticleLeftSide = styled.div`
  width: 100%;
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
  }
`;

export const ArticleImage = styled.img`
  width: 40%;
  height: 100%;

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    width: 30%;
    height: 30%;
  }
`;

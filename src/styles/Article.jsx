import styled from "styled-components";

export const ArticleContainer = styled.div`
  width: 40%;
  height: 300px;
  border: 5px solid black;
  display: flex;
  flex-direction: row;
  align-self: center;
  margin: 5px;

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    flex-direction: column-reverse;
    width: 100%;
    height: 100%;
  }
`;

export const ArticleTitle = styled.h1`
  font-size: 1.5rem;
  margin: 0.2rem;
  font-weight: 800;
  
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    font-size: 1rem;
  }
`;

export const ArticleLink = styled.a`
  text-decoration: none;
  
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
  }
`;

export const ArticleDatePublished = styled.h3`
  font-size: 0.7rem;
  margin: 0 0.2rem;

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    font-size: 7px;
  }
`;

export const ArticleSource = styled.h2`

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    font-size: 10px;
  }
`;



export const ArticleDescription = styled.p`
  font-size: 15px;
  width: 100%;
  margin-top: 5px;
  margin-left: 5px;

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    font-size: 0.7rem;
  }
`;

export const ArticleLeftSide = styled.div`
  width: 100%;
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {

  }
`;

export const ArticleImage = styled.img`
  position: relative;
  width: 40%;
  height: 100%;

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 80%;
  }
`;

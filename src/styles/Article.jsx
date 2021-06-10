import styled from "styled-components";

export const ArticleContainer = styled.div`
  width: 100%;
  height: 300px;
  border: 5px solid black;
  display: flex;
  flex-direction: row;
  margin-bottom: 5px;
  margin-left: 10px;
`;

export const ArticleTitle = styled.h1`
  font-size: 25px;
  margin-top: 5px;
  margin-left: 5px;
`;

export const ArticleSource = styled.h2`
  font-size: 20px;
  margin-top: 5px;
  margin-left: 5px;
`;

export const ArticleLink = styled.a`
  font-size: 20px;
  margin-top: 5px;
  margin-left: 5px;
`;

export const ArticleDatePublished = styled.h3`
  font-size: 15px;
  margin-top: 5px;
  margin-left: 5px;
`;

export const ArticleDescription = styled.p`
  font-size: 15px;
  width: 100%;
  margin-top: 5px;
  margin-left: 5px;
`;

export const ArticleLeftSide = styled.div`
  width: 100%;
`;

export const ArticleImage = styled.img`
  width: 40%;
  /* height: 98%; */
  border: 5px solid black;
`;

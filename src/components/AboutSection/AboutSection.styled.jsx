import styled from 'styled-components';

export const AboutSectionStyled = styled.section`
  color: white;
  background: #28a745;

  @media screen and (min-width: 1360px) {
    max-height: 460px;
  }
`;

export const Wrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    height: 100%;
  }
`;

export const AboutImage = styled.picture`
  display: flex;
  min-height: 220px;

  & img {
    object-fit: cover;
  }

  @media screen and (min-width: 768px) {
    min-width: 368px;
  }

  @media screen and (min-width: 1360px) {
    object-fit: cover;
    max-width: 50%;
    max-height: 460px;
  }
`;

export const AboutContainer = styled.div`
  max-width: 690px;
  padding: 0 20px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    padding: 0 32px;
  }
  @media screen and (min-width: 1360px) {
    margin-left: 0;
    padding-left: 20px;
    padding-right: 28px;
  }
`;

export const TextWrapper = styled.div`
  padding: 79px 0;

  @media screen and (min-width: 768px) {
    padding: 62px 0;
  }
  @media screen and (min-width: 1360px) {
    padding-top: 80px;
    padding-bottom: 86px;
  }
`;

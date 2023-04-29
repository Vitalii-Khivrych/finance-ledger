import styled from 'styled-components';

// export const Section = styled.section`
//   padding-top: ${p => p.top || '0px'};
//   padding-bottom: ${p => p.bottom || '0px'};
// `;

export const Container = styled.div`
  max-width: 1360px;
  padding: 0 20px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    /* width: 768px; */
    padding: 0 32px;
  }
  @media screen and (min-width: 1360px) {
    /* width: 1360px; */
    padding: 0 28px;
  }
`;

export const HeaderContainer = styled(Container)`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const HiddenTitle = styled.h2`
  position: absolute;
  white-space: nowrap;
  width: 1px;
  height: 1px;
  overflow: hidden;
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  margin: -1px;
`;

//---------- text styles----------

export const PreTitle = styled.p`
  font-size: 16px;
  line-height: calc(22 / 16);

  text-align: ${p => (p.center ? 'center' : 'none')};

  margin-bottom: 16px;

  /* color: ${p => p.color || '#ffffff'}; */

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: calc(25 / 18);
  }
`;

export const Title = styled.h2`
  font-size: 32px;
  line-height: calc(44 / 32);
  font-weight: 400;

  margin-bottom: 24px;

  text-align: ${p => (p.center ? 'center' : 'none')};

  /* color: #ffffff; */

  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: calc(${p => p.lh || '48'} / 40);
  }

  @media screen and (min-width: 1360px) {
    font-size: 40px;
    line-height: calc(48 / 40);
  }
`;

export const Text = styled.p`
  font-size: 16px;
  line-height: calc(22 / 16);

  text-align: ${p => (p.center ? 'center' : 'none')};

  margin-bottom: ${p => p.mb || '24px'};

  /* color: #ffffff; */

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: calc(25 / 18);
  }
`;

export const CasesText = styled(Text)`
  margin-bottom: 31px;

  @media screen and (min-width: 768px) {
    margin-bottom: 30px;
  }
  @media screen and (min-width: 1360px) {
    margin-bottom: 36px;
  }
`;

import { styled } from 'styled-components';
import { device } from '../../helpers/breakpoints';

export const Section = styled.section`
  padding: 40px 30px 40px;

  @media ${device.xs} {
    padding: 40px 20px 40px;
  }

  @media ${device.md} {
    padding: 40px 64px 75px;
  }

  @media ${device.lg} {
    padding: 80px 128px 150px;
  }
`;

export const Wrap = styled('div')({
  maxWidth: '1440px',
  margin: '97px auto 0',
});
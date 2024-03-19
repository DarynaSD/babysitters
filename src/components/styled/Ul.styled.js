import { styled } from 'styled-components';
import { device } from '../../helpers/breakpoints';

export const Ul = styled.ul`
     display: flex;
    flex-direction: column;
    gap: 24px;

  @media ${device.md} {
    gap: 32px;
  }

`;

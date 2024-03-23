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

export const InputWrapper = styled.div`
position: relative;
width: 438px;
height: 52px;
`

export const InputElem = styled.input`
height: 100%;
width: 100%;

padding: 16px 18px;
border: 1px solid rgba(17, 16, 28, 0.1);
border-radius: 12px;
background-color: rgba(251, 251, 251, 1);
`

export const EyeButton = styled.button`

position: absolute;
top: 16px;
right: 18px;

border: none;
margin: none;
background-color: transparent;

display: flex;
align-items: center;
justify-content: center;
`

export const SvgEye = styled.svg`
width: 18px;
height: 18px;

display: flex;
align-items: center;
justify-content: center;
`
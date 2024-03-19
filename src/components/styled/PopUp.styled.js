import styled from "styled-components";
import { colors } from '../../helpers/colors';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(75, 74, 74, 0.8);
  z-index: 100;
`

export const PopUpWindow = styled.div`
position: relative;
display: flex;
align-items: center;
justify-content: center;
width: 380px;
max-width: 90vw;
height: 160px;
margin: auto;
padding: 25px;
background: #FCFCFC;
border-radius: 10px;

transition: stroke 250ms linear, rotate 200ms linear;
`;

export const SvgClose = styled.svg`
  position: absolute;
  top: 6px;
  right: 6px;
  width: 44px;
  height: 44px;
  padding: 10px;
  stroke: ${colors.secondaryDark};

  cursor: pointer;
  transition: stroke 250ms linear;

  &:is(:hover, :focus) {
    stroke: ${colors.price};
  }
`

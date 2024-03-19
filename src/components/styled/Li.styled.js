import { styled } from 'styled-components';
import { device } from '../../helpers/breakpoints';
import { colors } from '../../helpers/colors';

export const Card = styled.li`
    display: flex;
	gap: 18px;
	padding: 24px;
	background-color: ${colors.primaryLight};
	border-radius: 24px;
	position: relative;

  @media ${device.md} {
    gap: 24px;
  }
`;

export const TechWrapper = styled.div`
	display: flex;
	gap: 48px;
	align-items: center;
	position: absolute;
	right: 24px;
`

export const TechList = styled.ul`
	display: flex;
	gap: 32px;
`

export const TechItem = styled.li`
	position: relative;
	display: flex;
	gap: 4px;
`

export const SvgPin = styled.svg`
display: block;
	width: 16px;
	height: 16px;
`

export const SvgStar = styled.svg`
display: block;
	width: 16px;
	height: 16px;
	fill: ${colors.star};
`

export const SpanPrice = styled.span`
color: ${colors.price};
`

export const ImgWrapper = styled.div`
	position: relative;
	width: 120px;
	height: 120px;
	border: 2px solid ${colors.secondaryAccent};
	border-radius: 30px;
	padding: 12px;
	flex-shrink: 0;
`

export const HeartButton = styled.svg`
   display: block;
	width: 26px;
	height: 26px;
	cursor: pointer;
	transition: stroke 150ms linear, fill 150ms linear;
`

export const Online = styled.div`
  position: absolute;
	top: 9px;
	right: 11px;
	display: block;
	width: 14px;
	height: 14px;
	background-color: ${colors.price};
	border-radius: 50%;
	border: 2px solid ${colors.primaryLight};
`

export const Avatar = styled.img`
border-radius: 15px;
`
export const NameWrapper = styled.div`
margin-bottom: 24px;
`

export const InfoWrapper = styled.ul`
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
	margin-bottom: 24px;
`

export const InfoItem = styled.li`
background-color: ${colors.back};
	border-radius: 24px;
	padding: 8px 16px;
`

export const Underline = styled.span`
text-decoration: underline;
`
export const MoreButton = styled.button`
	margin-top: 14px;
	text-decoration: underline;
	font-size: 16px;
	line-height: 1.5;
	font-weight: 500;
	background-color: transparent;
	border: none;
	cursor: pointer;
`

export const Reviews = styled.div`
margin-top: 48px;
`
export const ReviewsList = styled.ul`
display: flex;
	flex-direction: column;
	gap: 25px;
	margin-bottom: 48px
`

export const RevWrap = styled.div`
	display: flex;
	gap: 8px;
	font-weight: 500;
	font-size: 14px;
	line-height: 1.28;
`

export const NameLogo = styled.div`
	font-size: 20px;
	font-weight: 500;
	width: 44px;
	height: 44px;
	color: ${colors.accent};
	background-color: ${colors.accentLight};
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
`

export const RevName = styled.p`
	font-size: 16px;
	line-height: 1.5;
	font-weight: 500;
	margin-bottom: 4px;
`

export const RaitingWrap = styled.p`
	display: flex;
	gap: 8px;
	font-weight: 500;
	font-size: 14px;
	line-height: 1.28;
`

export const Raiting = styled.span`
 line-height: 1.28; 
`

export const Button = styled.button`
 font-weight: 500;
	font-size: 16px;
	line-height: 1.25;
	padding: 14px 28px;
	color: ${colors.primaryLight};
	background-color: ${colors.accent};
	border-radius: 30px;
	border: none;
	cursor: pointer;
	transition: background-color 150ms linear;
    
    &:hover {
    background-color: ${colors.accentHover};
    }
`
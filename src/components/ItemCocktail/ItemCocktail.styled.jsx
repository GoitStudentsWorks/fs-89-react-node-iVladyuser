import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LiForItem = styled.li`
width: 100%;
max-height: 392px;
transition: border-bottom 700ms linear;
border-bottom: 1px solid ${({ theme }) => theme.bodyBgc};

&:hover,
&:focus,
&:active {
  border-bottom: 1px solid ${({ theme }) => theme.button.buttonBg};
}

@media screen and (min-width: 375px) {
  width: 335px;
}

@media screen and (min-width: 768px) {
  width: 342px;
  max-height: 398px;
}
@media screen and (min-width: 1440px) {
  width: 400px;
  max-height: 438px;
}
`;
export const DrinkPicture = styled.img`
width: 100%;
height: 360px;
border-radius: 8px;

@media screen and (min-width: 768px) {
  width: 342px;
}
@media screen and (min-width: 1440px) {
  width: 400px;
  height: 400px;
}
`;
export const WraperForNameAndLink = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 14px;
`;

export const DrinkName = styled.h3`
font-size: 16px;
font-weight: 500;
line-height: 1.12;
color: ${({ theme }) => theme.button.buttonBg};

@media screen and (min-width: 768px) {
  font-size: 18px;
  line-height: 1.33;
}
`;

export const DetailDrinkLink = styled(Link)`
font-family: 'Manrope', sans-serif;
font-size: 14px;
font-weight: 500;
line-height: 1.29;
color: ${({ theme }) => theme.fieldColor};
transition: color 250ms linear;

&:hover,
&:focus,
&:active {
  color: ${({ theme }) => theme.button.buttonBg};
}

@media screen and (min-width: 768px) {
  font-size: 16px;
  line-height: 1.12;
}
`;



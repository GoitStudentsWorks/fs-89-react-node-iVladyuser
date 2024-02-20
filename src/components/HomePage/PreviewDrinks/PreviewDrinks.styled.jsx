import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const SectionContainer = styled.section`
  padding-bottom: 80px;

  @media screen and (min-width: 768px) {
    padding-bottom: 140px;
  }
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 40px;

  @media screen and (min-width: 768px) {
    row-gap: 80px;
  }
`;

export const DrinkCategoryTitle = styled.h2`
  font-weight: 600;
  color: #F3F3F3;
  font-size: 28px;
  line-height: 1.14;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 1.1;
  }
`;

export const CategoryDrinksLIST = styled.ul`
  display: flex;

  align-content: center;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    column-gap: 20px;
  }
`;

// Item 
export const CategoryDrinksItem = styled.li`
  width: 100%;
`;

export const CategoryDrinksIMG = styled.img`

  width: 100%;
  height: 360px;
  border-radius: 8px;
  object-fit: ${({ placeholder }) =>
    placeholder === 'true' ? 'contain' : 'cover'};
  background-color: #161f37;
  padding: ${({ placeholder }) => (placeholder === 'true' ? '28px' : 0)};

  @media screen and (min-width: 1440px) {
    height: 400px;
  }
`;

export const CategoryDrinksTEXTDIV = styled.div`
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
`;

export const CategoryDrinksP = styled.p`
  font-family: Manrope;
  color: #F3F3F3;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.12;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const CategoryDrinksLink = styled(NavLink)`
  font-weight: 500;
  line-height: 18px;
  white-space: nowrap;

  color: #F3F3F380;
  transition: color 300ms cubic-bezier(0.46, 0.03, 0.52, 0.96);

  &:hover,
  &:focus {
    color: F3F3F3;
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const CategoryDrinkToDrink = styled(NavLink)`
  display: block;
  width: 185px;
  margin: 0 auto;
  margin-top: 60px;
  padding: 15px 41px;
  text-align: center;
  background:#F3F3F3 ;
  color: #161F37;
  border: 1px solid transparent;
  border-radius: 42px;
  font-weight: 500;
  line-height: 1.285;
  transition:
    color: 300ms cubic-bezier(0.46, 0.03, 0.52, 0.96),
    background-color:300ms cubic-bezier(0.46, 0.03, 0.52, 0.96),
    border-color: 300ms cubic-bezier(0.46, 0.03, 0.52, 0.96);
    ;

  &:hover,
  &:focus {
    color: F3F3F3;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    padding: 16px 40px;
    margin: 80px auto 0px;
  }
`;

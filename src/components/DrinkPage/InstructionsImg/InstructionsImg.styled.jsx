import styled from 'styled-components';

export const RecipeImg = styled.img`
  width: 335px;
  height: 400px;
  object-fit: contain;
  object-position: center;

  @media (min-width: 768px) {
    width: 704px;
    height: 430px;
  }

  @media (min-width: 1440px) {
    width: 631px;
    height: 480px;
  }
`;

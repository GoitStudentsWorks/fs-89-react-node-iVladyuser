import { styled } from 'styled-components';

export const RecipePreparationWrapper = styled.div`
  margin-top: 80px;
  margin-bottom: 20px;
`;

export const RecipeTextarea = styled.textarea`
  margin-top: 40px;
  width: 480px;
  height: 184px;
  padding: 14px 24px;
  box-sizing: border-box;
  outline: 1px solid rgba(10, 10, 17, 0.5);
  border-radius: 20px;
  background-color: transparent;
  font-size: 16px;
  resize: none;

  font-family: 'Manrope', sans-serif;
  font-size: 17px;
  line-height: 26.52px;
  color: rgba(243, 243, 243, 1);

  ::placeholder {
    color: rgba(243, 243, 243, 0.5);
  }
`;

export const ErrorText = styled.div`
  margin-top: 4px;
  padding-left: 8px;

  display: block;

  font-size: 12px;
  font-weight: 400;
  line-height: calc(14 / 12);
  color: #da1414;
  text-align: left;
`;

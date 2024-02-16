import { useDrink } from '../../redux/hooks/useDrink';
import { ItemDrink } from './ItemDrink';
import Loader from 'components/Loader/Loader';

import {
  CategoryDrinksLIST,
  DrinkCategoryTitle,
  CategoryDrinksDiv,
  CategoryDrinkToDrink,
  MainWrapper,
  SectionContainer,
} from './PreviewDrinks.styled';

import { Container } from 'styles/GlobalStyle';
import { useResize } from 'redux/hooks/useDrink';

export const PreviewDrinks = () => {
  const { mainPageDrinks, isLoading } = useDrink();

  const { width } = useResize();

  const drinksToRender = width < 768 ? 1 : width < 1440 ? 2 : 3;

  const drinksCategory = Object.keys(mainPageDrinks).slice(0, 4);

  return (
    <>
      <SectionContainer>
        <Container>
          <MainWrapper>
            {isLoading ? (
              <Loader />
            ) : (
              drinksCategory.length > 0 &&
              drinksCategory.map((category, idx) => (
                <CategoryDrinksDiv key={idx}>
                  <DrinkCategoryTitle>{category} </DrinkCategoryTitle>
                  <CategoryDrinksLIST>
                    {mainPageDrinks[category]
                      .slice(0, drinksToRender)
                      .map((item) => (
                        <ItemDrink key={item._id} item={item} />
                      ))}
                  </CategoryDrinksLIST>
                </CategoryDrinksDiv>
              ))
            )}
          </MainWrapper>

          {!isLoading && (
            <CategoryDrinkToDrink to={`/drinks`}>
              Other drinks
            </CategoryDrinkToDrink>
          )}
        </Container>
      </SectionContainer>
    </>
  );
};

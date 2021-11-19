import CityList from './city-list';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import { makeFakeCity } from '../../utils/mocks';

const history = createMemoryHistory();
const fakeCityList = new Array(5).fill(null).map(() => makeFakeCity());

describe('Component: CityList', () => {
  it('should render correctly', () => {
    render(
      <Router history={history}>
        <CityList
          cityList={fakeCityList}
          selectedCity={'Amsterdam'}
          setSelectedCity={jest.fn()}
        />
      </Router>,
    );
    expect(document.querySelectorAll('.locations__item').length).toBe(fakeCityList.length);
  });
});

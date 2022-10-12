import * as React from 'react';
import {cleanup, render, screen, waitFor} from '@testing-library/react-native';
import {CaseStudy} from 'api/models/case-study';
import axios from 'axios';
import {getCaseStudies} from 'api/case-studies';
import configureStore from 'redux-mock-store';
import {setCaseStudies} from 'redux/reducers/case-studies';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from 'navigation/RootNavigation';
import {QueryClientProvider, QueryClient, useQuery} from 'react-query';

// import {NavigationContainer} from '@react-navigation/native';
// import {render, waitFor} from '@testing-library/react-native';
// import Navigator from 'navigation/RootNavigation';

jest.mock('axios');

const middlewares: any = [];
const mockStore = configureStore(middlewares);

afterEach(cleanup);

let caseStudy: CaseStudy;

beforeEach(async () => {
  caseStudy = {
    id: '1',
    title: 'Test Case Study',
    sections: [],
  };
});

describe('Basic unit tests', () => {
  // mock test - mocking axios
  it('Shoud fetch the case studies', () => {
    const caseStudies = [caseStudy];

    const mockRes = {
      data: {
        case_studies: caseStudies,
      },
    };

    // axios.get.mockResolvedValue(mockRes);
    axios.get.mockImplementation(() => Promise.resolve(mockRes));

    return getCaseStudies().then(res => expect(res).toEqual(caseStudies));
  });

  it('should dispatch action', () => {
    // Initialize mockstore with empty state
    const initialState = {
      caseStudies: [] as CaseStudy[],
    };

    const store = mockStore(initialState);

    // Dispatch the action
    store.dispatch(setCaseStudies([caseStudy]));

    // Test if your store dispatched the expected actions
    const actions = store.getActions();
    const expectedPayload = {
      payload: [caseStudy],
      type: 'case-studies/setCaseStudies',
    };
    expect(actions).toMatchSnapshot();
    expect(actions).toEqual([expectedPayload]);
  });

  // test('page contains the header and 10 items', async () => {
  //   // Initialize mockstore with empty state
  //   const initialState = {
  //     caseStudies: [caseStudy] as CaseStudy[],
  //   };
  //   const store = mockStore(initialState);
  //   store.dispatch(setCaseStudies([caseStudy]))

  //   const queryClient = new QueryClient();

  //   const component = (
  //     <QueryClientProvider client={queryClient}>
  //       <Provider store={store}>
  //         <NavigationContainer>
  //           <Navigation />
  //         </NavigationContainer>
  //       </Provider>
  //     </QueryClientProvider>
  //   );

  //   store.getActions

  //   render(component);

  //   const header = await screen.findByTestId('CaseStudiesScreen');
  //   const result = await waitFor(() =>
  //     screen.queryAllByTestId('CaseStudiesCard'),
  //   );

  //   expect(header).toBeTruthy();
  //   expect(result.length).toBe(0);
  // });
});

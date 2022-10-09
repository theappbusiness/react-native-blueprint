import {cleanup} from '@testing-library/react-native';
import {CaseStudy} from 'api/models/case-study';
import axios from 'axios';
import {getCaseStudies} from 'api/case-studies';
import configureStore from 'redux-mock-store';
import {setCaseStudies} from 'redux/reducers/case-studies';

// import {NavigationContainer} from '@react-navigation/native';
// import {render, waitFor} from '@testing-library/react-native';
// import Navigator from 'navigation/RootNavigation';

jest.mock('axios');

const middlewares: any = [];
const mockStore = configureStore(middlewares);
// const addTodo = () => ({type: 'ADD_TODO'});

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
});

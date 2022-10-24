import * as React from 'react';
import {render, cleanup} from '@testing-library/react-native';
import CaseStudyScreen from 'screens/case-study-list/CaseStudyScreen';
import {CaseStudy} from 'components/case-study-list/case-study';
import CaseStudyDetails from 'screens/case-study-details/CaseStudyDetails';

afterEach(cleanup);

let caseStudy: CaseStudy;
let props: any;

beforeEach(async () => {
  caseStudy = {
    id: '1',
    title: 'Test Case Study',
    sections: [
      {
        title: 'Test Section',
        body_elements: ['Test Body Element'],
      },
    ],
  };
  props = createTestProps({});
});

const createTestProps = (mockProps: Object) => ({
  navigation: {
    navigate: jest.fn(),
    setOptions: jest.fn(),
  },
  route: {
    params: {
      data: caseStudy,
    },
  },
  ...mockProps,
});

jest.mock('@react-native-async-storage/async-storage', () => ({
  setItem: jest.fn(),
  getItem: jest.fn(),
  removeItem: jest.fn(),
}));

// mocking react query for CaseStudyScreen
jest.mock('react-query', () => {
  const item = {
    id: '1',
    title: 'Test Case Study',
    sections: [],
  };

  return {
    useQuery: jest.fn().mockReturnValue({
      data: [item, item, item],
      isLoading: false,
    }),
  };
});

describe('Integration tests', () => {
  it('Renders the list with data', async () => {
    const {getByTestId, getAllByTestId} = render(
      <CaseStudyScreen {...props} />,
    );
    expect(getByTestId('CaseStudyList')).toBeDefined();
    expect(getAllByTestId('CaseStudyCard').length).toBe(3);
  });

  it('Renders the details with the provided sections', async () => {
    const {getByText, getAllByTestId} = render(<CaseStudyDetails {...props} />);
    expect(getByText(caseStudy.title)).toBeDefined();
    expect(getAllByTestId('CaseStudySection').length).toBe(1);
  });

  // it('navigation', async () => {
  //   const {getByTestId, getByText, getAllByTestId} = render(
  //     <NavigationContainer>
  //       <Navigation />
  //     </NavigationContainer>
  //   );
  //   expect(getByTestId('CaseStudyList')).toBeDefined();
  //   // expect(getByText(NO_CONTENT_ERR)).toBeDefined();
  //   expect(getAllByTestId('CaseStudyCard').length).toBe(3);

  //   fireEvent.press(getAllByTestId('CaseStudyCard')[1]);
  //   expect(getByTestId('CaseStudyDetails')).toBeDefined();
  // });
});

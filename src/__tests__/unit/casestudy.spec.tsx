import * as React from 'react';
import renderer from 'react-test-renderer';
import {render, cleanup, fireEvent} from '@testing-library/react-native';
import {CaseStudy} from 'api/models/case-study';
import CaseStudyCard from 'components/case-study-card/CaseStudyCard';
import {Text} from 'react-native';

// import {NavigationContainer} from '@react-navigation/native';
// import {render, waitFor} from '@testing-library/react-native';
// import Navigator from 'navigation/RootNavigation';

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
  it('Renders CaseStudyCard snapshot as expected', () => {
    const tree = renderer.create(<CaseStudyCard item={caseStudy} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // probably not required after snapshot testing passed. Still keeping it for reference
  it("CaseStudyCard's title is bold", () => {
    const rendererInstance = renderer.create(
      <CaseStudyCard item={caseStudy} />,
    );

    const root = rendererInstance.root;
    const title = root.findAllByType(Text)[0];

    const boldStyle = {
      fontWeight: 'bold',
    };
    expect(title.props.style).toMatchObject(boldStyle);
  });

  it('given a CaseStudyCard, user can click on it to invoke onPress', () => {
    const mockFn = jest.fn();

    const {getByTestId} = render(
      <CaseStudyCard item={caseStudy} onPress={mockFn} />,
    );

    fireEvent.press(getByTestId('CaseStudyCard'));
    expect(mockFn).toBeCalled();
  });

  // it('renders the correct screen', async () => {
  //   const {getByTestId} = render(
  //     <NavigationContainer>
  //       <Navigator />
  //     </NavigationContainer>,
  //   );
  //   await waitFor(() => getByTestId('CaseStudiesScreen'));
  // });
});

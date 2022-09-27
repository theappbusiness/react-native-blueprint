import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {render, waitFor} from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import {cleanup} from '@testing-library/react-native';

import Navigator from 'navigation/RootNavigation';
import CaseStudyScreen from 'screens/case-study-list/CaseStudyScreen';
import CaseStudyCard from 'components/case-study-card/CaseStudyCard';
import {Text} from 'react-native';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
jest.mock('axios');

afterEach(cleanup);

describe('Basic unit tests', () => {
  it('renders the correct screen', async () => {
    const {getByTestId} = render(
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>,
    );
    await waitFor(() => getByTestId('CaseStudiesScreen'));
  });

  it('Renders snapshot as expected', () => {
    const tree = renderer.create(<CaseStudyScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Case study title is bold', () => {
    const caseStudy: any = {
      id: '1',
      title: 'title',
    };

    const rendererInstance = renderer.create(
      <CaseStudyCard item={caseStudy} />,
    );

    const root = rendererInstance.root;
    const title = root.findByType(Text);

    const boldStyle = {
      fontWeight: 'bold',
    };
    expect(title.props.style).toMatchObject(boldStyle);
  });
});

import * as React from 'react';
import renderer from 'react-test-renderer';
import {render, cleanup, fireEvent} from '@testing-library/react-native';
import {CaseStudy} from 'components/case-study-list/case-study';
import CaseStudyCard from './CaseStudyCard';

afterEach(cleanup);

let caseStudy: CaseStudy;
let mockFn: jest.Mock;

beforeEach(async () => {
  caseStudy = {
    id: '1',
    title: 'Test Case Study',
    teaser: 'teaser',
    sections: [],
  };

  mockFn = jest.fn();
});

describe('CaseStudyCard unit tests', () => {
  it('Renders CaseStudyCard snapshot as expected', () => {
    const component = (
      <CaseStudyCard title={caseStudy.title} teaser={caseStudy.teaser} />
    );

    const componentRendered = renderer.create(component).toJSON();
    expect(componentRendered).toMatchSnapshot();

    const {getByText} = render(component);
    expect(getByText('Test Case Study')).toBeDefined();
    expect(getByText('teaser')).toBeDefined();
  });

  it('given a CaseStudyCard, user can click on it to invoke onPress', () => {
    const {getByTestId} = render(
      <CaseStudyCard title={caseStudy.title} onPress={mockFn} />,
    );
    fireEvent.press(getByTestId('CaseStudyCard'));
    expect(mockFn).toBeCalledTimes(1);
  });
});

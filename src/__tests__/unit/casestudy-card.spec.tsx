import * as React from 'react';
import renderer from 'react-test-renderer';
import {render, cleanup, fireEvent} from '@testing-library/react-native';
import {CaseStudy} from 'api/models/case-study';
import CaseStudyCard from 'components/case-study-card/CaseStudyCard';

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
    const component = renderer
      .create(
        <CaseStudyCard title={caseStudy.title} teaser={caseStudy.teaser} />,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('given a CaseStudyCard, user can click on it to invoke onPress', () => {
    const {getByTestId} = render(
      <CaseStudyCard title={caseStudy.title} onPress={mockFn} />,
    );
    fireEvent.press(getByTestId('CaseStudyCard'));
    expect(mockFn).toBeCalledTimes(1);
  });
});

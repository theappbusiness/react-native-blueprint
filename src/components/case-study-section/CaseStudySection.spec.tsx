import * as React from 'react';
import {render, cleanup} from '@testing-library/react-native';
import {Section} from './section';
import CaseStudySection from './CaseStudySection';

afterEach(cleanup);

let section: Section;

beforeEach(async () => {
  section = {
    title: 'Test Section',
    body_elements: [
      'String element',
      'Another string element',
      {
        image_url: 'any_url',
      },
    ],
  };
});

describe('CaseStudySection unit tests', () => {
  it('Renders the correct type of body elements of a CaseStudySection', () => {
    const {queryAllByTestId} = render(<CaseStudySection item={section} />);

    expect(queryAllByTestId('TextBodyElement').length).toBe(2);
    expect(queryAllByTestId('ImageBodyElement').length).toBe(1);
  });
});

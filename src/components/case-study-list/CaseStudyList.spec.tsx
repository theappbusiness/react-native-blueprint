import * as React from 'react';
import {render, cleanup, fireEvent} from '@testing-library/react-native';
import {CaseStudy} from './case-study';
import CaseStudyList from './CaseStudyList';
import {NO_CONTENT_ERR} from 'utils/constants';

afterEach(cleanup);

let caseStudy: CaseStudy;
let caseStudies: CaseStudy[];
let mockFn: jest.Mock;

beforeEach(async () => {
  caseStudy = {
    id: '1',
    title: 'Test Case Study',
    sections: [],
  };

  caseStudies = [caseStudy, caseStudy];

  mockFn = jest.fn();
});

describe('CaseStudyList unit tests', () => {
  it('Renders a message when no items are provided to the CaseStudyList', () => {
    const {getByText} = render(
      <CaseStudyList onItemPress={mockFn} items={[]} />,
    );
    expect(getByText(NO_CONTENT_ERR)).toBeTruthy();
  });

  it('Renders all the items provided to the CaseStudyList', () => {
    const {getByTestId, getAllByTestId} = render(
      <CaseStudyList onItemPress={mockFn} items={caseStudies} />,
    );
    expect(getByTestId('CaseStudyList')).toBeTruthy();
    expect(getAllByTestId('CaseStudyCard').length).toBe(2);
  });

  it('given a CaseStudyList, user can click on any item to invoke onPress', () => {
    const {getAllByTestId} = render(
      <CaseStudyList onItemPress={mockFn} items={caseStudies} />,
    );
    fireEvent.press(getAllByTestId('CaseStudyCard')[1]);
    expect(mockFn).toBeCalledTimes(1);
  });

  it('given a CaseStudyList, user can pull-to-refresh to invoke onRefresh', async () => {
    const {getByTestId} = render(
      <CaseStudyList onRefresh={mockFn} items={caseStudies} />,
    );

    const list = getByTestId('CaseStudyList');
    expect(list).toBeDefined();

    const {refreshControl} = list.props;
    refreshControl.props.onRefresh();

    expect(mockFn).toBeCalledTimes(1);
  });
});

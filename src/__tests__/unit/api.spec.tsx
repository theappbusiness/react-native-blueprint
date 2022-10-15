import {cleanup} from '@testing-library/react-native';
import {CaseStudy} from 'api/models/case-study';
import axios from 'axios';
import {getCaseStudies} from 'api/case-studies';

jest.mock('axios');

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
});

import {cleanup} from '@testing-library/react-native';
import {CaseStudy} from 'components/case-study-list/case-study';
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
  it('Shoud fetch the case studies', async () => {
    const caseStudies = [caseStudy];

    const mockRes = {
      data: {
        case_studies: caseStudies,
      },
    };

    // axios.get.mockResolvedValue(mockRes);

    //@ts-ignore
    axios.get.mockImplementation(() => Promise.resolve(mockRes));

    const res = await getCaseStudies();
    return expect(res).toEqual(caseStudies);
  });
});

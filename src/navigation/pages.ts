import {CaseStudy} from 'components/case-study-list/case-study';

export enum pages {
  CASE_STUDIES = 'case-studies',
  CASE_STUDY_DETAILS = 'case-study-details',
}

export type ParamList = {
  [pages.CASE_STUDIES]: undefined;
  [pages.CASE_STUDY_DETAILS]: {data: CaseStudy};
};

import {CaseStudy} from 'components/case-study-list/case-study';
import {StateCreator} from 'zustand';

export interface CaseStudyState {
  caseStudies: CaseStudy[];
  setCaseStudies: (caseStudies: CaseStudy[]) => void;
}

export const createCaseStudySlice: StateCreator<CaseStudyState> = (
  set: any,
) => ({
  caseStudies: [],
  setCaseStudies: (caseStudies: CaseStudy[]) =>
    set(() => ({caseStudies: caseStudies})),
});

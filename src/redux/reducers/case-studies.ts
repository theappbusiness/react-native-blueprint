import {createSlice} from '@reduxjs/toolkit';
import {CaseStudy} from 'api/models/case-study';

const caseStudySlice = createSlice({
  name: 'case-studies',
  initialState: {
    caseStudies: [] as CaseStudy[],
  },
  reducers: {
    setCaseStudies(state, action) {
      state.caseStudies = action.payload;
    },
  },
});

export const {setCaseStudies} = caseStudySlice.actions;
export default caseStudySlice.reducer;

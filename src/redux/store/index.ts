import {configureStore} from '@reduxjs/toolkit';
import caseStudies from 'redux/reducers/case-studies';

export const store = configureStore({
  reducer: {
    caseStudies: caseStudies,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import create from 'zustand';
import {persist} from 'zustand/middleware';
import {CaseStudyState, createCaseStudySlice} from './slices/case-studies';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useStore = create<CaseStudyState>()(
  persist(
    (...a) => ({
      ...createCaseStudySlice(...a),
    }),
    {
      name: 'storage',
      getStorage: () => AsyncStorage,
    },
  ),
);

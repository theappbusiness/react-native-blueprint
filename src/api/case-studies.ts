import { get } from './api.service';
import { QUERY } from './query';

export const getCaseStudies = async () => {
  const res = await get<any>(QUERY.CASE_STUDIES);
  return res.data?.case_studies || [];
};
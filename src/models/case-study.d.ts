import {Section} from './section';

export interface CaseStudy {
  id: string;
  title: string;
  teaser: string;
  client: string;
  vertical: string;
  hero_image: string;
  sections: Section[];
}

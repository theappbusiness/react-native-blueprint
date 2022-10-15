export interface BodyElement {
  image_url: string;
}

export interface Section {
  title: string;
  body_elements: (string | BodyElement)[];
}

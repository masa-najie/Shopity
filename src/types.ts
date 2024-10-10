// ads
export interface AdBannerProps {
  id?: number;
  imgSrc: string;
  header?: string;
  description?: string;
  button?: { name: string; link: string };
}
// backend responses
export interface ApiResponse<T> {
  data: T;
  status: boolean;
  message: string;
  code: number;
  paginate: any;
}
export interface Error<T> {
  data: string;
  status: boolean;
  message: {
    errors: T;
    text: string;
  };
  code: number;
  paginate: any;
}

export interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  image: Image[];
}

export interface Image {
  id: number;
  model_id: string;
  model_type: string;
  file_name: string;
  file_type: string;
  file_url: string;
  size: string;
  collection: string;
}
export interface AuthData {
  user: User;
  token: string;
  refresh_token: string;
}

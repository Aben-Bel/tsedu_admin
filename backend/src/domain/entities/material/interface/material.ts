export interface Material {
  id?: string;
  language:string;
  title: string;
  description: string;
  category: string;
  type: string;
  thumbnail?: File;
  book?: File;
  audio?: File;
  video?: File;
  videoLink?: string;
}

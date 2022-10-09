export interface Post {
  id: string;
  title: string;
  body?: string;
}

export interface Comment {
  id: string;
  name: string;
  email?: string;
  body: string;
}

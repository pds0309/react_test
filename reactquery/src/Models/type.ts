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

export interface People {
  name: string;
  hairColor: string;
  eyeColor: string;
}

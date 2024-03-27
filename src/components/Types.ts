export type Project = {
  id: number;
  title: string;
  mainImageUrl: string;
  contents: Content[];
  imageUrls: Url[];
  createdAt: string;
  updatedAt: string;
};

type Content = {
  id: number;
  paragraph: string;
};

type Url = {
  id: number;
  url: string;
};

export type User = {
  id: number;
  email: string;
  username: string;
  role: Role;
  name: string;
  password: string;
};

export enum Role {
  admin,
  user,
}

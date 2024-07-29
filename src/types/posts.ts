export interface IBlogModule {
  default: React.ComponentType;
  post: IPost;
}

export interface IPost {
  title: string;
  description: string;
  author: string;
  date: string;
}

export interface IPostWithSlug extends IPost {
  slug: string;
}

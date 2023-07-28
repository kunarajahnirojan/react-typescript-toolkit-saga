/* eslint-disable @typescript-eslint/no-explicit-any */
import { apiURL } from 'config';
import { Post } from './types';
import axios from 'axios';

const POSTS_BASE_URL = `${apiURL}/posts`;

export const createPost = (post: Post): Promise<Post> =>
  axios.post(POSTS_BASE_URL, post);

/* eslint-disable prettier/prettier */
import * as baseService from './baseService';

const API_KEY = 'eccc5ea1919b90fc7004f8df41e8beed';

export const getNowPlaying = (page: any) =>
  baseService.doGet(
    `movie/now_playing?api_key=${API_KEY}&language=en-US&page=${page}`,
  );

export const getTopMovie = () =>
  baseService.doGet(
    `movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  );
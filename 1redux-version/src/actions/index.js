import { INCREMENT, TEN_INCREMENT, _TEN_INCREMENT } from "./types";

export const increment = () => ({
  type: INCREMENT,
  payload: {}
});

export const ten_increment = () => ({
  type: TEN_INCREMENT,
  payload: {}
});

export const _ten_increment = () => ({
  type: _TEN_INCREMENT,
  payload: {}
});

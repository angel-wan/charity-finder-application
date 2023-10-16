import { Charity } from "../type";

export const selectCharities = (state: { charities: Charity[] }) =>
  state.charities;

export const selectFavourite = (state: { favourite: string[] }) =>
  state.favourite;

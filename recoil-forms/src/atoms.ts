import { atom } from "recoil";

export type ICountry = {
  key: number;
  value: string;
};
export interface ICountryList {
  wantToVisit: ICountry[];
  visited: ICountry[];
  liked: ICountry[];
}
export const countryListAtom = atom<ICountryList>({
  key: "countryList",
  default: {
    wantToVisit: [],
    visited: [],
    liked: [],
  },
});

export function setLocalStorage(countryList: ICountry[]) {
  const jsonCountry = JSON.stringify(countryList);
  localStorage.setItem("countryList", jsonCountry);
}

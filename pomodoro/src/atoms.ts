import { atom } from "recoil";

export const DEFAULT_MINUTES = 25;

export const timeState = atom<number>({
  key: "timeState",
  default: DEFAULT_MINUTES * 60,
});

export const playState = atom<boolean>({
  key: "playState",
  default: true,
});

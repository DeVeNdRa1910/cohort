import { atom } from "recoil";

export const networkAtom = atom({
  key: "networkAtom",
  default: 104
})
export const jobsAtom = atom({
  key: "jobsAtom",
  default: 0
})
export const messageAtom = atom({
  key: "messageAtom",
  default: 0
})
export const notificationAtom = atom({
  key: "notificationAtom",
  default: 14
})
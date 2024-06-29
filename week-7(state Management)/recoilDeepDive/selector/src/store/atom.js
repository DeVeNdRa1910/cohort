import { atom, selector } from "recoil";

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

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get})=>{
        const networkCount = get(networkAtom); // current value of networkAtom
        const jobdsCount = get(jobsAtom); // current value of jobsAtom
        const messageCount = get(messageAtom); // current value of messageAtom
        const notificationCount = get(notificationAtom); // current value of notificationAtom

        return networkCount+jobdsCount+messageCount+notificationCount;

    }
})
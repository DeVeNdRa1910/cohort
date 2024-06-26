import { atom, selector } from "recoil";

export const networkAtom = atom({
    key: "networkAtom",
    default: 104
});

export const jobsAtom = atom({
    key: "jobsAtom",
    default: 0
});

export const messagingAtom = atom({
    key: "messagingAtom",
    default: 0
});

export const notificationAtom = atom({
    key: "notificationAtom",
    default: 12
});

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get})=>{
        const networkAtomCount = get(networkAtom);
        const jobsAtomCount = get(networkAtom);
        const messagingAtomCount = get(networkAtom);
        const notificationAtomCount = get(networkAtom);

        return networkAtomCount + jobsAtomCount + messagingAtomCount + notificationAtomCount ;
    }
}) 
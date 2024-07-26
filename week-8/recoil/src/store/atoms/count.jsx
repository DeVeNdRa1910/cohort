import { atom, selector } from "recoil";

export const countAtom = atom({
    key: "countAtom",
    default: 0
})



//we have dependencies inside of get like useMemo(()=>{}, [depend....])
//https://recoiljs.org/docs/introduction/getting-started/#selector
// property of get key is derivation of how evenOddSelector depend on countAtom

export const evenOddSelector = selector({
    key: "evenOdd",
    get: ({get})=>{
        const count = get(countAtom);
        return count%2;
    }
})
import { atom } from "recoil";
import { selector } from "recoil";

export const countAtom = atom({
    key: "countAtom",
    default: 0
});

// Recoil is providing 3 hooks
/* 
same as useState
const [value , setValue] = useState(0)
value is the variable
setValue is function for updating the value


useRecoilState -> its providing two things one is value second is function for updating the value
Ex:- const [count , setCount] = useRecoilState(countAtom)

useRecoilValue -> its providing only value
Ex:- const count = useRecoilValoe(countAtom)

useSetRecoilValue -> its providing only a function to update the value
Ex:- const setcount -> useSetRecoilValue(countAtom)


anything use Recoil logic should be wrap inside RecoilRoot like context.Provider
*/

 

export const evenSelector = selector({
    key: "evenSelector",
    get: ({get})=>{
        const count = get(countAtom);
        return count%2===0;
    }
})

//
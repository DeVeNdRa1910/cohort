import { atomFamily } from "recoil";
import axios from "axios";
import { selectorFamily } from "recoil";

export const todoAtomFamily = atomFamily({
    key: "todosAtomFamily",
    default: selectorFamily({
        key: "todoSelectorFamily",
        get: (id) => async ({get}) =>{
            const resp = await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
            return resp.data.todo;
        }
    })
})

///for useRecoilStateLoadable and useRecoilValueLoadable refer docs
// https://recoiljs.org/docs/api-reference/utils/selectorFamily
// https://recoiljs.org/docs/api-reference/core/useRecoilStateLoadable
// https://recoiljs.org/docs/api-reference/core/useRecoilValueLoadable

/*  OR
export const todoAtomFamily = atomFamily({
    key: "todosAtomFamily",
    default: selectorFamily({
        key: "todoSelectorFamily",
        get: function (id) { 
            return async function ({get}){
                const resp = await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
                return resp.data.todo;
            }
        }
    })
})
*/
import { atom, selector } from "recoil";
import axios from "axios";

export const notifications = atom({
  key: "networkAtom",
  // default value for an atome must be a synchrounus stuff or can be selector
  default: selector({
    key: "networkSelector",
    get: async () => {
      // provide artificial delay
      //await new Promise(r => setTimeout(r, 5000)) // 
      const resp = await axios.get("https://sum-server.100xdevs.com/notifications");
      return resp.data;
    }
  })
  //if you know default value of an atom come from async functions then bcz get function may or may not be async
})


export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get})=>{
        const allNotifications = get(notifications); // current value of networkAtom
        return  allNotifications.network +
                allNotifications.jobs +
                allNotifications.messaging +
                allNotifications.notifications;

    }
})
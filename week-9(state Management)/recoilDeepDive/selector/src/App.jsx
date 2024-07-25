import { useMemo } from 'react';
import './App.css'
import { networkAtom, jobsAtom, messageAtom, notificationAtom, totalNotificationSelector } from './store/atom'
import { useRecoilValue } from 'recoil'

function App() {
  const network = useRecoilValue(networkAtom);
  const jobs = useRecoilValue(jobsAtom);
  const message = useRecoilValue(messageAtom);
  const notification = useRecoilValue(notificationAtom);

/*   const totalNotification = useMemo(()=>{
    return network + jobs + message + notification;
  },[network , jobs , message , notification]) */
  
  // OR

  const finalNotification = useRecoilValue(totalNotificationSelector)

  return (
    <>

      <h2>We want to show all notification on Me avatar(on me button). To do this we can use selector. </h2>
      <h2>Selector will give drived state</h2>

      <button>Home</button>

      <button>My Networks ({network>99 ? <>99+</> : network})</button>
      <button>Jobs ({jobs>99 ? <>99+</> : jobs})</button>
      <button>Messaging ({message>99 ? <>99+</> : message})</button>
      <button>Notification ({notification>99 ? <>99+</> : notification})</button>

      <button>Me ({finalNotification}) </button>
    </>
  )
}

export default App

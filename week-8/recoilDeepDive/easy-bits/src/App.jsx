import './App.css'
import { networkAtom, jobsAtom, messageAtom, notificationAtom } from './store/atom'
import { useRecoilState, useRecoilValue } from 'recoil'

function App() {
  
  const network = useRecoilValue(networkAtom);
  const jobs = useRecoilValue(jobsAtom);
  const message = useRecoilValue(messageAtom);
  const [notification, setNotification] = useRecoilState(notificationAtom);


  return (
    <>
      <button>Home</button>

      <button>My Networks ({network>99 ? <>99+</> : network})</button>
      <button>Jobs ({jobs>99 ? <>99+</> : jobs})</button>
      <button>Messaging ({message>99 ? <>99+</> : message})</button>
      <button onClick={()=>setNotification(prev => prev+1)} >Notification ({notification>99 ? <>99+</> : notification})</button>

      <button>Me</button>
    </>
  )
}

export default App

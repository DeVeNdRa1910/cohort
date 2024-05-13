
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import './App.css'
import { jobsAtom, messagingAtom, networkAtom, notificationAtom } from './store/atoms'

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  )
}

function MainApp(){
  const networkAtomCount = useRecoilValue(networkAtom)
  const jobsAtomCount = useRecoilValue(jobsAtom)
  const messageAtomCount = useRecoilValue(messagingAtom)
  const notificationAtomCount = useRecoilValue(notificationAtom)

  let temp = networkAtomCount+jobsAtomCount+messageAtomCount+notificationAtomCount;
  
  // if none of the above variable is change then this approach calculate the sum , to resolve it we can use memo 
  /* 
  Like
  let temp = useMemo(()=>{
    return networkAtomCount+jobsAtomCount+messageAtomCount+notificationAtomCount;
  }, [networkAtomCount, jobsAtomCount, messageAtomCount, notificationAtomCount])
  */


  //But Recoil provide us something better then this called as selector


  return (
    <>
      <button>Home</button>

      <button>My Network {networkAtomCount >= 100 ? "99+" : networkAtomCount}</button>
      <button>Jobs {jobsAtomCount >= 100 ? "99+" : jobsAtomCount}</button>
      <button>Messaging {messageAtomCount >= 100 ? "99+" : messageAtomCount}</button>
      <button>Notifications {notificationAtomCount >= 100 ? "99+" : notificationAtomCount}</button>

      <ButtonUpdater allCount={temp}/>
    </>
  )
}

//for selector -> let show sum of all the notification count on Me button
// ab is file me hi saare count ko sum karna hai
 
//This is vary ugly approach
function ButtonUpdater(props) {
  const setMessageAtomCount = useSetRecoilState(messagingAtom)
  return (
    <>
      <button onClick={()=>{setMessageAtomCount(prev => prev+20)}}>Me {props.allCount}</button>
    </>
  )
}

export default App

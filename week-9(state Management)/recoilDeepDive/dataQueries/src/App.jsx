
import './App.css'
import { notifications , totalNotificationSelector } from './store/atom'
import { useRecoilValue } from 'recoil'

function App() {

/*   const totalNotification = useMemo(()=>{
    return network + jobs + message + notification;
  },[network , jobs , message , notification]) */
  
  // OR


  const finalNotification = useRecoilValue(totalNotificationSelector)
  const networkCount = useRecoilValue(notifications);
  
  // const [networkCount, setNetworkCount] = useRecoilState(notifications)
/*   useEffect(()=>{
    axios.get("https://sum-server.100xdevs.com/notifications")
      .then(resp => {
        // Assuming resp.data has the same structure as networkCount
        setNetworkCount(resp.data);
      })
      .catch(error => {
        console.error("Error fetching notifications:", error);
      });
  }, []) */

  return (
    <>

      <h2>We want to show all notification on Me avatar(on me button). To do this we can use selector. </h2>
      <h2>Selector will give drived state</h2>

      <button>Home</button>

      <button>My Networks ({networkCount.network>99 ? <>99+</> : networkCount.network})</button>
      <button>Jobs ({networkCount.jobs>99 ? <>99+</> : networkCount.jobs})</button>
      <button>Messaging ({networkCount.messaging>99 ? <>99+</> : networkCount.messaging})</button>
      <button>Notification ({networkCount.notifications>99 ? <>99+</> : networkCount.notifications})</button>

      <button>Me ({finalNotification}) </button>
    </>
  )
}

export default App

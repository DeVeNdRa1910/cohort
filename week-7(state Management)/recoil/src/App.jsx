import './App.css'
import { RecoilRoot  } from 'recoil';
import Count from './components/Count';


function App() {
  // Recoil has concept of atom
  //https://recoiljs.org/docs/introduction/getting-started/
  return (
    <RecoilRoot>
      <Count />
    </RecoilRoot>
  )
}



export default App





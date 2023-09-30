
/* eslint-disable no-unused-vars */

import './App.css'
import { CakeView } from './features/cake/cakeView'
import { IcecreamView } from './features/icecream/icecreamView'
import { UserView } from './features/user/userView'
function App() {
//create components
//create features and slices with reducer definitions
//configure store with reducers
//pass store on the top component using react redux provider
//useSelector will display intial values for each slice(reducer) from store using the provider above, this will also display when ever state updated
//useDispatch to dipatch slice actions
//we will not subrscibe to store or we will not do store.getState in react instead we will use useSelector hook

//hooks.ts is imp
  return (
    <div>
      <CakeView/>
      <IcecreamView/>
      <UserView/>
    </div>
  )
}

export default App
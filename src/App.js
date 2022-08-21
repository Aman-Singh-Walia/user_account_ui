import './styles/style.css'
import {Routes , Route} from 'react-router-dom'
import Account from './components/Account';
import Home from './components/Home';
import LogIn from './components/LogIn';
import RecoverAccount from './components/RecoverAccount';
import SignUp from './components/SignUp';
function App() {
  return (
    <>
    <div className='screen'>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/login' element={<LogIn></LogIn>}></Route>
        <Route path='/account' element={<Account></Account>}></Route>
        <Route path='/recoveraccount' element={<RecoverAccount></RecoverAccount>}></Route>
      </Routes>
    </div>
    </>
  );
}

export default App;

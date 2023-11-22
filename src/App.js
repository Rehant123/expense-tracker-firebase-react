
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Auth from './Pages/Auth/index';
import ExpenseTracker from './Pages/ExpenseTracker';
function App() {
  return (
    <BrowserRouter>
 <Routes>
  <Route path = "/" exact element = {<Auth/>} ></Route>
  <Route path = "/expense-tracker" element = {<ExpenseTracker/>}></Route>
 </Routes>

    </BrowserRouter>
  );
}

export default App;

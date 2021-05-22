import './App.css';
import {Route, BrowserRouter} from "react-router-dom"
import SignUp from './Component/SignUp';
import SignIn from './Component/SignIn';
import Home from './Component/Home';

function App() {
  return (
    <BrowserRouter>
    <Route exact path="/home/:data" component={Home}/>
    <Route exact path="/signup" component={SignUp} />
    <Route exact path="/" component={SignIn} />
    </BrowserRouter>
  );
}

export default App;

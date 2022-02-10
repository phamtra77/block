import Home from "./pages/home/home";
import Topbar from "./components/topbar/topbar"
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Setting from "./pages/settings/Setting"
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
function App() {
  const user = false;
  return (
   <Router>
    <Topbar />
    <Switch>
      <Route exact path="/"><Home /></Route>
      <Route path="/register">{user ? <Home /> : <Register />}</Route>
      <Route path="/login">{user ? <Home /> : <Login />}</Route>
      <Route path="/write">{user ? <Write /> : <Register />}</Route>
      <Route path="/settings">{user ? <Setting /> : <Register />}</Route>
      <Route path="/post/:postId"><Single /></Route>
    </Switch>
    </Router>
  );
}

export default App;
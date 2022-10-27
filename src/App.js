import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Components/Login";
import DisplayPage from "./Components/DisplayPage";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route path="/" component={DisplayPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

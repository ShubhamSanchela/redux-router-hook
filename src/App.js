import logo from "./logo.svg";
import "./App.css";
import Menu from "./components/Menu";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import BookConatainer from "./components/BookConatainer";
import { Provider } from "react-redux"
import store from "./redux/Store"
import HookBookContainer from "./components/HookBookContainer";
console.log(store)

function App() {
  return (
    <BrowserRouter>
      <div>
        <Provider store={store}>
        <div className="App">
          <BookConatainer />
          <HookBookContainer />
        </div>
        </Provider>
        {/* <Menu />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          </Switch>
          <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;

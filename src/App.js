import { Component } from "react";
import Banner from "./component/Banner";
import Navbar from "./component/Navbar";
import Cards from "./component/Cards";
class App extends Component {
  render() {
    return <div className="App">
      <Navbar/>
      <Banner/>
      <Cards/>
    </div>;
  }
}

export default App;

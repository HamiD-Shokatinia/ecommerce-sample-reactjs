import { Component } from "react";
import Banner from "./component/Banner";
import Navbar from "./component/Navbar";
import Cards from "./component/Cards";
import Search from "./component/Search";
import Logos from "./component/Logos";
import Footer from "./component/Footer";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Banner />
        <Cards />
        <Search />
        <Logos/>
        <Footer/>
      </div>
    );
  }
}

export default App;

import { useContext } from "react";
import About from "./components/About";
import { mainContext } from "./components/context";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";

function App() {
  const { currentPage } = useContext(mainContext)
  return (
    <Wrapper>
      <Nav />
      {currentPage === 'home' ? <Home /> : <About />}
    </Wrapper>
  );
}

export default App;

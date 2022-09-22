import Nav from './component/Nav'
import Header from './component/Header';
import Main from './component/Main';
import BeforeFooter from './component/BeforeFooter';
import Footer from "./component/Footer";
import Slider from './component/Slider';



function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Main />
   <Slider /> 
    <BeforeFooter /> 
      <Footer />

    </div>
  );
}

export default App;

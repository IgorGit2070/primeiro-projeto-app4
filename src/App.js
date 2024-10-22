import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavBar from './components/MyNavBar';
import MyAlert from './components/MyAlert';
import MyButton from './components/MyButton.jsx';
import MyCards from './components/MyCards.jsx';
import MyCarousel from './components/MyCarousel.jsx';
import MyModal from './components/MyModal.jsx';
import MyLogin from './components/MyLogin.jsx';
import MyCadastro from './components/MyCadastro.jsx';


function App() {
  return (
    <div className="App">
      <MyNavBar/>
      {/* <MyAlert/> */}
      {/* <MyButton/> */}
      {/* <MyCards/> */}
      {/* <MyCarousel/> */}
      {/* <MyModal/> */}
      {/* <MyLogin/> */}
      <MyCadastro/>
    </div>
  );
}

export default App;

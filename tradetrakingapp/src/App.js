import LoginRouterComp from './Pages/LoginRouter/LoginRouterComp';
import './Css/LoginRegister.css'
import FooterInfoComp from './components/SharedComponents/FooterInfoComp'

function App() {
  return (
    <div >
      <div className="RouterPagesContainer">
       <LoginRouterComp />

      </div>

        <FooterInfoComp />
    </div>
  );
}

export default App;

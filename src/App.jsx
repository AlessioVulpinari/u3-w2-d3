import "bootstrap/dist/css/bootstrap.min.css"
// Da tenere attivo anche quando si visualizzano le altre pagine
import "./App.css"
// Da tenere attivo solo per la pagina settings
// import "./Settings.css"
// Da tenere attivo solo per la pagina Profile
// import "./Profile.css"
import Footer from "./components/Footer"
import HomePage from "./components/HomePage"
import MyNavBar from "./components/MyNavBar"
import { Container } from "react-bootstrap"
import Profile from "./components/Profile"
import Settings from "./components/Settings"

function App() {
  return (
    <div className='App'>
      <header>
        <MyNavBar />
      </header>
      <Container>
        <HomePage />
        {/* Da tenere attivo solo per la pagina settings */}
        {/* <Settings /> */}
        {/* Da tenere attivo solo per la pagina Profile */}
        {/* <Profile /> */}
        <Footer />
      </Container>
    </div>
  )
}

export default App

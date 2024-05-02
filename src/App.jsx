import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Footer from "./components/Footer"
import HomePage from "./components/HomePage"
import MyNavBar from "./components/MyNavBar"
import { Container } from "react-bootstrap"
import Profile from "./components/Profile"
import Settings from "./components/Settings"
import TvShows from "./components/TvShow"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import MovieDetail from "./components/MovieDetail"

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <header>
          <MyNavBar />
        </header>
        <Container>
          <Routes>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/tv-shows' element={<TvShows />}></Route>
            <Route path='/profile' element={<Profile />}></Route>
            <Route path='/settings' element={<Settings />}></Route>
            <Route path='/movie-detail/:movieId' element={<MovieDetail />}></Route>
          </Routes>
          <Footer />
        </Container>
      </BrowserRouter>
    </div>
  )
}

export default App

import { Component } from "react"
import { Image } from "react-bootstrap"
import Alert from "react-bootstrap/Alert"
import Spinner from "react-bootstrap/Spinner"

class Gallery extends Component {
  // STATI: arrayOfFilmsObj = la raccolta dei film restituiti dalla fetch
  // isError = valore booleano per indicare se si è verificato un errore
  // errorMsg = testo dell'errore (valore string)
  // isLoading = valore booleano per indicare se la pagina è ancora in attesa della fetch
  state = { arrayOfFilmsObj: [], isError: false, errorMsg: "", isLoading: true }

  // FUNZIONE PRINCIPALE: prende come parametro il nome di un film e ne fa la relativa fetch
  // sull'API fornita
  fetchFilms = (filmName) => {
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=9d8765b4&s=${filmName}`)
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          if (response.status === 400) {
            throw new Error("400: Bad Request")
          }
          if (response.status === 401) {
            throw new Error("401: Unauthorized")
          }
          if (response.status === 402) {
            throw new Error("402: Payment Required")
          }
          if (response.status === 403) {
            throw new Error("403: Forbidden")
          }
          if (response.status === 404) {
            throw new Error("404: Not Found")
          }
          if (response.status === 405) {
            throw new Error("405: Method Not Allowed")
          }
          if (response.status === 406) {
            throw new Error("406: Not Acceptable")
          }
          if (response.status === 407) {
            throw new Error("407: Proxy Authentication Required")
          }
          if (response.status === 408) {
            throw new Error("408: Request Timeout")
          }
          if (response.status === 500) {
            throw new Error("500: Server Error")
          }

          throw new Error("Generic Fetch Error")
        }
      })
      .then((data) => {
        // Controllo per verificare se la ricerca restituisca un risultato
        if (!data.Search) {
          // Se la ricerca non pruduce nessun risultiamo settiamo lo stato isError = true
          // e lanciamo un errore per indicare che il film in questione non è stato trovato
          this.setState({ isError: true })
          throw new Error("No film finded")
        } else {
          // altrimenti prendiamo solo i primi 6 valori dell'array e li inseriamo
          // nello stato arrayOfFilmsObj
          const arrayOfFilmsObj = data.Search.splice(0, 6)
          this.setState({ arrayOfFilmsObj })
        }
      })
      .catch((err) => {
        // In caso di errore settiamo lo stato isError = true
        // ed utilizziamo il messaggio di errore ricevuto settandolo allo stato errorMsg
        this.setState({ errorMsg: err.name + " : " + err.message })
        this.setState({ isError: true })
      })
      .finally(() => {
        // In ogni caso (sia che abbiamo ricevuto un errore o meno) settiamo
        // isLoading che di default è true a false per disattivare lo spinner
        this.setState({ isLoading: false })
      })
  }

  // funzione per creare i col che contego i poster delle copertine
  createCardImg = () =>
    this.state.arrayOfFilmsObj.map((film) => {
      return (
        <div className='col mb-2 text-center px-1' key={film.imdbID}>
          <Image className='img-fluid' src={film.Poster} alt={film.Title} />
        </div>
      )
    })

  // Funzione per istanziare gli Alert di errore
  createAlert = (errorMsg) => {
    return (
      <Alert variant='danger'>
        <Alert.Heading>WARNING!</Alert.Heading>
        <p>{errorMsg}</p>
      </Alert>
    )
  }

  componentDidMount() {
    this.fetchFilms(this.props.film)
  }

  render() {
    return (
      <>
        {/* Controlliamo se la pagina sta caricando e se la fetch non ha restituito un codice di errore */}
        {this.state.isLoading && !this.state.isError ? (
          // in questo caso istanziamo lo spinner per il caricamento
          <Spinner animation='border' role='status' variant='light' className='mx-auto'>
            <span className='visually-hidden'>Loading...</span>
          </Spinner>
        ) : (
          console.log("Ciao")
        )}
        {/* Se la fetch ha restituito un errore chiamiamo la funzione per istanziare un alert in caso contrario facciamo un console log */}
        {this.state.isError ? this.createAlert(this.state.errorMsg) : console.log("Nessun errore")}
        {/* Se l'array di oggetti contiene almeno un film e se la fetch non ha restituito un errore istanziamo le col contenenti le foto dei poster
        tramite la funzione createCardImg, altrimenti restituiamo un console log */}
        {this.state.arrayOfFilmsObj.length > 0 && !this.state.isError ? (
          <this.createCardImg />
        ) : (
          console.log("Img ancora non disponibili")
        )}
      </>
    )
  }
}

export default Gallery

import { useEffect, useState } from "react"
import { Alert, Col, Row, Spinner } from "react-bootstrap"
import { useParams } from "react-router-dom"
import Card from "react-bootstrap/Card"
import ListGroup from "react-bootstrap/ListGroup"

const MovieDetail = (props) => {
  const [isError, setIsError] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [film, setFilm] = useState(null)
  const params = useParams()

  const fetchFilms = (filmId) => {
    fetch(`http://www.omdbapi.com/?apikey=9d8765b4&s&i=${filmId}`)
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
        if (!data) {
          // Se la ricerca non pruduce nessun risultiamo settiamo lo stato isError = true
          // e lanciamo un errore per indicare che il film in questione non è stato trovato
          setIsError(true)
          throw new Error("No film finded")
        } else {
          console.log(data)
          setFilm(data)
        }
      })
      .catch((err) => {
        // In caso di errore settiamo lo stato isError = true
        // ed utilizziamo il messaggio di errore ricevuto settandolo allo stato errorMsg
        setErrorMsg(err.name + " : " + err.message)
        setIsError(true)
      })
      .finally(() => {
        // In ogni caso (sia che abbiamo ricevuto un errore o meno) settiamo
        // isLoading che di default è true a false per disattivare lo spinner
        setIsLoading(false)
      })
  }

  // Funzione per istanziare gli Alert di errore
  const createAlert = (errorMsg) => {
    return (
      <Alert variant='danger'>
        <Alert.Heading>WARNING!</Alert.Heading>
        <p>{errorMsg}</p>
      </Alert>
    )
  }

  const createCard = () => {
    return (
      <Row className='d-flex align-items-center justify-content-center'>
        <Col xs={12} sm={10} md={8} xl={6}>
          <Card>
            <Card.Img variant='top' className='img-fluid' src={film.Poster} />
            <Card.Body>
              <Card.Title>{film.Title}</Card.Title>
              <Card.Text>{film.Plot}</Card.Text>
            </Card.Body>
            <ListGroup className='list-group-flush'>
              <ListGroup.Item>{film.Released}</ListGroup.Item>
              <ListGroup.Item>{film.Runtime}</ListGroup.Item>
              <ListGroup.Item>{film.Genre}</ListGroup.Item>
              <ListGroup.Item>{film.Director}</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    )
  }

  useEffect(() => {
    fetchFilms(params.movieId)
  }, [])

  return (
    <>
      {isLoading && !isError ? (
        <Spinner animation='border' role='status' variant='light' className='mx-auto'>
          <span className='visually-hidden'>Loading...</span>
        </Spinner>
      ) : (
        console.log("Ciao")
      )}
      {isError ? createAlert(errorMsg) : console.log("Nessun errore")}
      {!isError && !isLoading && film !== null ? createCard() : console.log("Errore")}
    </>
  )
}

export default MovieDetail

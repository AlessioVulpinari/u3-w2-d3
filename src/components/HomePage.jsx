import Gallery from "./Gallery"
import { ButtonGroup } from "react-bootstrap"
import Dropdown from "react-bootstrap/Dropdown"

const HomePage = () => {
  return (
    <>
      <div className='d-flex justify-content-between'>
        <div className='d-flex'>
          <h2 className='mb-4'>TV Shows</h2>

          <ButtonGroup size='lg' className='mb-2'>
            <Dropdown className='ms-4 mt-1'>
              <Dropdown.Toggle className='text-white' variant='light' id='dropdown-basic' style={{ backgroundColor: "#221f1f" }}>
                Genres
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href='#/action-1'>Comedy</Dropdown.Item>
                <Dropdown.Item href='#/action-2'>Drama</Dropdown.Item>
                <Dropdown.Item href='#/action-3'>Thriller</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </ButtonGroup>
        </div>
        <div>
          <i className='bi bi-grid icons'></i>
          <i className='bi bi-grid-3x3 icons'></i>
        </div>
      </div>
      <h4>Trending Now</h4>
      <div className='row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4'>
        <Gallery film='Star wars' />
      </div>
      <h4>Watch it Again</h4>
      <div className='row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4'>
        <Gallery film='Star Trek' />
      </div>
      <h4>New Releases</h4>
      <div className='row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4'>
        <Gallery film='battlestar galactica' />
      </div>
    </>
  )
}

export default HomePage

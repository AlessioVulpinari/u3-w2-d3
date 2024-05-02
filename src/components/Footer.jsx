import { Col, Row } from "react-bootstrap"

const Footer = () => {
  return (
    <footer>
      <Row className='row justify-content-center mt-5'>
        <Col xs={6}>
          <Row>
            <Col className='mb-2'>
              <i className='bi bi-facebook footer-icon me-2'></i>
              <i className='bi bi-instagram footer-icon me-2'></i>
              <i className='bi bi-twitter-x footer-icon me-2'></i>
              <i className='bi bi-youtube footer-icon'></i>
            </Col>
          </Row>
          <Row>
            <Col>
              <Row>
                <Col className='footer-links'>
                  <p>
                    <a href='index.html' alt='footer link'>
                      Audio and Subtitles
                    </a>
                  </p>
                  <p>
                    <a href='index.html' alt='footer link'>
                      Media Center
                    </a>
                  </p>
                  <p>
                    <a href='index.html' alt='footer link'>
                      Privacy
                    </a>
                  </p>
                  <p>
                    <a href='index.html' alt='footer link'>
                      Contact us
                    </a>
                  </p>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col className='footer-links'>
                  <p>
                    <a href='index.html' alt='footer link'>
                      Audio Description
                    </a>
                  </p>
                  <p>
                    <a href='index.html' alt='footer link'>
                      Investor Relations
                    </a>
                  </p>
                  <p>
                    <a href='index.html' alt='footer link'>
                      Legal Notices
                    </a>
                  </p>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col className='footer-links'>
                  <p>
                    <a href='index.html' alt='footer link'>
                      Help Center
                    </a>
                  </p>
                  <p>
                    <a href='index.html' alt='footer link'>
                      Jobs
                    </a>
                  </p>
                  <p>
                    <a href='index.html' alt='footer link'>
                      Cookie Preferences
                    </a>
                  </p>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col className='footer-links'>
                  <p>
                    <a href='index.html' alt='footer link'>
                      Gift Cards
                    </a>
                  </p>
                  <p>
                    <a href='index.html' alt='footer link'>
                      Terms of Use
                    </a>
                  </p>
                  <p>
                    <a href='index.html' alt='footer link'>
                      Corporate Information
                    </a>
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col className='mb-2'>
              <button type='button' className='btn btn-sm footer-button rounded-0 mt-3'>
                Service Code
              </button>
            </Col>
          </Row>
          <Row>
            <Col className='mb-2 mt-2 copyright'>© 1997-2023 Netflix, Inc. </Col>
          </Row>
        </Col>
      </Row>
    </footer>
  )
}

export default Footer

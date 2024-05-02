import "../Settings.css"
import { Button, Col, Container, Row } from "react-bootstrap"
import avatar from "../assets/avatar.png"

const Settings = () => {
  return (
    <Container className='text-light'>
      <h2 className='border-bottom border-secondary pb-3'>Account</h2>
      <div className='d-flex border-bottom border-secondary pb-2'>
        <div className='width-300 flex-shrink-0'>
          <h3 className='h4'>MEMBERISHIP & BILLING</h3>
          <Button variant='secondary' className='rounded-0'>
            Cancel Membership
          </Button>
        </div>
        <Container>
          <Row>
            <Col xs={12} sm={6}>
              student@strive.school
            </Col>
            <Col xs={12} sm={6} className='text-sm-end'>
              <a href='#' className='text-decoration-none'>
                Change account email
              </a>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={6}>
              Password: ********
            </Col>
            <Col xs={12} sm={6} className='text-sm-end'>
              <a href='#' className='text-decoration-none'>
                Change password
              </a>
            </Col>
          </Row>
          <Row className='border-bottom border-secondary pb-2'>
            <Col xs={12} sm={6}>
              Phone: 321 044 1279
            </Col>
            <Col xs={12} sm={6} className='text-sm-end'>
              <a href='#' className='text-decoration-none'>
                Change phone number
              </a>
            </Col>
          </Row>
          <Container className='px-0'>
            <Row>
              <Col xs={12} sm={6}>
                <p className='mb-0'>
                  <i className='bi bi-paypal'></i> admin@strive.school
                </p>
              </Col>
              <Col className='text-sm-end'>
                <a href='#' className='text-decoration-none'>
                  Update payment info
                </a>
              </Col>
            </Row>
          </Container>

          <Row className='border-bottom border-secondary pb-2'>
            <Col xs={12} className='text-sm-end'>
              <a href='#' className='text-decoration-none'>
                Biling details
              </a>
            </Col>
          </Row>

          <div className='mt-2'>
            <div className='text-sm-end'>
              <a href='#' className='text-decoration-none'>
                Redeem gift card or promo code
              </a>
            </div>
            <div className='text-sm-end'>
              <a href='#' className='text-decoration-none'>
                Where to buy gift card
              </a>
            </div>
          </div>
        </Container>
      </div>
      <Container className='d-flex border-bottom border-secondary pb-2 mt-2'>
        <div className='width-300 flex-shrink-0'>
          <h3 className='h4'>PLAN DETAILS</h3>
        </div>
        <Container className='container p-0'>
          <Row>
            <Col xs={12} sm={6}>
              Premium <i className='bi bi-badge-hd'></i>
            </Col>
            <Col xs={12} sm={6} className='text-sm-end'>
              <a href='#' className='text-decoration-none'>
                Change Plan
              </a>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container className='d-flex border-bottom border-secondary pb-2 mt-2'>
        <div className='width-300 flex-shrink-0'>
          <h3 className='h4'>SETTINGS</h3>
        </div>
        <Container className='p-0'>
          <Row className='row'>
            <Col xs={12}>
              <a href='#' className='text-decoration-none'>
                Parental control
              </a>
            </Col>
            <Col xs={12}>
              <a href='#' className='text-decoration-none'>
                Test partecipation
              </a>
            </Col>
            <Col xs={12}>
              <a href='#' className='text-decoration-none'>
                Manage download devices
              </a>
            </Col>
            <Col xs={12}>
              <a href='#' className='text-decoration-none'>
                Active a device
              </a>
            </Col>
            <Col xs={12}>
              <a href='#' className='text-decoration-none'>
                Recent device streaming activity
              </a>
            </Col>
            <Col xs={12}>
              <a href='#' className='text-decoration-none'>
                Sign out of all devices
              </a>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container className='d-flex mt-2'>
        <div className='width-300 flex-shrink-0'>
          <h3 className='h4'>MY PROFILE</h3>
        </div>
        <Container className='p-0'>
          <Row>
            <Col xs={12} sm={6}>
              <p className='mb-0 fw-semibold'>
                <img src={avatar} width='20' height='20' alt='avatar' />
                Strive Student
              </p>
            </Col>
            <Col xs={12} sm={6} className='text-sm-end'>
              <a href='#' className='text-decoration-none'>
                Manage profile
              </a>
            </Col>
            <Col xs={12} className='text-sm-end'>
              <a href='#' className='text-decoration-none'>
                Add profile email
              </a>
            </Col>
            <Col xs={12} sm={6}>
              <a href='#' className='text-decoration-none'>
                Language
              </a>
            </Col>
            <Col xs={12} sm={6}>
              <a href='#' className='text-decoration-none'>
                Viewing activity
              </a>
            </Col>
            <Col xs={12} sm={6}>
              <a href='#' className='text-decoration-none'>
                Playback settings
              </a>
            </Col>
            <Col xs={12} sm={6}>
              <a href='#' className='text-decoration-none'>
                Ratings
              </a>
            </Col>
            <Col xs={12} sm={6}>
              <a href='#' className='text-decoration-none'>
                Language
              </a>
            </Col>
            <Col xs={12}>
              <a href='#' className='text-decoration-none'>
                Subtle appearance
              </a>
            </Col>
          </Row>
        </Container>
      </Container>
    </Container>
  )
}
export default Settings

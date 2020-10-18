import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';


export default function App(){
  const [show, setShow] = useState(false);
  const [isSwift, setSwift] = useState(true);
  const [isEUCountry, setEUCountry] = useState(false);

  const openModal = () => setShow(true);
  const closeModal = () => setShow(false);
  const setAccount = (value) => {
    value === 'SWIFT' ? setSwift(true) : setSwift(false)
    };
  const selectCountry = (props) => {
      switch (props.target.value) {
        case 'GER':
          setEUCountry(false);
          break;
        case 'UK':
          setEUCountry(true);
          break;
        default:
          break;
      }
  }

  return (
    <div className = 'App-header'>
      <Button variant="primary" onClick={openModal}>Enter</Button>
      <Modal show={show} onHide={closeModal} size="lg">
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group as={Row}>
              <Form.Group as={Col}>
                <Form.Label size = "lg">
                  Banking Information
                </Form.Label>
                <Form.Text>
                  We need to collect this Information to send
                  payments to you on your employer's behalf.
                </Form.Text>
                <Form.Text>
                  Once you submit you bank information, we'll verify
                  you information before we start sending any payout there.
                </Form.Text>
              </Form.Group>
              <Form.Group as={Col}>
                {isSwift?<Form.Label>Bank Country</Form.Label>:null}
                {isSwift?<Form.Control as="select" defaultValue="" onChange = {selectCountry}>
                  <option value = 'GER' >Germany</option>
                  <option value = 'UK' >United Kingdom</option>
                </Form.Control>:null}
                <Form.Label>Select Method</Form.Label><br/>
                <ToggleButtonGroup type="radio" name="options" defaultValue='SWIFT' onChange={setAccount}>
                  <ToggleButton value='SWIFT' variant="success" >SWIFT</ToggleButton>
                  <ToggleButton value='IBAN' variant="success" >IBAN</ToggleButton>
                </ToggleButtonGroup><br/>
                <Form.Label>SWIFT</Form.Label>
                <Form.Control />
                {isSwift?<Form.Label>Account Number</Form.Label>:null}
                {isSwift?<Form.Control />:null}
              </Form.Group>
              <Form.Group as={Col} class="d-flex bd-highlight mb-3">
                {isSwift?<Form.Label>Currency</Form.Label>:null}
                {isSwift?<Form.Control as="select" class="mr-auto p-2 bd-highlight">
                  <option>EUR</option>
                  <option>GBP</option>
                </Form.Control>:null}
                {isEUCountry?<Form.Label>Rounting Number</Form.Label>:null}
                {isEUCountry?<Form.Control/>:null}
                {isSwift?<Form.Label>Confirm Account Number</Form.Label>:<Form.Label>Currency</Form.Label>}
                {isSwift?<Form.Control/>:<Form.Control as="select" class="mr-auto p-2 bd-highlight">
                  <option>EUR</option>
                  <option>GBP</option>
                </Form.Control>}
              </Form.Group>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

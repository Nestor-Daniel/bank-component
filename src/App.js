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

  const openModal = () => setShow(true);
  const closeModal = () => setShow(false);
  const swiftAccount = () => setSwift(true);
  const ibanAccount = () => setSwift(false);

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
                <Form.Label>Bank Country</Form.Label>
                <Form.Control as="select" defaultValue="">
                  <option>Germany</option>
                  <option>United Kingdom</option>
                </Form.Control>
                <Form.Label>Select Method</Form.Label><br/>
                <ToggleButtonGroup type="radio" name="options" defaultValue={1} >
                  <ToggleButton value={1} variant="success" >SWIFT</ToggleButton>
                  <ToggleButton value={2} variant="success" >IBAN</ToggleButton>
                </ToggleButtonGroup><br/>
                <Form.Label>SWIFT</Form.Label>
                <Form.Control />
                <Form.Label>Account Number</Form.Label>
                <Form.Control />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Currency</Form.Label>
                <Form.Control as="select" defaultValue="">
                  <option>EUR</option>
                  <option>GBP</option>
                </Form.Control>
                <Form.Label>Confirm Account Number</Form.Label>
                <Form.Control />
              </Form.Group>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

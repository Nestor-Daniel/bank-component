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
  const [isEUCountry, setEUCountry] = useState(true);
  const [currency, setCurrency] = useState();
  const [country, setCountry] = useState('UK');

  const openModal = () => setShow(true);
  const closeModal = () => setShow(false);
  const setAccount = (value) => {
    value === 'SWIFT' ? setSwift(true) : setSwift(false)
    };
  const selectCountry = (props) => {
      switch (props.target.value) {
        case 'GER':
          setEUCountry(false);
          setCurrency('EUR');
          setCountry('GER')
          break;
        case 'UK':
          setEUCountry(true);
          setCurrency('GBP');
          setCountry('UK')
          break;
        default:
          break;
      }
  }
  const selectCurrency = (props) => {
      switch (props.target.value) {
        case 'EUR':
          setCurrency('EUR');
          break;
        case 'GBP':
          setCurrency('GBP');
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
        <Modal.Body className = 'sofiaBody'>
          <Form>
            <Form.Group as={Row}>
              <Form.Group as={Col} className='flexComp'>
                <Form.Label size = "lg" className = 'sofiaHeader'>
                  Banking Information
                </Form.Label>
                <Form.Text>
                  We need to collect this Information to send
                  payments to you on your employer's behalf.
                </Form.Text>
                <Form.Text>
                  Once you submit you bank information, we'll verify
                  you information before we start sending any payout there.
                </Form.Text><br/>
                {country==='GER'?<Form.Label>When will I get paid?</Form.Label>:null}
                {country==='GER'?<Form.Text>
                  Due to your bank country and currency, payments from your employer
                  will take X business days to complete. You will receive funds X
                  days after your pay day.
                </Form.Text>:null}
                <div className='spaceFill'></div>
              </Form.Group>
              <Form.Group as={Col} className='flexComp'>
                {isSwift?<Form.Label>Bank Country</Form.Label>:null}
                {isSwift?<Form.Control as="select" value = {country} onChange = {selectCountry}>
                  <option value = 'UK' >United Kingdom</option>
                  <option value = 'GER' >Germany</option>
                </Form.Control>:null}<br/>
                <Form.Label>Select Method</Form.Label><br/>
                <ToggleButtonGroup type="radio" name="options" defaultValue='SWIFT' onChange={setAccount}>
                  <ToggleButton value='SWIFT' variant="success" >SWIFT</ToggleButton>
                  <ToggleButton value='IBAN' variant="success" >IBAN</ToggleButton>
                </ToggleButtonGroup><br/>
                <div className='spaceFill'></div>
                <Form.Label>{isSwift?'SWIFT':'IBAN'}</Form.Label>
                <Form.Control />
                {isSwift?<Form.Label>Account Number</Form.Label>:null}
                {isSwift?<Form.Control />:null}
              </Form.Group>
              <Form.Group as={Col} className='flexComp'>
                {isSwift?<Form.Label>Currency</Form.Label>:null}
                {isSwift?<Form.Control as="select" value = {currency} onChange = {selectCurrency}>
                  <option>EUR</option>
                  <option>GBP</option>
                </Form.Control>:null}
                <div className='spaceFill'></div>
                {isSwift && isEUCountry?<Form.Label>Rounting Number</Form.Label>:null}
                {isSwift && isEUCountry?<Form.Control/>:null}
                {isSwift?<Form.Label>Confirm Account Number</Form.Label>:<Form.Label>Currency</Form.Label>}
                {isSwift?<Form.Control/>:<Form.Control as="select" value = {currency} onChange = {selectCurrency}>
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

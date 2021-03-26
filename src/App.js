import AddMoney from './components/AddMoney'
import ChangeReturn from './components/ChangeReturn'
import PurchaseCenter from './components/PurchaseCenter'
import { Row, Col, Container } from 'react-bootstrap';
import './App.css';
import './css/style.css';

function App() {
  return (
    <div className="App">
      <Container fluid>
        <br />
        <h1 className="text-center">Vending Machine Application</h1>
        <hr />
      <Row>
        <Col sm={12}>
            <ul className="list-group" id="errorMessages"></ul>
            <div id="vendingGrid">
      <Container id="gridContainer">
      <Row>
        <Col sm={3} id="gridContentCol1">

        </Col>
        <Col sm={3} id="gridContentCol2">

        </Col>
        <Col sm={3} id="gridContentCol3">

        </Col>
        <Col sm={3}>
          <AddMoney />
          <PurchaseCenter />
          <ChangeReturn />
          </Col>
          </Row>
    </Container>
    </div>
    </Col>
    </Row>
    </Container>
    </div>
  );
}

export default App;

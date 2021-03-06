import AddMoney from './components/AddMoney'
import ChangeReturn from './components/ChangeReturn'
import PurchaseCenter from './components/PurchaseCenter'
import Card from './components/Card'
import { Row, Col, Container } from 'react-bootstrap';
import './App.css';
import './css/style.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const SERVICE_URL = "https://tsg-vending.herokuapp.com";
const POST_URL = "https://tsg-vending.herokuapp.com/money/' + amount + '/item/' + id";

class App extends Component {

  state = {
    loading: false,
    itemData: [
      {
        "id": 1, 
        "name": "Snickers", 
        "price": 1.5, 
        "quantity": 10 
      }]
  }

  loadItemData() {
    this.setState({ loading: true })
    console.log("Loading item data")
    fetch(SERVICE_URL + "/items")
      .then(data => data.json())
      .then(data => this.setState(
        { itemData: data, loading: false }
      ))
  }

  componentDidMount() {
    console.log("App is now mounted.")
    this.loadItemData();
  }

  render() {

  return (
    <div className="App">
      <Container>
        <br />
        <h1 className="text-center">Vending Machine Application</h1>
        <hr />
      <Row>
        <Col sm={12}>
            <ul className="list-group" id="errorMessages"></ul>
        </Col>
        <Col sm={9}>
        <Card items={this.state.itemData}/>
        </Col>
        <Col sm={3}>
          <AddMoney />
          <PurchaseCenter />
          <ChangeReturn />
        </Col>
      </Row>
    </Container>
    </div>
  );
  }
}

export default App;

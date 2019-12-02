import React from 'react';
import './../App.css';
import Button from 'react-bootstrap/Button';
import NodesList from './NodesList';

export default class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      errorMessage: '',
      validModel: false,
      listOfNodes: null
    };

    this.handleAreaChange = this.handleAreaChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <div className='Header'>
          <h2>Parse list of nodes:</h2>
          <textarea className='TextArea' value={this.state.value} onChange={this.handleAreaChange}/>
          <Button variant='primary' onClick={this.handleSubmit}>Parse</Button>
          {this.getErrorMessage()}
        </div>
        {this.displayListOfNodes()}
      </div>
    );
  }

  handleAreaChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    try {
      const listOfNodes = JSON.parse(this.state.value);
      const valid = this.validateListOfNodes(listOfNodes);
      this.setState({ validModel: valid, listOfNodes })
    } catch(e) {
      this.displayError(e.toString());
      this.setState({ validModel: false })
    }
  }

  validateListOfNodes(listOfNodes) {
    if (!Array.isArray(listOfNodes)) {
      this.displayError('nodes must be array');
      return false;
    }

    for (let node of listOfNodes) {
      if (!node.hasOwnProperty('id') ||
        !node.hasOwnProperty('name') ||
        !node.hasOwnProperty('nodes')) {
        this.displayError(
          'Every node must contain following attributes: id, name, nodes (list of other nodes objects)');
        return false;
      }

      if (!this.validateListOfNodes(node.nodes)) {
        return false;
      }
    }

    return true;
  }

  displayError(message) {
    this.setState({ errorMessage: message })
  }

  getErrorMessage() {
    if (!this.state.validModel) {
      return <p className='ErrorWindow'>{this.state.errorMessage}</p>;
    }
    return null;
  }

  displayListOfNodes() {
    if (this.state.validModel) {
      return <NodesList nodesList={this.state.listOfNodes}/>;
    } else {
      return null;
    }
  }
}
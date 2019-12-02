import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import NodeComponent from "./NodeComponent";

export default class NodesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Please write an essay about your favorite DOM element.',
      validModel: false
    };
  }

  render() {
    return (
      <Container>
        {this.props.nodesList.map(node =>
          <NodeComponent key={node.id} node={node} level={0}/>
          )}
      </Container>
    );
  }
}
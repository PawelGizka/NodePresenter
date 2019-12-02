import React from 'react';
import Button from 'react-bootstrap/Button';

import './../App.css';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default class NodeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayListOfNodes: false
    };

    this.onShowHideNodesButtonClicked = this.onShowHideNodesButtonClicked.bind(this);
  }

  render() {
    return (
      <div>
        <Row className="Node" style={this.getRowStyle()}>
          <Col>
            <p>{this.props.node.name}</p>
          </Col>
          <Col>
            <p>{this.props.node.id}</p>
          </Col>
          <Col>
            {this.getShowHideSection()}
          </Col>
        </Row>
        {this.renderChildrenNodes()}
      </div>
    );
  }

  getRowStyle() {
    const padding = Math.min(this.props.level * 5, 70);
    return {paddingLeft: `${padding}%`}
  }

  getShowHideSection() {
    if (this.props.node.nodes.length) {
      return <Button
        variant={'secondary'}
        onClick={this.onShowHideNodesButtonClicked}>{this.getShowHideButtonTitle()}</Button>;
    } else {
      return <p>Empty nodes array</p>
    }
  }

  getShowHideButtonTitle() {
    if (!this.state.displayListOfNodes) {
      return 'Show list of nodes'
    } else {
      return 'Hide list of nodes';
    }
  }

  onShowHideNodesButtonClicked() {
    this.setState({ displayListOfNodes: !this.state.displayListOfNodes })
  }

  renderChildrenNodes() {
    if (this.state.displayListOfNodes) {
      return this.props.node.nodes.map(node =>
        <NodeComponent key={node.id} node={node} level={this.props.level + 1}/>
        )
    }
    return null;
  }
}

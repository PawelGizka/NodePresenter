import React from 'react';
import Container from 'react-bootstrap/Container'
import NodeComponent from './NodeComponent';


export default function NodesList(props) {
  return (
    <Container>
      {props.nodesList.map(node => <NodeComponent key={node.id} node={node} level={0}/>)}
    </Container>
  );
}
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import FormBookmarklet from './components/form-bookmarklet';

class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1>BOOKMARK.THIS</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormBookmarklet />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;

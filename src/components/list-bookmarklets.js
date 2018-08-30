import React from 'react';
import { Row, Col, Table, Button } from 'reactstrap';

const ListBookmarklet = props => {
  return (
    <Row>
      <Col>
        <h2>List</h2>
        <Table striped>
          <thead>
            <tr>
              <td>SITE</td>
              <td>URL</td>
              <td>DESCRIPTION</td>
              <td>TAGS</td>
              <td />
            </tr>
          </thead>
          <tbody>
            {Object.keys(props.data).map(key => {
              return (
                <tr key={key}>
                  <td>{props.data[key].name}</td>
                  <td>
                    <a href="{props.data[key].url}">{props.data[key].url}</a>
                  </td>
                  <td>{props.data[key].description}</td>
                  <td>{props.data[key].tags}</td>
                  <td>
                    <Button classname="hide" color="warning" block={true}>edit</Button>
                    <Button color="danger" block={true} onClick={()=>props.delete(props.data[key].id)}>del</Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default ListBookmarklet;

import React, { Component } from 'react';
import firebase from '../firebase';
import { Form, FormGroup } from 'reactstrap';
import ListBookmarklet from './list-bookmarklets';

class FormBookmarklet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: {},
      name: {},
      url: {},
      description: {},
      tags: {},
      data: ''
    };
    this.gravaBookmarklet = this.gravaBookmarklet.bind(this);
    this.delBookmarklet = this.delBookmarklet.bind(this);
    this.getBookmarklets();
  }

  getBookmarklets() {
    const db = firebase.firestore();
    db.settings({
      timestampsInSnapshots: true
    });
    /*db.collection('bookmarklet')
      .get()
      .then(
        querySnapshot => {
          const items = querySnapshot.docs.map(doc => {
            return doc.data();
          });
          this.setState({ data: items });
          console.log("data",this.state.data)
        }
      );*/

    db.collection('bookmarklet')
      .orderBy('name')
      .get()
      .then(snapshot => {
        const items = snapshot.docs.map(doc => {
          return {
            id: doc.id,
            name: doc.data().name,
            url: doc.data().url,
            description: doc.data().description,
            tags: doc.data().tags
          };
        });
        this.setState({ data: items });
      });
  }

  delBookmarklet(item) {
    console.log('item', item);
    const db = firebase.firestore();
    db.settings({
      timestampsInSnapshots: true
    });
    db.collection('bookmarklet').doc(item).delete()
    this.getBookmarklets();
  }

  gravaBookmarklet(e) {
    e.preventDefault();

    const db = firebase.firestore();

    db.settings({
      timestampsInSnapshots: true
    });

    db.collection('bookmarklet').add({
      name: this.name.value,
      url: this.url.value,
      description: this.description.value,
      tags: this.tags.value
    });

    this.setState({
      name: '',
      url: '',
      description: '',
      tags: ''
    });
    this.name.value = '';
    this.url.value = '';
    this.description.value = '';
    this.tags.value = '';

    this.getBookmarklets();
  }
  render() {
    return (
      <div>
        <Form onSubmit={this.gravaBookmarklet}>
          <FormGroup>
            <input
              className="form-control"
              type="text"
              name="name"
              placeholder="NAME"
              ref={ref => (this.name = ref)}
            />
          </FormGroup>
          <FormGroup>
            <input
              className="form-control"
              type="text"
              name="url"
              placeholder="URL"
              ref={ref => (this.url = ref)}
            />
          </FormGroup>
          <FormGroup>
            <input
              className="form-control"
              type="text"
              name="description"
              placeholder="DESCRIPTION"
              ref={ref => (this.description = ref)}
            />
          </FormGroup>
          <FormGroup>
            <input
              className="form-control"
              type="text"
              name="tags"
              placeholder="TAGS"
              ref={ref => (this.tags = ref)}
            />
          </FormGroup>
          <FormGroup>
            <button type="submit" className="btn btn-default">
              ENVIAR
            </button>
          </FormGroup>
        </Form>

        <ListBookmarklet data={this.state.data} delete={this.delBookmarklet} />
      </div>
    );
  }
}

export default FormBookmarklet;

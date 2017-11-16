import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Contact from './Contact'

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.loadSamples = this.loadSamples.bind(this);
  }


  getMatches(queryString) {
    const contacts = Array.from(this.props.contacts);
    // Search globally, case-insensitive
    const regex = new RegExp(queryString, 'gi');

    const matchArray = contacts.filter(item => {
      const [key, value] = item;
      return (
        key.match(regex) || value.info.match(regex)
      )
    });
    return matchArray
  }


  loadSamples() {
    // Path from root directory
    const url = './client/data/sample-data.json';
    const samples = [];

    // Asyncly(!) Load sample data
    fetch(url)
    .then(response => response.json())
    .then(data => samples.push(...data))
    .then(() => {
      // Add sample data to contacts in Redux
      samples.forEach(item => this.props.addContact(item.name, item));
      console.log(this.props.contacts);
    })
    .catch((reject) => {
      console.log('reject', reject);
    });
  }


  renderContact(item) {
    const [key, value] = item;

    return (
      <Contact key={key} {...value}
        removeContact={this.removeContact}
      />
    )
  }


  render() {
    const matchArray = this.getMatches(this.props.queryString);
    return (
      <div className="wrapper">
        <Header
          loadSamples={this.loadSamples}
          {...this.props}
        />
        <div className="contacts-list">
          {/* Filtered List of Contacts */}
          {
            matchArray.map((item) => this.renderContact(item))
          }
        </div>
        <Footer />
      </div>
    )
  }
}

export default Main
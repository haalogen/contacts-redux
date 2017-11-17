import React from 'react'
import { toTitleCase } from '../helpers'


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleShowSearchBtnClick = this.handleShowSearchBtnClick.bind(this);
    this.handleShowAddFormBtnClick = this.handleShowAddFormBtnClick.bind(this);
    this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
    this.handleAddFormSubmit = this.handleAddFormSubmit.bind(this);

    this.state = {
      isSearchBoxVisible: false,
      isAddFormVisible: false,
      newName: 'Антон Логвинов',
      newImage: '../img/man.svg',
      newInfo: 'Вин Дизель среди обзорщиков',
      newTel: '1010',
      newTelegram: 'toha10iz10'
    }
  }

  handleShowAddFormBtnClick() {
    this.setState({
      isAddFormVisible: !this.state.isAddFormVisible
    })
  }

  handleShowSearchBtnClick() {
    this.setState({
      isSearchBoxVisible: !this.state.isSearchBoxVisible
    })
  }

  handleSearchInputChange(event) {
    const value = event.target.value;
    this.props.updateQueryString(value);
  }

  handleAddFormSubmit(event) {
    event.preventDefault();
    const {
      newName,
      newImage,
      newInfo,
      newTel,
      newTelegram
    } = this.state;

    const newItem = {
      name: newName,
      image: newImage,
      info: newInfo,
      tel: newTel,
      telegram: newTelegram
    };

    this.props.addContact(newName, newItem)
    // Hide Add form
    this.setState({
      isAddFormVisible: !this.state.isAddFormVisible
    })
  }

  handleInputChange(event, inputName) {
    this.setState({
      [`new${toTitleCase(inputName)}`]: event.target.value
    })
  }


  render() {
    const { addContact, loadSamples, removeContact, updateQueryString } = this.props;

    return (
      <header>
        <h1>Контакты | Contacts</h1>
        <div className="btns-bar"> {/* Buttons Bar */}
          <button className="search-box" onClick={this.handleShowSearchBtnClick}>
            <i className="fa fa-search"></i>
          </button>
          <button className="populate-list" onClick={loadSamples}>
            <i className="fa fa-users"></i>
            <i className="fa fa-plus"></i>
          </button>
          <button className="add-contact" onClick={this.handleShowAddFormBtnClick}>
            <i className="fa fa-user-plus"></i>
          </button>
          <button className="pull-contacts">
            <i className="fa fa-cloud-download"></i>
          </button>
          <button className="push-contacts">
            <i className="fa fa-cloud-upload"></i>
          </button>
        </div>


        {/* Search Box */}
          <input type="text" className="search-bar" value={this.props.queryString}
            onChange={this.handleSearchInputChange}
            name="query" placeholder="Введите строку поиска" hidden={!this.state.isSearchBoxVisible}
          />

        {/* Add Contact Form */}
        <form className="add-contact" hidden={!this.state.isAddFormVisible}
          onSubmit={this.handleAddFormSubmit}
        >
          <p>
            <label htmlFor="name"><i className="fa fa-user"></i></label>
            <input className="form-control" type="text" name="name"  value={this.state.newName}
              onChange={(e) => this.handleInputChange(e, 'name')}
            />
          </p>
          <p>
            <label htmlFor="image"><i className="fa fa-file-image-o"></i></label>
            <textarea name="image" cols="30" value={this.state.newImage}
              onChange={(e) => this.handleInputChange(e, 'image')}
            ></textarea>
          </p>
          <p>
            <label htmlFor="info"><i className="fa fa-info"></i></label>
            <textarea name="info" cols="30" value={this.state.newInfo}
              onChange={(e) => this.handleInputChange(e, 'info')}
            ></textarea>
          </p>
          <p>
            <label htmlFor="tel"><i className="fa fa-phone"></i></label>
            <input className="form-control" type="tel" name="tel"  value={this.state.newTel}
              onChange={(e) => this.handleInputChange(e, 'tel')}
            />
          </p>
          <p>
            <label htmlFor="telegram"><i className="fa fa-paper-plane-o"></i></label>
            <input className="form-control" type="text" name="telegram" value={this.state.newTelegram}
              onChange={(e) => this.handleInputChange(e, 'telegram')}
            />
          </p>
          <button type="submit">
            <i className="fa fa-floppy-o"></i> Сохранить
          </button>
        </form>

      </header>
    )
  } // render()

} // Header class

export default Header
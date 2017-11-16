import React from 'react'

class Header extends React.Component {
  constructor(props) {
    super(props);

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

  render() {
    const { addContact, loadSamples, removeContact, updateQueryString } = this.props;

    return (
      <header>
        <h1>Контакты | Contacts</h1>
        <div className="btns-bar"> {/* Buttons Bar */}
          <button className="search-box" onClick={() =>
            this.setState({
              isSearchBoxVisible: !this.state.isSearchBoxVisible
            })
          }>
            <i className="fa fa-search"></i>
          </button>
          <button className="populate-list" onClick={loadSamples}>
            <i className="fa fa-users"></i>
            <i className="fa fa-plus"></i>
          </button>
          <button className="add-contact" onClick={() =>
            this.setState({
              isAddFormVisible: !this.state.isAddFormVisible
            })
          }>
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
            onChange={
              (event) => {
                const value = event.target.value;
                this.props.updateQueryString(value);
              }
            }
            name="query" placeholder="Введите строку поиска" hidden={!this.state.isSearchBoxVisible}
          />

        {/* Add Contact Form */}
        <form className="add-contact" hidden={!this.state.isAddFormVisible}
          onSubmit={ event => {
            event.preventDefault();
            console.log(this.state);
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
          }
        }>
          <p>
            <label htmlFor="name"><i className="fa fa-user"></i></label>
            <input className="form-control" type="text" name="name"  value={this.state.newName}
              onChange={ (event) =>
                this.setState({newName: event.target.value})
              }
            />
          </p>
          <p>
            <label htmlFor="image"><i className="fa fa-file-image-o"></i></label>
            <textarea name="image" cols="30" value={this.state.newImage}
              onChange={ (event) =>
                this.setState({newImage: event.target.value})
              }
            ></textarea>
          </p>
          <p>
            <label htmlFor="info"><i className="fa fa-info"></i></label>
            <textarea name="info" cols="30" value={this.state.newInfo}
              onChange={ (event) =>
                this.setState({newInfo: event.target.value})
              }
            ></textarea>
          </p>
          <p>
            <label htmlFor="tel"><i className="fa fa-phone"></i></label>
            <input className="form-control" type="tel" name="tel"  value={this.state.newTel}
              onChange={ (event) =>
                this.setState({newTel: event.target.value})
              }
            />
          </p>
          <p>
            <label htmlFor="telegram"><i className="fa fa-paper-plane-o"></i></label>
            <input className="form-control" type="text" name="telegram" value={this.state.newTelegram}
              onChange={ (event) =>
                this.setState({newTelegram: event.target.value})
              }
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
import React from 'react'

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isCardVisible: false,
      isEditFormVisible: false,
      editedName: 'Антон Логвинов',
      editedImage: '../img/man.svg',
      editedInfo: '',
      editedTel: '',
      editedTelegram: ''
    }
  }

  render() {
    const {name, image, info, tel, telegram, removeContact} = this.props;

    return (
      <div className="contact" data-name={name}>
        <div className="header">
          <p data-name={name} onClick={
            this.setState({
              isCardVisible: !this.state.isCardVisible
            })
          }>{name}</p>

          <button className="edit" data-name={name} onClick={
            this.setState({
              isEditFormVisible: !this.state.isEditFormVisible
            })
          }>
            <i className="fa fa-pencil"></i>
          </button>
          <button className="remove" data-name={name} onClick={removeContact}>
            <i className="fa fa-trash-o"></i>
          </button>
        </div>

        <div className="card" hidden={!this.state.isCardVisible}>
          <img src={`client/img/${image}`} alt="<img/>" />
          <p>{info}</p>
          <p>
            <label htmlFor="tel"><i className="fa fa-phone"></i></label>
            {tel}
          </p>
          <p>
            <label htmlFor="tel"><i className="fa fa-paper-plane-o"></i></label>
            {telegram}
          </p>
        </div>

      {/* Edit Contact Form */}
        <form className="edit-contact" hidden={!this.state.isEditFormVisible}
          onSubmit={(event) => {
            event.preventDefault();
            console.log(event);
          }
        }>
          <p>
            <label htmlFor="name"><i className="fa fa-user"></i></label>
            <input className="form-control" type="text" name="name" value={this.state.editedName}
              onChange={
                (event) =>
                  this.setState({
                    editedName: event.target.value
                  })
            }/>
          </p>
          <p>
            <label htmlFor="image"><i className="fa fa-file-image-o"></i></label>
            <textarea name="image" value={this.state.image} cols="30"></textarea>
          </p>
          <p>
            <label htmlFor="info"><i className="fa fa-info"></i></label>
            <textarea name="info" defaultValue="Вин Дизель среди обзорщиков" cols="30"></textarea>
          </p>
          <p>
            <label htmlFor="tel"><i className="fa fa-phone"></i></label>
            <input className="form-control" type="tel" name="tel" defaultValue="1010" />
          </p>
          <p>
            <label htmlFor="telegram"><i className="fa fa-paper-plane-o"></i></label>
            <input className="form-control" type="text" name="telegram" defaultValue="toha10iz10" />
          </p>
          <button type="submit">
            <i className="fa fa-floppy-o"></i> Сохранить
          </button>
        </form>
      </div>  /* .contact */
    )
  } // render()

} // Contact class



export default Contact
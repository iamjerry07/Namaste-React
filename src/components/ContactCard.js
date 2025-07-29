import React from "react";

class ContactCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="top-contact">
        <h4>name : {this.props.name}</h4>
      </div>
    );
  }
}

export default ContactCard;

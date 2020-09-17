import React from "react";
import PropTypes from "prop-types";

export default class App extends React.Component {
  static propTypes = {
    items: PropTypes.array.isRequired
  };

  render() {
    const { items } = this.props;
    return (
      <div className="nav">
        <ul>
          {items.map(i =>
            <li><a href={i.url}>{i.name}</a></li>
          )}
        </ul>
      </div>
    );
  }
}

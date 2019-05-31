import React, { Component } from "react";

export default class breadcrumbs extends Component {
  handleClick = link => {
    this.props.removeBread(link);
  };
  getItem = (item, lastIndex) => {
    return item.name !== lastIndex.name ? (
      <a href={item.url} onClick={() => this.handleClick(item)}>
        {item.name}
      </a>
    ) : (
        <span>{item.name}</span>
      );
  };
  render() {
    const { breadcrumbsItems } = this.props;
    const [lastIndex] = breadcrumbsItems.slice(-1);
    return (
      <div className="breadCrumbs">
        <div className="container">
          <ul>
            {breadcrumbsItems.map((link, index) => (
              <li key={index}>{this.getItem(link, lastIndex)}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

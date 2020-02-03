import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Card.css";

export default class Card extends Component {
  render = () => {
    const { item, onCollapse, onExpand } = this.props;
    return (
      <div className={`card-outer`}>
        <div className={`card-inner ${item.data.type}`}>
          {item.hasChildren && (
            <div onClick={() => (item.isExpanded ? onCollapse() : onExpand())}>
              {item.isExpanded ? "-" : "+"}
            </div>
          )}
          {item.data.name}
          {item.data.url && (
            <span className={`card-url`}>
              <a href={item.data.url} target="_blank">
                Go
              </a>
            </span>
          )}
        </div>
      </div>
    );
  };
}

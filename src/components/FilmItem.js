import React, {Component} from "react";
import "./FilmItem.css"
class FilmItem extends Component {
  render() {
    return (
      <li className="film-item">
        <a href={this.props.film.url}>{this.props.film.name}</a>
      </li>
    )
  }
}

export default FilmItem;

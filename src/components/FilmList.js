import React, {Component} from "react";
import FilmItem from "./FilmItem.js"
import "./FilmList.css"


class FilmList extends Component {

  render() {
    const filmNodes = this.props.films.map((film) => {
      return (
        <FilmItem film={film} key={film.id} />
      );
    });
    return (
      <div className="film-list">
       <ul>
        {filmNodes}
      </ul>

      </div>

    )
  }
}

export default FilmList;

import React, { Component } from "react";
import { getMovies } from "../fakeServer/moviesList";
import { getGenres } from "../fakeServer/genres";
import { Link } from "react-router-dom";
import Like from "./Like";
import Pagination from "./Pagination";
import paginate from "../utils/paginate";
import Sortnav from "./Sortnav";
import MovieForm from './moviform';

class Movies extends Component {
  state = {
    listItem: [],
    genres: [],
    PageSize: 3,
    currentPage: 1,
    selectedGenre: { id: 0, name: "All" },
  };
  componentDidMount() {
    const genres = [{ id: 0, name: "All" }, ...getGenres()];
    this.setState({ listItem: getMovies(), genres: genres });
  }
  DeleteEve = (id) => {
    const Movies = this.state.listItem.filter((item) => item.id != id);
    this.setState({ listItem: Movies });
  };
  LikeEve = (movi) => {
    const Movies = [...this.state.listItem];
    const Index = Movies.indexOf(movi);
    Movies[Index] = { ...Movies[Index] };
    Movies[Index].likeState = !Movies[Index].likeState;
    this.setState({ listItem: Movies });
  };
  handleChange = (page) => {
    this.setState({ currentPage: page });
  };
  handleFilter = (genre) => {
    const Movies =
      genre.name == "All"
        ? getMovies()
        : getMovies().filter((item) => item.genre.name === genre.name);
    this.setState({ listItem: Movies, selectedGenre: genre,currentPage:1 });
  };
  render() {
    if (this.state.listItem.length == 0) return <h3>No Thing to show</h3>;
    const { length: count } = this.state.listItem;
    const {
      genres: genreList,
      listItem: movieList,
      currentPage,
      PageSize,
    } = this.state;
    const movies = paginate(movieList, currentPage, PageSize);
    return (
      <div className="container mt-5">
        <h4 className="text-center mb-5">We have {movieList.length} Movies</h4>
        <div className="row">
          <div className="col-3">
            <Sortnav
              items={genreList}
              onItemSelected={this.handleFilter}
              selectedGenre={this.state.selectedGenre}
            />
          </div>
          <div className="col-9">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Genre</th>
                  <th>Show</th>
                  <th>Like</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {movies.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>
                      <Link to={`/movies/${item.name}`}>{item.name}</Link>
                    </td>
                    <td>{item.genre.name}</td>
                    <td>{item.dailycount}</td>
                    <td>
                      {
                        <Like
                          likeState={item.likeState}
                          LikeClick={() => this.LikeEve(item)}
                        />
                      }
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => this.DeleteEve(item.id)}
                      >
                        <span className="fa fa-remove" title="Delete"></span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <Pagination
          ItemCount={count}
          PageSize={this.state.PageSize}
          onChange={this.handleChange}
          currentPage={this.state.currentPage}
        />
      </div>
    );
  }
}

export default Movies;

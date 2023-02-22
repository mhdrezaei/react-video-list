import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

console.log(getMovies());
export class Videos extends Component {
  state = {
    videos: getMovies(),
  };

  handleDelete(video) {
    const videos = this.state.videos.filter((vid) => video._id != vid._id);
    this.setState({
      videos,
    });
  }

  render() {
    const { length: count } = this.state.videos;

    if (count === 0) return <p> there are no video in database</p>;
    return (
      <React.Fragment>
        <p>Showing {count} movies in the database.</p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.videos.map((video) => (
              <tr key={video._id}>
                <td>{video.title}</td>
                <td>{video.genre.name}</td>
                <td>{video.numberInStock}</td>
                <td>{video.dailyRentalRate}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => this.handleDelete(video)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Videos;

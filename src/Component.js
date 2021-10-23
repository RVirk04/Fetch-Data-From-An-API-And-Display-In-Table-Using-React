import React from "react";

const api = "https://swapi.dev/api/people/.json";

export default class Data extends React.Component {
  constructor() {
    super();
    this.state = {
      items: []
    };
  }

  async componentDidMount() {
    const response = await fetch(api);
    const data = await response.json();
    this.setState({ items: data.results });
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Height</th>
            <th>DOB</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {this.state.items.map(function (item, index) {
            return (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.height}</td>
                <td>{item.birth_year}</td>
                <td>{item.gender}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

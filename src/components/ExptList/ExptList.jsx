import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./exptlist.css"

export default class ExptList extends Component {
  render() {
    return (
      <div className="expt-list">
        <h3 className="loe-heading">
            List of Experiments
        </h3>
        <ul>
          <li>
            <Link to="/expt1">Experiment 1</Link>
          </li>
          <li>
            <Link to="/expt2">Experiment 2</Link>
          </li>
          <li>
            <Link to="/expt3">Experiment 3</Link>
          </li>
          <li>
            <Link to="/expt4">Experiment 4</Link>
          </li>
          <li>
            <Link to="/expt5">Experiment 5</Link>
          </li>
          <li>
            <Link to="/expt6">Experiment 6</Link>
          </li>
          <li>
            <Link to="/expt7">Experiment 7</Link>
          </li>
          <li>
            <Link to="/expt8">Experiment 8</Link>
          </li>
        </ul>
      </div>
    );
  }
}

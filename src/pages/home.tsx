import React from "react";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/1">1. Auto Delete Todo List</Link>
        </li>
      </ul>
    </nav>
  );
};

export default HomePage;

import React from 'react';
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <>
      <div>
        <p>This page does not exist! Please, go to</p>
        <Link to={'/'}> Home page </Link>
        <p>and try again.</p>
      </div>
    </>
  );
};

export default NotFoundPage;

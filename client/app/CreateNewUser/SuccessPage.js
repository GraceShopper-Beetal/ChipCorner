import React from 'react';
import { Link } from 'react-router-dom';

export default function SuccessPage() {
  return (
    <div className="success-page">
      <h2>Success!</h2>
      <h2>Please Log in at the homepage.</h2>
      <Link to="/"> Back to Home </Link>
    </div>
  );
}

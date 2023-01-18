import React from 'react';
import { Spinner } from 'react-bootstrap';

import './showSpinner.css';
const ShowSpinner = () => {
  return <Spinner className="spinner" animation="border" variant="secondary" />;
};

export default ShowSpinner;

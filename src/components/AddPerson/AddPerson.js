import React from 'react';

import './AddPerson.css';

const AddPerson = ({ personAdded }) => {
  return (
    <React.Fragment>
      <button onClick={personAdded}>
        <span>Add Person </span>
      </button>
    </React.Fragment>
  );
};

export default AddPerson;

import PropTypes from 'prop-types';
import React from 'react';

const SuccessMessage = ({ msg, dismissMessage }) => {
  return (
    <div
      className="alert alert-success alert-dismissible fade show text-center"
      role="alert"
    >
      <strong>{msg}</strong>
      <button
        type="button"
        className="close"
        onClick={() => dismissMessage()}
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};

SuccessMessage.propTypes = {
  msg: PropTypes.string,
  dismissMessage: PropTypes.func.isRequired
};
export default SuccessMessage;

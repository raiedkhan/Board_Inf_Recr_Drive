import React, { useState } from "react";
import { getGitHubData } from "../actions/githubActions";
import { connect } from "react-redux";

const InputComponent = (props) => {
  const { getGitHubData } = props;
  const [userName, setUserName] = useState("");

  // function to invoke when search button is clicked
  const onSubmitHandler = (e) => {
    e.preventDefault();
    getGitHubData(userName);
  };

  return (
    <form onSubmit={(e) => onSubmitHandler(e)}>
      <div className='input-container'>
        <input
          type='text'
          className='input-field'
          placeholder='Type your GitHub username'
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
        <button className='button-submit' type='submit'>
          Compare
        </button>
      </div>
    </form>
  );
};

InputComponent.propTypes = {};

export default connect(null, { getGitHubData })(InputComponent);

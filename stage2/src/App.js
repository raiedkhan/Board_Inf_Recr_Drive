import React from "react";
import "./App.css";
import { Header, InputComponent, GitHubCards } from "./components";
import { connect } from "react-redux";

function App(props) {
  const { isLoading, gitHubData } = props;
  return (
    <div className='App'>
      <Header />
      <InputComponent />
      {isLoading ? (
        <>
          <img
            src='https://media.giphy.com/media/YMM6g7x45coCKdrDoj/giphy.gif'
            alt='loader'
            className='loader'
          />
        </>
      ) : (
        <>
        {/* Sorting data on the basis of their public repos and followers */}
          {gitHubData
          .sort((a,b)=>b.public_repos-a.public_repos)
          .sort((a,b)=>b.followers-a.followers)
          .map((data) => (
            <GitHubCards data={data} key={data.id} />
          ))}
        </>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  isLoading: state.gitHubReducer.isLoading,
  gitHubData: state.gitHubReducer.gitHubData,
  error: state.gitHubReducer.error,
});

export default connect(mapStateToProps)(App);

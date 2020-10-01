import React from "react";
import PropTypes from "prop-types";
import { Card} from "antd";
import {CloseCircleOutlined} from "@ant-design/icons"
import { connect } from "react-redux";
import { delGitHubData } from "../actions/githubActions";
const GitHubCards = (props) => {
  //const { delGitHubData } = props;
  const { data } = props;
  const onClickCross=()=>{
    props.delGitHubData(data.id);
  }
  return (
    <div>   
      <Card className='cards' title={data.login} style={{fontSize:20}} extra={<CloseCircleOutlined onClick={onClickCross} className="close-button"/>}> 
        <div className='card-content'>
          <div className='avatar-cont'>
            <img src={data.avatar_url} alt='avatar' className='avatar' />
          </div>
          <div className='card-detail'>
            <div>
              <div className='icon-box'>
                <div className='count'>{data.followers}</div>
                <div className='property'>Followers</div>
              </div>
              <div className='icon-box'>
                <div className='count'>{data.following}</div>
                <div className='property'>Following</div>
              </div>
            </div>
            <div>
              <div className='icon-box'>
                <div className='count'>{data.public_repos}</div>
                <div className='property'>Repos</div>
              </div>
              <div className='icon-box'>
                <div className='count'>{data.public_gists}</div>
                <div className='property'>Gists</div>
              </div>
            </div>
          </div>
        </div>
      </Card> 
    </div>
  );
};

GitHubCards.defaultProps = {
  data: {},
};

GitHubCards.propTypes = {
  data: PropTypes.object,
};
const mapDispatchToProps=(dispatch)=>{
  return{
    delGitHubData:(id)=>{
      dispatch(delGitHubData(id))
    }
  }
}
export default connect(null,mapDispatchToProps)(GitHubCards);


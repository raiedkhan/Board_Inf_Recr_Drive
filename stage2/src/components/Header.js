import React from "react";
import { Typography } from "antd";
import { GithubOutlined } from "@ant-design/icons";

const { Title } = Typography;

const Header = (props) => {
  return (
    <div className='header-cont'>
      <GithubOutlined className='github-icon' />
      <Title className='heading'>GitHub Compare</Title>
    </div>
  );
};

export default Header;

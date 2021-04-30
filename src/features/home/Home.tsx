import React, { FC } from "react";
import { Diaries } from "../diary/Diaries";
import { Editor } from "../entry/Editor";
import { Heading, Flex } from "@chakra-ui/react";
import { clearToken } from "../auth/authSlice";

import { useHistory } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
// import { Box, Heading, Flex, Text, Button } from "@chakra-ui/core";
const Home: FC = () => {
  const dispatch = useDispatch();

  const history = useHistory();
  // const dispatch = useAppDispatch();
  const clearTokenx = useSelector((state) => state);

  console.log(clearTokenx, "get remove token");
  const onLogout = () => {
    dispatch(clearToken());
  };
  return (
    <div>
      <div className="header">
        <h2>DIARY APP</h2>
        {/* <button onClick={onLogout}>LOGOUT</button> */}
      </div>

      <div className="two-cols">
        <div className="left">
          <Diaries />
        </div>
        <div className="right">
          <Editor />
        </div>
      </div>
    </div>
  );
};

export default Home;

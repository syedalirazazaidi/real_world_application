import React, { FC, lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../rootReducer";

import { Center, Flex } from "@chakra-ui/react";

const Auth = lazy(() => import("../features/auth/Auth"));
const Home = lazy(() => import("../features/home/Home"));

const App: FC = () => {
  const isLoggedIn = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  return (
    <Router>
      <Switch>
        <Route path="/">
          {/* <Flex justify="center" h="100vh" w="100vw" align="center">
          <Center w="100%"> */}
          <Suspense fallback={<p>Loading...</p>}>
            {/* <Flex justify="center" h="100vh" w="100vw" align="center"> */}
            {/* <Center w="100%"> */}
            <Suspense fallback={<p>Loading...</p>}>
              {isLoggedIn ? <Home /> : <Auth />}
            </Suspense>
            {/* <Auth /> */}
            {/* </Center> */}
            {/* </Flex> */}
            {/* {isLoggedIn ? <Home /> : <Auth />} */}
          </Suspense>
          {/* <Center >
          </Flex> */}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;

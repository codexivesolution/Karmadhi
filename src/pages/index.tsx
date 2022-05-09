import React, { useEffect } from "react";
import { Route, Switch, Redirect, useLocation } from "react-router";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ApiGet } from "../helper/API/ApiData";
import AuthStorage from "../helper/AuthStorage";
import Layout from "../layouts/Layout";
import { changeLoginState } from "../redux/actions/loginAction";
import Homepage from "./homepage/Homepage";
import OurService from "./oursrvice/OurService";

const Index = () => {
  const pathname = ["ourservice",]
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();


  return (
    <>

      <Switch>
        {/* <Route
          exact
          path={[
            "/",
            "/homepage",
            "/ourservice"
          ]}
        > */}
        {/* <Layout> */}
        <RouteWrapper
          exact={true}
          path="/"
          component={Homepage}
          layout={Layout}
          isPrivateRoute={true}
        />

        <RouteWrapper
          exact={true}
          path="/ourservice"
          component={OurService}
          layout={Layout}
          isPrivateRoute={true}
        />


        {/* </Layout> */}
        {/* </Route> */}
        <Route
          exact
          path={[
            "/login",
            "/findemail",
            "/findpassword",
            "/Registration"
          ]}
        >

        </Route>

      </Switch>
    </>
  );
};

export default Index;

interface RouteWrapperProps {
  component: any;
  exact: boolean;
  layout: any;

  path: string;
  isPrivateRoute: boolean;
}

function RouteWrapper({
  component: Component,
  isPrivateRoute,
  layout: Layout,
  ...rest
}: RouteWrapperProps) {
  const history = useHistory();
  const isAuthenticated: boolean = isPrivateRoute
    ? AuthStorage.isUserAuthenticated()
    : true;
  return (
    <>
      <Route {...rest} render={(props) =>
        <Layout>
          <Component {...props} />
        </Layout>
      } />

      {/* {isAuthenticated ? (
        <Route {...rest} render={(props) => <Layout> <Component {...props} /> </Layout>} />
      ) : (
        history.push("/")
      )} */}
    </>
  );
}

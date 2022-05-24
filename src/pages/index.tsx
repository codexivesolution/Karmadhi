import React, { useEffect } from "react";
import { Route, Switch, Redirect, useLocation } from "react-router";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ApiGet } from "../helper/API/ApiData";
import AuthStorage from "../helper/AuthStorage";
import Layout from "../layouts/Layout";
import { changeLoginState } from "../redux/actions/loginAction";
import Homepage from "./homepage/Homepage";
import OurService from "./ourservice/OurService";
import SoftWareTesting from "./softwareTesting/SoftWareTesting";
import ContactUs from "./cotactus/ContactUs";
import Blog from "./Blog/Blog";

const Index = () => {



  return (
    <>

      <Switch>

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

        <RouteWrapper
          exact={true}
          path="/softwaretesting"
          component={SoftWareTesting}
          layout={Layout}
          isPrivateRoute={true}
        />

        <RouteWrapper
          exact={true}
          path="/contactus"
          component={ContactUs}
          layout={Layout}
          isPrivateRoute={true}
        />
        <RouteWrapper
          exact={true}
          path="/blog"
          component={Blog}
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

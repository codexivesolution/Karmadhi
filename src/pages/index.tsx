import React, { useEffect } from "react";
import { Route, Switch, Redirect, useLocation } from "react-router";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ApiGet } from "../helper/API/ApiData";
import AuthStorage from "../helper/AuthStorage";
import Layout from "../layouts/Layout";
import { changeLoginState } from "../redux/actions/loginAction";
import Homepage from "./homepage/Homepage";
import { ProjectData } from "./project/ProjectData";
import { Techanology } from "./techanology/Techanology";
import { Certification } from "./certification/Certification";
import { EmployesData } from "./employes/EmployesData";
import { ContectUs } from "./contectUs/ContectUs";
import { Position } from "./position/Position";
import { Service } from "./service/Service";
import { Blog } from "./blog/Blog";
import { Login } from "./login/Login";
import { Jobs } from "./jobs/Jobs";
const Index = () => {

  const pathname = ["",]
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    // if (AuthStorage.isUserAuthenticated()) {
    //   ApiGet("user/validate")
    //     .then((res) => {
    //       dispatch(changeLoginState(true));
    //     })
    //     .catch((error) => {
    //       AuthStorage.deauthenticateUser();
    //       history.push("/");
    //     });
    // }
    // else {
    //   if (!pathname.includes(location.pathname)) {
    //     history.push("/");
    //   }
    // }
  }, []);

  return (
    <>

      <Switch>
        <Route
          exact
          path={[
            "/",
            "/homepage"
          ]}
        >


          <Layout>
            <Switch>
              <RouteWrapper
                exact={true}
                path="/"
                component={Homepage}

                isPrivateRoute={false}
              />


            </Switch>
          </Layout>
        </Route>


        <Route
          exact
          path={[
            // "/login",
            "/findemail",
            "/findpassword",
            "/Registration"
          ]}
        >

        </Route>


        <RouteWrapper
          exact={true}
          path="/project"
          component={ProjectData}

          isPrivateRoute={false}
        />

        <RouteWrapper
          exact={true}
          path="/employ"
          component={EmployesData}

          isPrivateRoute={false}
        />

        <RouteWrapper
          exact={true}
          path="/techanology"
          component={Techanology}

          isPrivateRoute={false}
        />
        <RouteWrapper
          exact={true}
          path="/certification"
          component={Certification}

          isPrivateRoute={false}
        />

        <RouteWrapper
          exact={true}
          path="/position"
          component={Position}

          isPrivateRoute={false}
        />

        <RouteWrapper
          exact={true}
          path="/contectus"
          component={ContectUs}

          isPrivateRoute={false}
        />

        <RouteWrapper
          exact={true}
          path="/service"
          component={Service}

          isPrivateRoute={false}
        />

        <RouteWrapper
          exact={true}
          path="/login"
          component={Login}

          isPrivateRoute={false}
        />

        <RouteWrapper
          exact={true}
          path="/blog"
          component={Blog}

          isPrivateRoute={false}
        />

        <RouteWrapper
          exact={true}
          path="/jobs"
          component={Jobs}

          isPrivateRoute={false}
        />

        {/* <RouteWrapper
          exact={true}
          path="/projectGetData"
          component={ProjectGetData}

          isPrivateRoute={false}
        /> */}
      </Switch>
    </>
  );
};

export default Index;

interface RouteWrapperProps {
  component: any;
  exact: boolean;
  path: string;
  isPrivateRoute: boolean;
}

function RouteWrapper({
  component: Component,
  isPrivateRoute,
  ...rest
}: RouteWrapperProps) {
  const history = useHistory();
  const isAuthenticated: boolean = isPrivateRoute
    ? AuthStorage.isUserAuthenticated()
    : true;
  console.log(isAuthenticated);

  return (
    <>
      {isAuthenticated ? (
        <Route {...rest} render={(props) => <Component {...props} />} />
      ) :
        (
          // history.push("/")
          ''
        )
      }
    </>
  );
}

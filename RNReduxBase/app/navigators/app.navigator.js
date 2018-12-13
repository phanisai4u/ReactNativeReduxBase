import {
  createSwitchNavigator,
  createStackNavigator,
  NavigationActions,
  createDrawerNavigator
} from "react-navigation";
import { BackHandler, Dimensions } from "react-native";
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

export const AppNavigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: DrawerStack,
    Auth: AuthStack
  },
  {
    initialRouteName: "AuthLoading"
  }
);

class AppWithNavigation extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired
  };

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
  }
  onBackPress = () => {
    const { dispatch, nav } = this.props;
    if (nav.index === 0) {
      return false;
    }
    dispatch(NavigationActions.back());
    return true;
  };

  render() {
    const { dispatch, nav } = this.props;
    return (
      <AppNavigator
        navigation={{
          dispatch,
          state: nav,
          addListener
        }}
      />
    );
  }
}

const mapStateToProps = state => ({
  nav: state.nav
});

export const AppWithNavigationState = connect(mapStateToProps)(
  AppWithNavigation
);

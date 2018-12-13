/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {AsyncStorage,AppState, StyleSheet, Text, View} from 'react-native';
import { Provider } from "react-redux";
import { CreateStoreWithInitialState } from "./store";


export default class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      isStoreLoading: true,
      store: CreateStoreWithInitialState()
    };
  }

  async componentWillMount() {
    var self = this;
    AppState.addEventListener("change", this._handleAppStateChange.bind(this));
    this.setState({ isStoreLoading: true });
    AsyncStorage.getItem("completeStore")
      .then(value => {
        if (value) {
          let initialStore = JSON.parse(value);
          // console.log(initialStore);
          const store = CreateStoreWithInitialState({
            ...initialStore,
          });
          self.setState({ store });
        }
        self.setState({ isStoreLoading: false });
      })
      .catch(error => {
        self.setState({ isStoreLoading: false });
      });
  }

  _handleAppStateChange(currentAppState) {
    // let storingValue = JSON.stringify({...this.state.store.getState(), auth: {}})
    console.log(currentAppState);
    try {
      let storingValue = JSON.stringify({
        ...this.state.store.getState(),
      });
      AsyncStorage.setItem("completeStore", storingValue);
      console.log(currentAppState);
    } catch (err) {
      console.log(err);
      AsyncStorage.setItem("completeStore", "{}");
      console.log(currentAppState);
    }
  }

  componentWillUnmount() {
    AppState.removeEventListener(
      "change",
      this._handleAppStateChange.bind(this)
    );
  }

  render() {
    return  (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    ) 
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#999999"
  },
  welcome: {
    fontSize: 12,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  loadingBackgroundStyle: {
    backgroundColor: '#F1F1F1'
  }
});


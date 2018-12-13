import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import { bindActionCreators } from "redux";

class Start extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text> Start</Text>
      </View>
    );
  }
}

const mapStateToProps = ({auth}) => ({
  userToken: auth.userToken
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
     
    },
    dispatch
  );
};


export const StartScreen = connect(mapStateToProps, mapDispatchToProps)(Start);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#AAAAAA",
  },
});

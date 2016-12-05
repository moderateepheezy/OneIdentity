'use strict';
 
 
import Contacts from 'react-native-contacts';
 import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  NavigatorIOS,
  View
} from 'react-native';


var styles = StyleSheet.create({
  description: {
    fontSize: 20,
    textAlign: 'center',
    color: 'gray'
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  container: {
    flex: 1
  }
});


class Feeds extends React.Component{
  render(){
    return( 
        <NavigatorIOS
          style={styles.container}
          initialRoute={{
            title: 'FeedsPage',
            component: FeedsPage,
          }}/>
      );
  }
}
 
class FeedsPage extends React.Component {


  render() {
    Contacts.getAll((err, contacts) => {
      if(err && err.type === 'permissionDenied'){
        // x.x
      } else {
        console.log(contacts)
      }
    })

    return (
      <View style={styles.background}>
        <Text style={styles.description}>
          Welcome to your React Native, this is your second Tab! 
        </Text>
      </View>
    )
  }
}
 
module.exports = Feeds;
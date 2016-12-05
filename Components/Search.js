'use strict';
 

 import Icon from 'react-native-vector-icons/Ionicons';

 import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  ActivityIndicator,
  NavigatorIOS,
  Image
} from 'react-native';

import { 
  Container, 
  Header, 
  InputGroup, 
  Input, 
  Button 
} from 'native-base';


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
  navContainer: {
    flex: 1
  },

  errorText: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    marginTop: 80
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  },

  flowRight: {
  flexDirection: 'row',
  alignItems: 'center',
  alignSelf: 'stretch',
  borderWidth: 1,
  borderColor: 'gray',
  paddingRight: 10,
  paddingLeft: 10,  
  borderRadius: 8,
},
buttonText: {
  fontSize: 18,
  color: 'white',
  alignSelf: 'center'
},
button: {
  height: 36,
  flex: 1,
  flexDirection: 'row',
  backgroundColor: '#48BBEC',
  borderColor: '#48BBEC',
  borderWidth: 1,
  borderRadius: 8,
  marginBottom: 10,
  alignSelf: 'stretch',
  justifyContent: 'center'
},
searchInput: {
  height: 36,
  padding: 4,
  marginRight: 5,
  flex: 7,
  fontSize: 18,
  color: '#48BBEC'
}
});


class Search extends React.Component{
  render(){
    return( 
        <NavigatorIOS
          style={styles.navContainer}
          initialRoute={{
            title: 'Search',
            component: SearchPage,
          }}/>
      )

  }
}
 
class SearchPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.flowRight}>
          <TextInput
            style={styles.searchInput}
            placeholder='Find your friends'/>
          <Icon name="ios-search" size={30} color="gray" />
        </View>
        <View style={styles.errorText}>
          <Text style={styles.description}>
           No result found...!
          </Text>
        </View>
      </View>
    );
  }
}
 
module.exports = Search;
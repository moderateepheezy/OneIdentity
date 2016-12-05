/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

var Mail = require('./mail.ios');
var Feeds = require('./feeds.ios');
var Search = require('./Components/Search');
var Contacts = require('./Components/Contacts');
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TabBarIOS,
  NavigatorIOS,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';


const styles = StyleSheet.create({
  navigator: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  tabContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    color: 'white',
  },
  button: {
    marginTop: 20,
    padding: 8,
    backgroundColor: 'white',
    borderRadius: 4,
  },
});


export default class OneIdentity extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedTab: 'mail'
    }
  }

  render() {
    return (
      <TabBarIOS selectedTab={this.state.selectedTab}>
        <Icon.TabBarItemIOS
            selected={this.state.selectedTab === 'mail'}
            title="Mail"
            iconName="ios-mail-outline"
            selectedIconName="ios-mail"
            onPress={() => {
              this.setState({ selectedTab: 'mail'});
            }}>
            <Mail />
          </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
          selected={this.state.selectedTab == 'welcome'}
          title="Feeds"
          iconName="ios-home-outline"
          selectedIconName="ios-home"
          onPress={() => {
              this.setState({selectedTab: 'welcome'});
            }}>
            <Feeds/>
          </Icon.TabBarItemIOS>
          <Icon.TabBarItemIOS
            selected={this.state.selectedTab === 'search'}
            title="Search"
            iconName="ios-search-outline"
            selectedIconName="ios-search"
            onPress={() => {
              this.setState({ selectedTab: 'search'});
            }}>
            <Search />
          </Icon.TabBarItemIOS>
          <Icon.TabBarItemIOS
            selected={this.state.selectedTab === 'contact'}
            title="Profile"
            iconName="ios-contacts-outline"
            selectedIconName="ios-contacts"
            onPress={() => {
              this.setState({ selectedTab: 'contact'});
            }}>
            <Contacts />
          </Icon.TabBarItemIOS>
          
        </TabBarIOS>
    );
  }
}

AppRegistry.registerComponent('OneIdentity', () => OneIdentity);

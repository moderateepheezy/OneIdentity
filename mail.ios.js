'use strict';
 
 
 import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ListView,
  NavigatorIOS,
  TouchableHighlight,
  View
} from 'react-native';

import Row from './Components/EmailRow'
import Header from './Components/Header'
import SectionHeader from './Components/SectionHeader'
import Footer from './Components/Footer'
import demoData from './data'


var styles = StyleSheet.create({
  description: {
    fontSize: 20,
    textAlign: 'center',
    color: '#FFFFFF'
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  container: {
    flex: 1,
    marginTop: 0,
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
});


class Mail extends React.Component{
  render(){
    return( 
        <NavigatorIOS
          style={styles.container}
          initialRoute={{
            title: 'Mail',
            component: MailPage,
          }}/>
      )

  }
}

var partners = [{title: 'President', name: 'chris'}, {title: 'Manager', name: 'Melissa'}, {title: 'CEO', name: 'Amanda'}]
 
class MailPage extends Component {

  constructor(props) {
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(this._partners())
    }
  }

  _partners(){
    var dataBlob = []
    for (var ii = 0; ii < partners.length; ii++) {
      dataBlob.push(partners[ii]);
    }
    return dataBlob;
  }

  _renderRow(rowData) {
    return <Row
          rowData={rowData}
    />
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          style={styles.container}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
          renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
          renderHeader={() => <Header />}
          renderFooter={() => <Footer />}
        />
      </View>
    );
  }
}
 
module.exports = Mail;
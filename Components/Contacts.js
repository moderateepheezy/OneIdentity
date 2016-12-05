'use strict'

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ListView,
  NavigatorIOS,
  View
} from 'react-native';

import Row from './Row'
import Header from './Header'
import SectionHeader from './SectionHeader'
import Footer from './Footer'
import demoData from '../data'

var REQUEST_URL = 'http://www.unoidentity.com:8900/api/v1/users/28/contacts';

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
  },
  emptyPage: {
    backgroundColor: "#ffffff"
  }
});



class Contacts extends React.Component{

  render(){
    return( 
        <NavigatorIOS
          ref="nav"
          style={styles.container}
          initialRoute={{
            title: 'Contacts',
            component: ContactsPage
          }}/>
      )

  }
}
 
class ContactsPage extends Component {
      constructor(props) {
    super(props)

    var getSectionData = (dataBlob, sectionId) => dataBlob[sectionId];
    var getRowData = (dataBlob, sectionId, rowId) => dataBlob[`${rowId}`];

    var ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged : (s1, s2) => s1 !== s2,
      getSectionData,
      getRowData,
    });

    const { dataBlob, sectionIds, rowIds } = this.formatData(demoData);



    this.state = {
      dataSource: ds.cloneWithRowsAndSections(dataBlob, sectionIds, rowIds),
      demoData: []
    }
  }

  formatData(data) {
    var contactData = data.data;
    // We're sorting by alphabetically so we need the alphabet
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    // // Need somewhere to store our data
    const dataBlob = {};
    const sectionIds = [];
    const rowIds = [];

    // Each section is going to represent a letter in the alphabet so we loop over the alphabet
    for (let sectionId = 0; sectionId < alphabet.length; sectionId++) {
      // Get the character we're currently looking for
      const currentChar = alphabet[sectionId];

      // Get users whose first name starts with the current letter
      const users = contactData.filter((user) => user.full_name.toUpperCase().indexOf(currentChar) === 0);

      // If there are any users who have a first name starting with the current letter then we'll
      // add a new section otherwise we just skip over it
      if (users.length > 0) {
        // Add a section id to our array so the listview knows that we've got a new section
        sectionIds.push(sectionId);

        // Store any data we would want to display in the section header. In our case we want to show
        // the current character
        dataBlob[sectionId] = { character: currentChar };

        // Setup a new array that we can store the row ids for this section
        rowIds.push([]);

        // Loop over the valid users for this section
        for (let i = 0; i < users.length; i++) {
          // Create a unique row id for the data blob that the listview can use for reference
          var rowId = `${sectionId}:${i}`;

          // Push the row id to the row ids array. This is what listview will reference to pull
          // data from our data blob
          rowIds[rowIds.length - 1].push(rowId);

          // Store the data we care about for this row
           dataBlob[rowId] = users[i];
        }
      }
    }  
    return { dataBlob, sectionIds, rowIds };
  }
  

  componentDidMount() {

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
          renderSectionHeader={(sectionData) => <SectionHeader {...sectionData} />}
        />
      </View>
    );
  }
}
 
module.exports = Contacts;


// [ { givenName: 'John',
//     thumbnailPath: '',
//     phoneNumbers: 
//      [ { number: '888-555-5512', label: 'mobile' },
//        { number: '888-555-1212', label: 'home' } ],
//     familyName: 'Appleseed',
//     emailAddresses: [ { email: 'John-Appleseed@mac.com', label: 'work' } ],
//     recordID: 3 },
//   { givenName: 'Kate',
//     thumbnailPath: '',
//     phoneNumbers: 
//      [ { number: '(555) 564-8583', label: 'mobile' },
//        { number: '(415) 555-3695', label: 'main' } ],
//     familyName: 'Bell',
//     emailAddresses: 
//      [ { email: 'kate-bell@mac.com', label: 'work' },
//        { email: 'www.icloud.com', label: 'work' } ],
//     recordID: 1 },
//   { givenName: 'Anna',
//     thumbnailPath: '',
//     phoneNumbers: [ { number: '555-522-8243', label: 'home' } ],
//     familyName: 'Haro',
//     emailAddresses: [ { email: 'anna-haro@mac.com', label: 'home' } ],
//     recordID: 4 },
//   { givenName: 'Daniel',
//     thumbnailPath: '',
//     phoneNumbers: 
//      [ { number: '555-478-7672', label: 'home' },
//        { number: '(408) 555-5270', label: 'mobile' },
//        { number: '(408) 555-3514', label: 'home fax' } ],
//     familyName: 'Higgins',
//     emailAddresses: [ { email: 'd-higgins@mac.com', label: 'home' } ],
//     recordID: 2 },
//   { givenName: 'David',
//     thumbnailPath: '',
//     phoneNumbers: [ { number: '555-610-6679', label: 'home' } ],
//     familyName: 'Taylor',
//     emailAddresses: [],
//     recordID: 6 },
//   { emailAddresses: [ { email: 'hank-zakroff@mac.com', label: 'work' } ],
//     middleName: 'M.',
//     familyName: 'Zakroff',
//     givenName: 'Hank',
//     thumbnailPath: '',
//     phoneNumbers: 
//      [ { number: '(555) 766-4823', label: 'work' },
//        { number: '(707) 555-1854', label: 'other' } ],
//     recordID: 5 } ]
'use strict'

  import React, { Component } from 'react';
  import {
    Image,
    Text,
    StyleSheet,
    TouchableHighlight,
    View
  } from 'react-native';

  var styles = StyleSheet.create({
    cellContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
      padding: 4
    },
      cellImage: {
        height: 60,
        width: 60,
        marginRight: 8,
        borderRadius: 30,
      },
      rowSeparator: {
        backgroundColor: 'gray',
        height: 1,
        marginLeft: 4,
      },
    cellTextContainer: {
        flex: 1,
    },

    mediaName: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 4,
      flex: 1
    },

    emailTitle: {
      fontSize: 12,
      color: '#999',
      width: 300,
      flex: 1
    },
    emailDescription: {
      fontSize: 12,
      color: '#999',
      width: 250,
      fontStyle: 'italic',
      flex: 1
    },

    date: {
      alignItems: 'flex-end',
      fontSize: 12,
      flex: 1,
      textAlign: 'right'
    },

    favIcon: {
      alignItems: 'flex-end',
      width: 20,
      height: 20,
      tintColor: 'gray'
    },

    direction: {
      flexDirection: 'row'
    }
  })

  var EmailRow = React.createClass({

    action: function() {
    //Do stuff! :) 
    },

    render(){
      return(
        <View>
          <View style={[styles.rowSeparator, {marginLeft: 0}]} />
          <TouchableHighlight
          >
            <View style={styles.cellContainer}>
              <Image
                source={require('../user_default.png')}
                style={styles.cellImage}
              />
              <View style={styles.cellTextContainer}>
                <View style={styles.direction}>
                  <Text style={styles.mediaName} numberOfLines={1}>
                      {this.props.rowData.title}
                  </Text>
                  <Text style={styles.date}>
                    Jan 28
                  </Text>
                </View>
                <View style={styles.direction}>
                  <Text style={styles.emailTitle} numberOfLines={1}> 
                    {this.props.rowData.name}
                  </Text>
                  <Image
                    source={require('../starfill.png')}
                    style={styles.favIcon}
                  />
                </View>
                <Text style={styles.emailDescription} numberOfLines={1}> 
                    This is a short description about the email send to him yesterday
                  </Text>
              </View>
            </View>
          </TouchableHighlight>

        </View>
      );
    }

  });

  module.exports = EmailRow;


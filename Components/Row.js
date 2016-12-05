import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
  },
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
});

var Row = React.createClass({
  render(){
    return (
      <View style={styles.container}>
        <Image source={{ uri: "https://randomuser.me/api/portraits/thumb/women/2.jpg"}} style={styles.photo} />
        <Text style={styles.text}>
          {this.props.rowData.full_name}
        </Text>
      </View>
    );
  }
});


module.exports = Row;
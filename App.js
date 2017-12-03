import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight } from 'react-native';
//For navigator
import { StackNavigator } from 'react-navigation';

const Homescreen = ({navigation}) =>(
  <View style={styles.container}>
     <Text style={styles.largeText}>Home Screen</Text>
     <Button
       onPress={() => navigation.navigate('Second')}
       title="Go to Second Page"
     />
   </View>
);
const Secondscreen =({navigation}) =>(

  <View style={styles.container}>
    <Text style={styles.largeText}>
     I made something mself
    </Text>
    <TouchableHighlight onPress={() => navigation.navigate('Home')}style={styles.button}>
    <Text style={styles.buttonText}> Hi everyone</Text>
    </TouchableHighlight>

  </View>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  largeText:{
    flex: 5,
    fontSize: 52,
    //fontFamily: 'HelveticaNeue-CondensedBold',
    paddingTop:40,
    paddingRight: 20,
    paddingLeft: 20,
    color: '#173e43'
  },
  button:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#3fb0ac'
  },
  buttonText:{
    //fontFamily: 'HelveticaNeue-CondensedBold',
    color: '#fae945',
    fontSize: 40
  }
});
const RootNavigator = StackNavigator({
  Home: {
    screen: Homescreen,
    navigationOptions: {
      headerTitle: 'Homepage',
    },
  },
  Second: {
    screen: Secondscreen,
    navigationOptions: {
      headerTitle: 'Second',
    },
  },
});

export default RootNavigator;

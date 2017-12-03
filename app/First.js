import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

class First extends Component  {
  onclick(){

  }
  render(){
    return(
      <View style={styles.container}>
      <Text style={styles.largeText}>
       I made something mself
      </Text>
      <TouchableHighlight onPress={this.onclick.bind(this)}style={styles.button}>
      <Text style={styles.buttonText}> Hi everyone</Text>
      </TouchableHighlight>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#dddfd4'
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
})
module.exports = First;

import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';

const NavigationBar = ({ onBackPress }) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'yellow',height: 100,paddingTop:30 }}>
      <View style={{ alignItems: 'flex-start',paddingLeft:30 }}>
        <TouchableOpacity onPress={onBackPress}>
          <Text style={{ alignSelf: 'flex-start',fontWeight:'bold' }}>Contact Us</Text>
        </TouchableOpacity>
      </View>
      
      <View style={{ flex: 1, alignItems: 'center',paddingRight:40,paddingLeft:10 }}>
        <TouchableOpacity onPress={onBackPress}>
          <Text style={{ alignSelf: 'center',fontWeight:'bold' }}>Home</Text>
        </TouchableOpacity>
      </View>

      <View style={{ alignItems: 'flex-end',paddingRight:30 }}>
        <TouchableOpacity onPress={onBackPress}>
          <Text style={{ alignSelf: 'flex-end',fontWeight:'bold' }}>About</Text>
        </TouchableOpacity>
      </View>

      
    </View>
  )
}

export default NavigationBar
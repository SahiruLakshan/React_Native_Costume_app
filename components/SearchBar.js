import React,{ useState } from 'react'
import { View, TextInput, TouchableOpacity,Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Searchbar } from 'react-native-paper';

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    console.log("hello")
  };

  return (
    <View style={{flexDirection:'row',alignItems:'center',paddingLeft:30,paddingTop:20}}>
      <TextInput
        placeholder="Search..."
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
        style={{borderWidth:1,borderRadius:15,width:310,paddingLeft:30,alignSelf:'center'}}
      />
      
      <TouchableOpacity onPress={handleSearch} style={{paddingLeft:15}}>
        <Icon name="ios-search" size={30} color="blue" />
      </TouchableOpacity>
     
    </View>
    
  )
}

export default SearchBar
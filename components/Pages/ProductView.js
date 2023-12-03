import React, { useEffect, useState } from 'react';
import {Card,Text} from "react-native-paper";
import { ScrollView,View,TouchableOpacity } from 'react-native';
import {useNavigation} from "@react-navigation/native"
import axios from 'axios';

const Shirts = () => {
  const [data, setData] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [error,setError] = useState(null);
  const navigation = useNavigation();

  const onBackPress = () => {
    navigation.navigate('View')
  }

  const fetchData = async () => {
    setisLoading(true);

    try {
      // Replace this URL with your own backend server URL
      // Notice the 's' at the end of 'products'
      const response = await axios.get('http://localhost:3000/product');
      setData(response.data);
      setisLoading(false);
    } catch (error) {
      setError(error);
      setisLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [item]);

 
  return (
    <ScrollView contentContainerStyle = {{alignItems:"center"}}>
      {isLoading ? (
        // Show a loading indicator while fetching data
        <Text>Loading...</Text>
      ) : error ? (
        // Show an error message if something went wrong
        <Text>Error: {error.message}</Text>
      ) : (
        // Show the data in a list format
        <FlatList
          data={data}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <View style={{flexDirection:'row',marginBottom:10,marginTop: 10}}>
              <View style={{alignItems: 'flex-start',paddingLeft:10}}>
                <TouchableOpacity onPress={onBackPress}>
                  <Card style={{width:200}}>
                    <Card.Content>
                      <Text style={{fontSize:15,fontWeight:'600'}}>{item.brand}</Text>
                      <Text style={{fontSize:10}}>{item.type}</Text>
                      <Card.Cover source={{uri: item.imageURL}}/>
                    </Card.Content>
                  </Card>
                </TouchableOpacity>
              </View>
            
              <View style={{alignItems: 'flex-end',paddingRight:10,paddingLeft:5}}>
                <Card style={{width:200,alignSelf:"flex-end"}}>
                  <Card.Content>
                    <Text style={{fontSize:15,fontWeight:'600'}}>{item.price}</Text>
                    <Text style={{fontSize:10}}>Quantity: {item.quantity}</Text>
                  </Card.Content>
                </Card>
              </View>
            </View>
          )}
        />
      )}
    </ScrollView>
  )
}

export default Shirts

import React from "react";
import { Button, Card, Text } from "react-native-paper";
import { ScrollView, navigator } from "react-native";
import { useNavigation } from "@react-navigation/native";


const Home = () => {

  const navigation = useNavigation();
  
  const onTestPress = () => {
    navigation.navigate('Shirts'); // Navigate to Screen2
  };
  
  return (
    <ScrollView contentContainerStyle={{ alignItems: "center" }}>
      <Card
        style={{
          width: 350,
          alignSelf: "center",
          marginBottom: 10,
          marginTop: 10,
        }}
      >
        <Card.Content>
          <Text variant="titleLarge">SHIRTS</Text>
          <Text variant="bodyMedium">All new fashions are available..</Text>
        </Card.Content>
        <Card.Cover
          source={{
            uri: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHNoaXJ0fGVufDB8fDB8fHww",
          }}
        />
        <Card.Actions>
          <Button
            style={{ width: 150, backgroundColor: "black" }}
            onPress={onTestPress}
          >
            See More..
          </Button>
        </Card.Actions>
      </Card>

      <Card style={{ width: 350, alignSelf: "center" }}>
        <Card.Content>
          <Text variant="titleLarge">TROUSERS</Text>
          <Text variant="bodyMedium">All new fashions are available..</Text>
        </Card.Content>
        <Card.Cover
          source={{
            uri: "https://media.istockphoto.com/id/1413637822/photo/top-view-of-folded-jeans-blue-jeans-on-a-stack-of-jeans-top-view-of-various-denim-fabrics-on.webp?b=1&s=170667a&w=0&k=20&c=ONd7UAI0z30AfyEVvE_XdAfj6sFkj1eiGuVM148H2pA=",
          }}
        />
        <Card.Actions>
          <Button style={{ width: 150, backgroundColor: "black" }}>
            See More..
          </Button>
        </Card.Actions>
      </Card>

      <Card
        style={{
          width: 350,
          alignSelf: "center",
          marginBottom: 10,
          marginTop: 10,
        }}
      >
        <Card.Content>
          <Text variant="titleLarge">LADIES ITEMS</Text>
          <Text variant="bodyMedium">All new fashions are available..</Text>
        </Card.Content>
        <Card.Cover
          source={{
            uri: "https://c0.wallpaperflare.com/preview/73/280/970/4k-wallpaper-boutique-business-clothes.jpg",
          }}
        />
        <Card.Actions>
          <Button style={{ width: 150, backgroundColor: "black" }}>
            See More..
          </Button>
        </Card.Actions>
      </Card>
    </ScrollView>
  );
};

export default Home;

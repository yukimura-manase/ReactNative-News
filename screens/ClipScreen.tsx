import React from 'react';
import { StyleSheet, SafeAreaView, Text, TouchableOpacity, FlatList } from "react-native";
import { useSelector } from 'react-redux';
import ListItem from '../components/ListItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

const userSelector = (state: any)=> {
  return  state.user;
};

const ClipScreen = ( { navigation }: any )=> {

  const user = useSelector(userSelector);
  console.log(user);

  const { clips } = user;

  if(user){
    console.log(clips);
  };

    return (
        <SafeAreaView style={styles.container} >
          <FlatList
            data={ clips } // 配列データを渡す
            renderItem={ ( { item } ) => ( // Itemを分割代入
              <ListItem
                imageUrl={item.urlToImage}
                title={item.title}
                author={item.author}
                onPress={ ()=> { navigation.navigate("Article", { article: item }) } }
              />
            )}
            keyExtractor={ (item, index) => index.toString() }
          >

          </FlatList>
        </SafeAreaView>
    );
};

export default ClipScreen;
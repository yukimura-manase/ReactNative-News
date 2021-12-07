import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity  } from 'react-native';

// propsを分割代入
const ListItem = ( { imageUrl, title, author, onPress }: any )=> {

    return(
        <TouchableOpacity style={ styles.itemContainer } onPress={onPress} >

            <View style={ styles.leftContainer }>
                <Image source={ { uri:imageUrl } } style={ { width: 100, height: 100 } } />
            </View>

            <View style={ styles.rightContainer} >
                
                {/*  3行で区切るように設定  */}
                <Text numberOfLines={ 3 } style={styles.text} >
                { title }
                </Text>
                <Text style={styles.subText} >{ author }</Text>

            </View>

        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    itemContainer : {
      height:100,
      width:'100%',
      borderColor:'gray',
      borderWidth:1, 
      flexDirection:'row' // row(横並び)またはcolum(縦並び)を指定！ => defaultはcolumn
    },
    leftContainer: {
      width: 100,
    },
    rightContainer: {
      flex: 1,
      flexDirection:'column', // defaultはcolumn
      padding:'10px',
      justifyContent: 'space-between',
    },
    text: {
      fontSize: 16,
    },
    subText: {
      fontSize: 12,
      color: 'gray',
    },
  
  });

export default ListItem;
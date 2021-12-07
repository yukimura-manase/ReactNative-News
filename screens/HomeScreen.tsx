import React,{ useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, FlatList, } from 'react-native';
import ListItem from '../components/ListItem';
import dummieArticles from '../dummies/articles.json';
import axios from 'axios';

const URL = 'https://newsapi.org/v2/top-headlines?country=jp&category=business&apiKey=702c5fa7112c4bc2a7cc9801135ebbda';

const HomeScreen = (props: any)=> {

    const { navigation } = props;

    const [ articles, setArticles ] = useState(dummieArticles);

    useEffect( ()=> {

        fetchArticles();

    },[]);

    const fetchArticles = async ()=> {

        try {

            const response = await axios.get(URL); // axiosはPromiseオブジェクトを返す！
            console.log('通信成功！');
            console.log(response);

            setArticles(response.data.articles);
        } catch (error) {

            console.log('通信失敗！');
            console.error(error);
        };

    };

    return (
        // 適切に余白を与える！
        <SafeAreaView style={styles.container}>

            {/* FlatListの利用でスライド機能を実装 */}
            <FlatList
            data={ articles }
            renderItem={ ( {item} ) => (
                <ListItem
                imageUrl={item.urlToImage}
                title={item.title}
                author={item.author}
                onPress={ ()=> { navigation.navigate("Article", { article: item }) } }
                />
            )}
            keyExtractor={ (item, index) => index.toString() }
            />

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

});



export default HomeScreen;

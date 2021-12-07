import React from "react";
import { StyleSheet, SafeAreaView, Text, TouchableOpacity } from "react-native";
import { WebView } from 'react-native-webview';
import { useDispatch, useSelector } from "react-redux";
import { addClip, deleteClip } from "../store/actions/user";
import ClipButton from "../components/ClipButton";

const ArticleScreen = ( { route }: any )=> { // Navigationのprops(デフォルト設定)からrouteを分割代入

    const { article } = route.params;
    console.log(article);
    console.log(article.url);

    const dispatch = useDispatch();

    const user = useSelector( (state: any)=> state.user);
    console.log(user);

    const { clips } = user;

    const judgmentCliped = ()=> {
      return clips.some( (clip: any) => clip.url === article.url);
    };
    
    const toggleClip = () => {
      if ( judgmentCliped() ) {
        dispatch( deleteClip({clip: article}) );
      } else {
        dispatch( addClip({clip: article}) );
      }
    };

    return (
      <SafeAreaView style={styles.container}>
        <ClipButton onPress={ toggleClip } enabled={ judgmentCliped() } />
        <WebView source={{uri: article.url}} />
      </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
  
  });

export default ArticleScreen;
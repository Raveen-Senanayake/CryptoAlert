import React, { useEffect } from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";
import * as rssParser from 'react-native-rss-parser';
import { WebView } from 'react-native-webview';

const RootContainer = styled.View`
  padding: 30px 15px;
  max-width: 100%;
  max-height: 100%;

`;



const NewsScreen = ({ navigation, route }) => {


  return (

    <WebView source={{ url: 'https://coinpedia.org/recent-posts/' }} style={{ width: '80%', height: 500, alignItems: 'center' }} />

  )
};

export default NewsScreen;

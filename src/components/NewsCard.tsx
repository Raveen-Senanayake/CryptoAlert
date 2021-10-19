import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity, Text } from "react-native";
import bitcoingraph from "../../assets/bitcoingraph.png";

const StyledContainer = styled.View`
  display: flex;
  position: relative;
  width: 100%;
  height: 90px;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.075);
  border-radius: 8px;
  margin-top: 10px;

  justify-content: space-around;
  z-index: 0;
`;

const Title = styled.Text`
  position: absolute;
  width: 100%;
  height: 20px;
  left: 70px;
  top: 25px;
  /* font-family: Montserrat; */
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
`;

const Code = styled.Text`
  position: absolute;
  width: 100%;
  height: 15px;
  left: 71px;
  top: 55px;

  /* font-family: Montserrat; */
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 12px;
  color: #6c757d;
`;

const StyledImage = styled.Image`
  position: relative;
  width: 45px;
  height: 45px;
  left: 20px;
  top: 0px;
`;

const StyledSnippetGraph = styled.Image`
  position: absolute;
  width: 50px;
  height: 30px;
  left: 50%;
  top: 30%;
  transform: rotate(-180deg);
`;

const CurrentPrice = styled.Text`
  position: absolute;
  width: 100%;
  height: 20px;
  top: 24px;
  text-align: right;
  padding-right: 20px;

  /* font-family: Montserrat; */
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;

  color: #343a40;
`;

const PriceChange = styled.Text`
  position: absolute;
  width: 100%;
  height: 15px;
  top: 55px;

  text-align: right;
  padding-right: 20px;

  /* font-family: Montserrat; */
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 12px;
  display: flex;
  align-items: center;

  color: #21bf73;
`;

type CardProps = {
  title: string;
  price: string;
  code: string;
  iconlink: string;
  pricechange: string;
};

const NewsCard = ({
  description,
  created,
  price,
  pricechange,
  iconlink,
}: CardProps) => {
  return (
    <TouchableOpacity activeOpacity={0.7}>
      <StyledContainer>
        <StyledImage source={{ uri: iconlink }} />
        <StyledSnippetGraph source={bitcoingraph} />
        <Title> {title} </Title>
        <Code> {code} </Code>
        <CurrentPrice> {price}</CurrentPrice>
        <PriceChange> {pricechange} </PriceChange>
      </StyledContainer>
    </TouchableOpacity>
  );
};

export default NewsCard;

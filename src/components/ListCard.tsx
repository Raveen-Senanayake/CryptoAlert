import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity, Text } from "react-native";
import bitcoingraph from "../../assets/bitcoingraph.png";

const StyledContainer = styled.View`
  display: flex;
  position: relative;
  width: 100%;
  height: 45px;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.075);
  border-radius: 8px;
  margin-top: 10px;
  justify-content: space-around;
  z-index: 0;
`;

const Title = styled.Text`
  position: absolute;
  top: 25%;
  left: 25%;
  /* font-family: Montserrat; */
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
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
  width: 20px;
  height: 20px;
  left: 20px;
  top: 0px;
`;

type CardProps = {
  title: string;
  price: string;
  code: string;
  iconlink: string;
  pricechange: string;
};

const ListCard = ({ title, code, price, pricechange, iconlink }: CardProps) => {
  return (
    <TouchableOpacity activeOpacity={0.7}>
      <StyledContainer>
        <Title> ddmd </Title>
      </StyledContainer>
    </TouchableOpacity>
  );
};
export default ListCard;

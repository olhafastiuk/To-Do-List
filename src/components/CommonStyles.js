import React from "react";
import styled from "styled-components";

const StyledFlex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "stretch"};
  align-items: ${(props) => props.align || "stretch"};
  margin: ${({ margin }) => margin || "0"};
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};
  transition: ${(props) => props.height || "100%"};
`;

export const Flex = (props) => {
  return <StyledFlex {...props} />;
};

const StyledButton = styled.button`
  display: flex;
  flex-direction: ${(props) => props.direction || "column"};
  justify-content: center;
  align-items: center;
  padding: ${(props) => props.padding || "10px 20px"};
  margin: ${(props) => props.margin || "0"};
  cursor:pointer;
  font-size: ${(props) => props.fontSize || "20px"};
  background: ${(props) => props.bg || "#fab8c2"};
  color: ${(props) => props.color || "white"};
  outline:none;
  border: 1px solid;
  border-color: {(props) => props.borderColor || "#fab8c2"};
  border-radius: 25px;
  transition: 0.3s;
  
  &: hover {
      border-color: transparent;
      background-color: rgb(76, 114, 218);
  }
`;

export const CustonButton = (props) => {
  return <StyledButton {...props} />;
};

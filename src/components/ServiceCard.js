import React from "react";
import styled from "styled-components";

function ServiceCard({ title, text, image, active }) {
  if (!active) {
    return (
      <ContainerInactive>
        <Image src={require(`../assets/${image}`)} alt={image} />
        <Title>{title}</Title>
        <Text>{text}</Text>
      </ContainerInactive>
    );
  } else {
    return (
      <Container>
        <Image src={require(`../assets/${image}`)} alt={image} />
        <Title>{title}</Title>
        <Text>{text}</Text>
      </Container>
    );
  }
}

export default ServiceCard;

const Container = styled.div`
  border-radius: 8px;
  height: 25vh;
  width: 25vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 2vw;
  -webkit-box-shadow: -3px 22px 38px -9px rgba(156, 156, 156, 1);
  -moz-box-shadow: -3px 22px 38px -9px rgba(156, 156, 156, 1);
  box-shadow: -3px 22px 38px -9px rgba(156, 156, 156, 1);
`;

const ContainerInactive = styled.div`
  border-radius: 6px;
  height: 25vh;
  width: 25vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 2vw;
  background: #333333;
  transition: all 0.2s ease-in-out;
  box-shadow: 6px -6px 20px rgba(88, 88, 88, 0.16),
    -6px 6px 20px rgba(88, 88, 88, 0.16), -6px -6px 20px rgba(88, 88, 88, 0.16),
    6px 6px 20px rgba(88, 88, 88, 0.16);
  &:hover {
    transform: scale(1.05);
    // box-shadow: 0 30px 45px -15px #f6f6f6;
    box-shadow: 6px -6px 20px rgba(88, 88, 88, 0.16),
      -6px 6px 20px rgba(88, 88, 88, 0.16),
      -6px -6px 20px rgba(88, 88, 88, 0.16), 6px 6px 20px rgba(88, 88, 88, 0.16);
  }
`;

const Image = styled.img`
  width: 2vw;
  margin-bottom: 3vh;
`;

const Title = styled.div`
  margin-bottom: 1vh;
  font-size: 24px;
  font-weight: 600;
  color: #000000;
`;

const Text = styled.div`
  margin-top: 1vh;
  font-size: 14px;
  //   color: #000000;
`;

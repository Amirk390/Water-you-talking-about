import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #383854;
  margin: 2rem 0 0 0;
  font-size: 2rem;
  @media only screen and (max-width: 420px) {
    margin: 1rem 0;
  }
`;

const Title = styled.h1`
  font-size: 1.5rem;
  width: 99%;
  background-color: rgba(0, 0, 0, 0.25);
  border: 0.05rem rgba(0, 0, 0, 0.5) solid;
  margin: 0 0 0.25rem 0;

  @media only screen and (max-width: 700px) {
    font-size: 1rem;
    margin: 0 0 0.1rem 0;
  }
  @media only screen and (max-width: 700px) {
    margin: 0 0 0.1rem 0;
  }
`;

const Info = styled.h2`
  font-size: 1rem;
  width: 99%;
  background-color: rgba(0, 0, 0, 0.25);
  border: 0.05rem rgba(0, 0, 0, 0.5) solid;
  margin-bottom: 1rem;

  @media only screen and (max-width: 700px) {
    font-size: 0.5rem;
  }

  @media only screen and (max-width: 420px) {
    margin: 0;
  }
`;

const SubTitle = styled.h2`
  font-size: 1.5rem;
  color: #383854;
  border-radius: 1rem;
  margin: 0.5rem 0;
  padding: 0.5rem 8rem;

  @media only screen and (max-width: 950px) {
    padding: 0.5rem 5rem;
  }

  @media only screen and (max-width: 700px) {
    font-size: 0.75rem;
    width: 60%;
    margin: 1rem 0;
    padding: 0.5rem;
  }
  @media only screen and (max-width: 700px) {
    margin: 0;
  }
`;

const ButtonContainer = styled.section`
  display: flex;
  align-items: center;
  text-align: center;
  margin: 3rem 0;

  @media only screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 2rem 0;
    font-size: 2rem;
  }
  @media only screen and (max-width: 700px) {
    margin: 0 0;
  }
`;
const Button = styled(Link)`
  display: flex;
  justify-content: center;
  font-size: 1rem;
  color: white;
  background-color: #383854;
  border: 0.05rem rgba(255, 255, 255, 0.75) solid;
  box-shadow: 0.2rem 0.2rem 0.3rem #888888;
  width: 100%;
  width: 25%;
  border-radius: 1rem;
  margin: 0 2rem;
  padding: 3rem 2rem;
  text-decoration: none;

  @media only screen and (max-width: 950px) {
    margin: 0 1rem;
    padding: 2rem 1rem;
  }

  @media only screen and (max-width: 700px) {
    font-size: 1rem;
    padding: 1.5rem;
    margin: 1rem 0 0 0;
    width: 55%;
  }

  @media only screen and (max-width: 420px) {
    font-size: 1rem;
    width: 65%;
    padding: 1rem;
    margin: 0.5rem 0 0 0;
  }
`;

const Home = () => (
  <Container>
    <Title>Welcome to our website</Title>
    <Info>Here you can find many tools and information about conserving water</Info>
    <SubTitle>Start by choosing one of the options below</SubTitle>
    <ButtonContainer>
      <Button to="/calculator">Calculator</Button>
      <Button to="/prices">Price List</Button>
      <Button to="/statistics">Statistics</Button>
    </ButtonContainer>
  </Container>
);

export default Home;

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #383854;
  margin: 2rem 0 2rem 0;
  font-size: 2rem;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.25);
  border: 0.05rem rgba(0, 0, 0, 0.5) solid;
  margin: 0 0 0.25rem 0;
  @media only screen and (max-width: 700px) {
    font-size: 1rem;
    margin: 0 0 0.1rem 0;
  }
`;

const Info = styled.h2`
  font-size: 1rem;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.25);
  border: 0.05rem rgba(0, 0, 0, 0.5) solid;
  margin: 0 0 1rem 0;

  @media only screen and (max-width: 700px) {
    font-size: 0.5rem;
  }

  @media only screen and (max-width: 400px) {
    width: 100%;
  }
`;

const SubTitle = styled.h2`
  font-size: 1rem;
  background-color: #383854;
  width: 50%;
  color: #d1f4ff;
  border-radius: 1rem;
  margin: 1rem 0 1rem 0;
  padding: 0.5rem;

  @media only screen and (max-width: 700px) {
    font-size: 0.75rem;
    width: 60%;
  }
`;

const Button = styled(Link)`
  font-size: 1rem;
  background-color: rgba(0, 0, 0, 0.25);
  border: 0.1rem rgba(0, 0, 0, 0.25) solid;
  max-width: 26rem;
  color: #383854;
  width: 25%;
  border-radius: 1rem;
  margin: 1rem 0 0 0;
  padding: 0 1rem 0 1rem;
  text-decoration: none;

  @media only screen and (max-width: 700px) {
    font-size: 1rem;
    margin: 2rem 0 0 0;
    padding: 0 2.5rem 0 2.5rem;
    width: 30%;
  }

  @media only screen and (max-width: 400px) {
    font-size: 1rem;
    margin: 2rem 0 0 0;
    padding: 0 2.5rem 0 2.5rem;
    width: 40%;
  }
`;

const Home = () => (
  <Container>
    <Title>Welcome to our website</Title>
    <Info>Here you can find many tools and information about conserving water</Info>
    <SubTitle>Start by choosing one of the options below</SubTitle>
    <Button to="/calculator">Calculator</Button>
    <Button to="/prices">Price List</Button>
    <Button to="/statistics">Statistics</Button>
  </Container>
);

export default Home;

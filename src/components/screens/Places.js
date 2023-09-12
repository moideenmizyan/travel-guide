import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "./includes/Header";

const Places = () => {
  return (
    <>
      <Helmet>
        <title>Places | Travel Guide</title>
      </Helmet>
      <Header />
      <TopContainer>
        <Heading>Welcome John Doe</Heading>
        <Paragraph>Explore the world around you</Paragraph>
      </TopContainer>
      <PlacesContainer>
        <PlaceCard>
          <PlaceCardLink>
            <PLaceImage src="" alt="Image" />
            <PlaceBottomContainer>
              <PlaceTitle>Himalaya</PlaceTitle>
              <Location>
                <LocationIcon
                  src={require("../../assets/images/place.svg").default}
                  alt="Image"
                ></LocationIcon>
                <LocationName>Himalaya</LocationName>
              </Location>
            </PlaceBottomContainer>
          </PlaceCardLink>
        </PlaceCard>
      </PlacesContainer>
    </>
  );
};

const TopContainer = styled.div``;
const Heading = styled.h1``;
const Paragraph = styled.p``;
const PlacesContainer = styled.ul``;
const PlaceCard = styled.li``;
const PlaceCardLink = styled(Link)``;
const PLaceImage = styled.img``;
const PlaceBottomContainer = styled.div``;
const PlaceTitle = styled.h3``;
const Location = styled.div``;
const LocationIcon = styled.img``;
const LocationName = styled.span``;

export default Places;

import React from 'react';
import {Card} from 'react-native-paper';
import {Text} from 'react-native';
import styled from 'styled-components/native';

const ImageCard = styled(Card)`
  margin: 13px 26px 13px 26px;
`;

const PhotoItem = () => {
  return (
    <ImageCard>
      {/* <ImageCard.Cover source={Image} /> */}
      <Text>Photo here</Text>
    </ImageCard>
  );
};

export default PhotoItem;

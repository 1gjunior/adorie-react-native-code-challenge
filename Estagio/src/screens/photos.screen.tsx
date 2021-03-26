import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import styled from 'styled-components/native';
import PhotoList from '../components/photoList.component';

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const Photos = () => {
  return (
    <SafeArea>
      <Container>
        <PhotoList />
      </Container>
    </SafeArea>
  );
};

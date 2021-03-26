import React from 'react';
import {
  Keyboard,
  SafeAreaView,
  StatusBar,
  TouchableWithoutFeedback,
} from 'react-native';
import styled from 'styled-components/native';
import Search from '../components/search.component';

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

interface Props {
  navigation: {
    navigate: (text: string) => string;
  };
}

export const Home: React.FC<Props> = ({navigation}) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeArea>
        <Container>
          <Search navigation={navigation} />
        </Container>
      </SafeArea>
    </TouchableWithoutFeedback>
  );
};

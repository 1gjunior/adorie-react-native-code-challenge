import React from 'react';
import {State} from '../redux/type';
import styled from 'styled-components/native';
import {FlatList} from 'react-native';
import {connect} from 'react-redux';
import {getPhotos} from '../redux/actions/photoActions';

const View = styled.View`
  flex: 1;
`;

const Image = styled.Image`
  width: 370px;
  height: 300px;
  margin: 10px 10px 10px 10px;
`;

interface Props {
  photo: State;
}

const PhotoList: React.FC<Props> = ({photo: {photos}}) => {
  return (
    <View>
      <FlatList
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        data={photos}
        renderItem={({item}) => (
          <Image source={{uri: item.urls.small}} key={item.id} />
        )}
      />
    </View>
  );
};

const mapStateToProps = (state: {photo: any}) => ({
  photo: state.photo,
});

export default connect(mapStateToProps, {getPhotos})(PhotoList);

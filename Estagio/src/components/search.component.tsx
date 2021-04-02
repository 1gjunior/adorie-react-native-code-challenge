import * as React from 'react';
import {State} from '../redux/type';
import {connect} from 'react-redux';
import {Searchbar, Title} from 'react-native-paper';
import styled from 'styled-components/native';
import {getPhotos, setQuery} from '../redux/actions/photoActions';

const SearchTitle = styled(Title)`
  font-size: 41px;
  padding-top: 15px;
`;

const SearchBar = styled(Searchbar)`
  margin: 16px;
`;

interface Props {
  photo: State;
  navigation: {
    navigate: (text: string) => string;
  };
}

const Search: React.FC<Props> = ({
  navigation,
  photo: {query},
  setQuery,
  getPhotos,
}) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  React.useEffect(() => {
    getPhotos(query);
  }, [getPhotos, query]);

  const onChangeSearch = (text: React.SetStateAction<string>) =>
    setSearchQuery(text);

  const navigateTo = (screen: string) => {
    navigation.navigate(screen);
  };

  return (
    <>
      <SearchTitle>Unsplash</SearchTitle>
      <SearchBar
        placeholder="Pesquisar Imagens"
        onChangeText={onChangeSearch}
        value={searchQuery}
        onIconPress={() => {
          if (searchQuery !== '') {
            setQuery(searchQuery);
            navigateTo('Photos');
          }
        }}
        onSubmitEditing={() => {
          if (searchQuery !== '') {
            setQuery(searchQuery);
            navigateTo('Photos');
          }
        }}
      />
    </>
  );
};

const mapStateToProps = (state: {photo: any}) => ({
  photo: state.photo,
});

export default connect(mapStateToProps, {getPhotos, setQuery})(Search);

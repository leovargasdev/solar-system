import React, { useState, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Container, Icon, Input } from './styles';

interface InputSearchProps {
  value?: string;
}

const InputSearch: React.FC<InputSearchProps> = ({value = ''}) => {
  const [textSearch, setTextSearch] = useState(value);
  const navigation = useNavigation();

  const handleSearch = useCallback(() => {
    navigation.navigate('SearchTab', { screen: 'Search', params: {query: textSearch}})
  }, []);

  return (
    <Container>
      <Icon size={18} name="search"/>
      <Input
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="Procure planetas, asteroides, estrelas..."
        value={textSearch}
        onChangeText={setTextSearch}
        returnKeyType="search"
        onSubmitEditing={handleSearch}
      />
    </Container>
  )
};

export default InputSearch;
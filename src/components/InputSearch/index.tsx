import React, { useState, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Container, Icon, Input } from './styles';

const InputSearch: React.FC = () => {
  const [textSearch, setTextSearch] = useState('');
  const navigation = useNavigation();

  const abacaxi = useCallback(() => {
    navigation.navigate('SearchTab', { screen: 'Search', query: textSearch})
  }, []);

  return (
    <Container>
      <Icon size={18} name="search"/>
      <Input 
        placeholder="Procure planetas, asteroides, estrelas..."
        value={textSearch}
        onChangeText={setTextSearch}
        returnKeyType="done"
        onSubmitEditing={abacaxi}
      />
    </Container>
  )
};

export default InputSearch;
import React, { useState } from 'react';

import { Container, Icon, Input } from './styles';

const InputSearch: React.FC = () => {
  const [textSearch, setTextSearch] = useState('');

  return (
    <Container>
      <Icon size={18} name="search"/>
      <Input 
        placeholder="Procure planetas, asteroides, estrelas..."
        value={textSearch}
        onChangeText={setTextSearch}
        returnKeyType="send"
      />
    </Container>
  )
};

export default InputSearch;
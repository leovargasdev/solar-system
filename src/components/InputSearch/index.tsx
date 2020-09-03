import React, { useState, useCallback } from 'react';

import { Container, Icon, Input } from './styles';

interface InputSearchProps {
  value?: string;
  onSubmit(textSearch: string): void;
}

const InputSearch: React.FC<InputSearchProps> = ({value = '', onSubmit}) => {
  const [textSearch, setTextSearch] = useState(value);

  const handleSearch = useCallback(() => {
    onSubmit(textSearch)
  }, [textSearch]);

  return (
    <Container>
      <Icon size={18} name="search"/>
      <Input
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="Procure planetas, asteroides, estrelas..."
        keyboardAppearance="dark"
        value={textSearch}
        onChangeText={setTextSearch}
        returnKeyType="search"
        onSubmitEditing={handleSearch}
      />
    </Container>
  )
};

export default InputSearch;
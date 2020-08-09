import React from 'react';

import { Container, Constellation } from './styles';

const Layout: React.FC = ({children}) => (
  <Container>
    <Constellation />
    {children}
  </Container>
)

export default Layout;
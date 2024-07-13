import React from 'react';
import { QuoteContextProvider } from './QuoteContext';
import Qoutes from './Quotes';
const App = () => {
  return (
    <QuoteContextProvider>
      <Qoutes/>
    </QuoteContextProvider>
  );
}

export default App;

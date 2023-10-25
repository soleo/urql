import React from 'react';
import { Client, Provider, fetchExchange, cacheExachange } from 'urql';
import { persistedExchange } from '@urql/exchange-persisted';

import LocationsList from './LocationsList';

const client = new Client({
  url: 'https://trygql.formidable.dev/graphql/apq-weather',
  exchanges: [
    cacheExachange,
    persistedExchange({
      preferGetForPersistedQueries: true,
    }),
    fetchExchange,
  ],
});

function App() {
  return (
    <Provider value={client}>
      <LocationsList />
    </Provider>
  );
}

export default App;

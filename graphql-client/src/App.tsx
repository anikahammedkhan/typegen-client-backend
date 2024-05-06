import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserProfile from './components/UserProfile';
import  Home from './components/Home';

// Initialize Apollo Client
export const client = new ApolloClient({
  uri: 'http://localhost:9999/graphql',
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <h1>GraphQL React App</h1>
          <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route path="/user/:userId" render={() => <UserProfile />} />
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;

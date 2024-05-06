import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserProfile from './components/UserProfile';
import Home from './components/Home';

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'http://localhost:9999/graphql', // Your GraphQL server endpoint
  cache: new InMemoryCache()
});

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <h1>GraphQL React App</h1>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/user/:userId" component={UserProfile} />
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;

// src/resolvers.ts

const users = [
    { id: '1', first_name: 'John' },
    { id: '2', first_name: 'Jane' },
  ];
  
  const resolvers = {
    Query: {
      user: () => users[0], // Just return the first user for demonstration
    },
  };
  
  export default resolvers;
  
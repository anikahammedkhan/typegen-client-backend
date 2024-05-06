import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Link } from 'react-router-dom';
import { GetUsersQuery } from '../gql/generated/types'; // Import generated types

// Define your GraphQL query to fetch all users
const GET_USERS = gql`
  query GetUsers {
    users {
      id
      first_name
      last_name
    }
  }
`;

const Home: React.FC = () => {
  // Fetch all users using useQuery hook
  const { loading, error, data } = useQuery<GetUsersQuery>(GET_USERS); // Specify generic type

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {data?.users?.map((user) => (
          <li key={user?.id}>
            <Link to={`/user/${user?.id}`}>{user?.first_name} {user?.last_name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;

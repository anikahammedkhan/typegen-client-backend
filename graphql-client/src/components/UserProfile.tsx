import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';

// Define your GraphQL query
const GET_USER = gql`
  query GetUser($userId: Int!) {
    user(id: $userId) {
      id
      first_name
      last_name
      email
      gender
      ip_address
    }
  }
`;

const UserProfile: React.FC = () => {
  const { userId } = useParams<{ userId: string }>(); // Get userId from URL params

  // Fetch user data using useQuery hook
  const { loading, error, data } = useQuery(GET_USER, {
    variables: { userId: parseInt(userId) } // Pass userId as query variable
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const user = data.user;

  return (
    <div>
      <h2>User Profile</h2>
      <p>ID: {user.id}</p>
      <p>First Name: {user.first_name}</p>
      <p>Last Name: {user.last_name}</p>
      <p>Email: {user.email}</p>
      <p>Gender: {user.gender}</p>
      <p>IP Address: {user.ip_address}</p>
    </div>
  );
}

export default UserProfile;

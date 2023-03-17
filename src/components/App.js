import React from 'react';
import { getUsersRequest, createUserRequest, deleteUserRequest, usersError } from '../actions/userAction';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UsersList from './UsersList';
import NewUserForm from './NewUserForm';
import { Alert } from 'reactstrap';

function App() {
  const dispatch = useDispatch();
  const items = useSelector(state => state.users.items);
  const error = useSelector(state => state.users.error);

  useEffect(() => {
    dispatch(getUsersRequest());
  }, []);

  const handleSubmit = ({firstName, lastName}) => {
    dispatch(createUserRequest({firstName, lastName}));
  }

  const handleDeleteUser = (userId) => {
    dispatch(deleteUserRequest(userId));
  }

  const handleCloseError = () => {
    dispatch(usersError(''))
  }

  return (
    <div className="App" style={{margin: '0 auto', padding: '20px', maxWidth: '600px'}}>
      <Alert color='danger' isOpen={!!error} toggle={handleCloseError}>error!</Alert>
      <NewUserForm onSubmit={handleSubmit} />
      <UsersList users={items} onDeleteUser={handleDeleteUser}/>
    </div>
  );
}

export default App;

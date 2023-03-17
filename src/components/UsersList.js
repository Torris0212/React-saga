import React from 'react';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import _ from 'lodash';
// import Button from './Button'

const UsersList = ({ users, onDeleteUser }) => {
  return (
    <ListGroup>
      {
        _.sortBy(users, (user) => [user.firstName, user.lastName]).map((user) => {
          return (
            <ListGroupItem key={user.id}>
              <section style={{display: 'flex'}}>
                <div style={{flexGrow: 1, margin: 'auto 0'}}>
                  {user.firstName} {user.lastName}
                </div>
                <div>
                  <Button key={user.id} outline color='danger' onClick={() => onDeleteUser(user.id)}>
                    Delete User
                  </Button>
                </div>
              </section>
            </ListGroupItem>
          )
        })
      }
    </ListGroup>
  )
};

export default UsersList;
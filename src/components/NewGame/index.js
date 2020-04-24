import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { withRouter } from 'react-router-dom';

import LoadingPanel from '../LoadingPanel';
import { GET_USERS_QUERY } from './queries';
import { Page, UserList, User, PageTitle } from './styles';

import Checkbox from '../Checkbox';
import ButtonBar from '../ButtonBar';
import Button from '../Button';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { START_GAME_MUTATION } from './mutations';
import { toast } from 'react-toastify';

const NewGame = ({
  history,
}) => {
  const [selectedUsers, setSelectedUsers] = useState([])
  const { data: usersData, loading } = useQuery(
    GET_USERS_QUERY,
  );
  const [start] = useMutation(
    START_GAME_MUTATION,
    {
      onCompleted: (result) => {
        toast.success('Game Created!')
        history.push(`/games/${result.start}`);
      },
      onError: error => console.log(error),
    }
  );

  if (loading || !usersData) {
    return (
      <LoadingPanel isLoading message="Loading Game..." />
    );
  }

  function toggleUserSelection(user) {
    const index = selectedUsers.indexOf(user);
    if (index < 0) {
      selectedUsers.push(user);
      setSelectedUsers([
        ...selectedUsers,
      ]);
    } else if (index >= 0) {
      selectedUsers.splice(index, 1);
      setSelectedUsers([
        ...selectedUsers,
      ]);
    }
  }

  function renderUsers() {
    return usersData.users.map(
      user => {
        return (
          <User
            key={user._id}
            onClick={() => toggleUserSelection(user)}
          >
            <div>
              <Checkbox
                checked={!!selectedUsers.find(
                  u => u._id === user._id,
                )}
                onChecked={() => toggleUserSelection(user)}
                fontSize="1.4rem"
              />
            </div>
            <span>{user.firstName}</span>
            <span>{user.lastName}</span>
            <span>({user.email})</span>
          </User>
        );
      },
    );
  }

  function handleStartGame() {
    start({
      variables: {
        userIds: selectedUsers.map(
          u => u._id,
        ),
      },
    });
  }

  return (
    <Page>
      <PageTitle>
        New Game
      </PageTitle>
      <h3>
        Select Users
      </h3>
      <UserList>
        {renderUsers()}
      </UserList>
      <ButtonBar
        location={ButtonBar.locationCodes.bottom}
      >
        <Button
          icon={faPlayCircle}
          text="Start Game"
          disabled={!selectedUsers.length}
          onClick={handleStartGame}
        />
      </ButtonBar>
    </Page>
  )
};

export default withRouter(NewGame);

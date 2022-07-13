import Profile from './Profile/Profile';
// import Statistics from './components/Statistics';
// import FriendList from './components/FriendList';
// import TransactionHistory from './components/TransactionHistory';

import user from './user.json';
// import data from './FriendListon';
// import transactions from './transactions.json';
// import friends from './friends.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        // stats={user.stats}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
    </div>
  );
};

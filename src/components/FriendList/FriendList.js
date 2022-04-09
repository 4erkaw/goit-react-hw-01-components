import s from './FriendList.module.css';
import { PropTypes } from 'prop-types';

function FriendsList({ friends }) {
  const listItem = friends.map(({ id, avatar, name, isOnline }) => (
    <li className={s.item} key={id}>
      <span
        className={s.status}
        style={{ backgroundColor: isOnline ? '#008000' : '#FF0000' }}
      ></span>
      <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={s.name}>{name}</p>
    </li>
  ));

  return <ul className={s.friendsList}>{listItem}</ul>;
}

FriendsList.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default FriendsList;

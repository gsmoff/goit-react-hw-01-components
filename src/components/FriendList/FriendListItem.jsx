import React from 'react';
import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <>
      <span className={isOnline ? css.online : css.offline}></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateNameThunk, updateAvatarThunk } from '../../../services/fetchUpdate';
import { ModalOverlay, ModalContent, ModalTitle, CloseButton } from './UserInfoModal.styled';
import { FaTimes } from 'react-icons/fa';

const UserProfileModal = ({ closeModal, handleNameUpdate }) => {
  const dispatch = useDispatch();
  const [name, setNewName] = useState('');
  const [avatar, setAvatar] = useState(null);

  const handleNameChange = e => {
    setNewName(e.target.value);
  };

  const handleAvatarChange = e => {
    setAvatar(e.target.files[0]);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      if (name) {
        await dispatch(updateNameThunk({ name }));
        handleNameUpdate(name);
      }
      if (avatar) {
        await dispatch(updateAvatarThunk(avatar));
      }

      closeModal();
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={closeModal}>
          <FaTimes />
        </CloseButton>
        <ModalTitle>Update Profile</ModalTitle>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">New Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
          />

          <label htmlFor="avatar">New Avatar:</label>
          <input
            type="file"
            id="avatar"
            onChange={handleAvatarChange}
            accept="image/*"
          />

          <button type="submit">Update Profile</button>
        </form>
      </ModalContent>
    </ModalOverlay>
  );
};

export default UserProfileModal;

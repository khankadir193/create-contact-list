// components/ContactCard.js
import React from 'react';

const ContactCard = ({ user }) => {
  return (
    <div className="bg-customeBlue shadow rounded p-4">
      {/* <img
        src={`https://placehold.co/150x150/${user.username}`}
        alt={`${user.name}`}
        className="w-16 h-16 rounded-full"
      /> */}
      <div>
        <h2 className="text-lg font-bold">{user.name}</h2>
        <p>{user.email}</p>
        <p>{user.phone}</p>
      </div>
    </div>
  );
};

export default ContactCard;

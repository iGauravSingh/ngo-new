import React from 'react';

const TeamMember = ({ member }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img className="w-full h-48 object-cover" src={member.imageUrl} alt={member.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{member.name}</div>
        <p className="text-gray-700 text-base">
          {member.description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{member.role}</span>
      </div>
    </div>
  );
};

export default TeamMember;
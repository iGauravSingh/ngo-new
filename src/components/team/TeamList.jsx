import React from 'react';
import TeamMembers from './TeamMembers'

const teamMembers = [
  {
    id: 1,
    name: 'Jane Doe',
    role: 'Developer',
    imageUrl: 'https://via.placeholder.com/150',
    description: 'Jane is a front-end developer with a passion for responsive design and beautiful interfaces.'
  },
  {
    id: 2,
    name: 'John Smith',
    role: 'Project Manager',
    imageUrl: 'https://via.placeholder.com/150',
    description: 'John is an experienced project manager who keeps everything running smoothly.'
  },
  {
    id: 3,
    name: 'Alice Johnson',
    role: 'Designer',
    imageUrl: 'https://via.placeholder.com/150',
    description: 'Alice is a creative designer who loves creating user-friendly designs.'
  }
];

const TeamList = () => {
  return (
    <>
    <h2 className=' text-center text-4xl font-bold'>Our Team</h2>
    <div className="flex flex-wrap justify-center items-center">
        
        {teamMembers.map(member => (
          <TeamMembers key={member.id} member={member} />
        ))}
      </div>
    </>
  );
};

export default TeamList;
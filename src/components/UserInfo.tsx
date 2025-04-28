
import React from 'react';

interface UserInfoProps {
  name: string;
  avatarUrl: string;
}

const UserInfo: React.FC<UserInfoProps> = ({ name, avatarUrl }) => {
  return (
    <div className="flex items-center">
      <div className="w-8 h-8 rounded-full overflow-hidden">
        <img src={avatarUrl} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="ml-2">
        <div className="text-xs text-gray-400">Hello, Welcome back!</div>
        <div className="text-sm">{name}</div>
      </div>
    </div>
  );
};

export default UserInfo;

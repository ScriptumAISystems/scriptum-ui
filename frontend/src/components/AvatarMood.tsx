import React from 'react';
import clsx from 'clsx';

interface Props {
  color: 'green' | 'yellow' | 'red';
  icon: string;
  text: string;
  onClick: () => void;
}

const palette = {
  green:  { bg: 'bg-green-100',  text: 'text-green-800',  ring: 'ring-green-300'  },
  yellow: { bg: 'bg-yellow-100', text: 'text-yellow-800', ring: 'ring-yellow-300' },
  red:    { bg: 'bg-red-100',    text: 'text-red-800',    ring: 'ring-red-300'    },
};

export default function AvatarMood({ color, icon, text, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'px-4 py-2 rounded-xl flex items-center gap-1 text-sm font-medium',
        'shadow-sm transition-transform hover:scale-105 focus:outline-none',
        'focus:ring-2',
        palette[color].bg,
        palette[color].text,
        palette[color].ring
      )}
    >
      <span className="text-lg">{icon}</span>
      {text}
    </button>
  );
}

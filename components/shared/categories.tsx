'use client';
import { cn } from '@/lib/utils';
import { useCategoryStore } from '@/store/category';
import React from 'react';

interface IProps {
  className?: string;
}

const horses = [
  { id: 0, name: 'Кони' },
  { id: 1, name: 'Лошади' },
  { id: 2, name: 'Ахалтекинская' },
  { id: 3, name: 'Аппалуза' },
  { id: 4, name: 'Шайр' },
  { id: 5, name: 'Мустанг' },
  { id: 6, name: 'Квотерхорс' },
  { id: 7, name: 'Тинкер' },
];

export const Categories: React.FC<IProps> = ({ className }) => {
  const categortActiveId = useCategoryStore((state) => state.activeId);
  return (
    <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
      {horses.map(({ name, id }, index) => (
        <a
          className={cn(
            'flex items-center font-bold h-11 rounded-2xl px-5',
            categortActiveId === id + 1 && 'bg-white shadow-md shadow-gray-200 text-primary',
          )}
          href={`/#${name}`}
          key={index}>
          <button>{name}</button>
        </a>
      ))}
    </div>
  );
};

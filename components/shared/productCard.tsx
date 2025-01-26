import React from 'react';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Title } from './title';

import Image from 'next/image';

interface Props {
  name: string;
  price: number;
  count?: number;
  imageUrl: string;
  className?: string;
}

export const ProductCard: React.FC<Props> = ({ name, price, count, imageUrl, className }) => {
  return (
    <div className={cn(className)}>
      <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
        <Image width={215} height={215} src={imageUrl} alt="Logo" />
      </div>
      <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />
      <p className="text-sm text-gray-400">
        Длинная грива, густой хвост, благородная осанка, черный окрас, выносливость, дружелюбие,
        энергичность
      </p>

      <div className="flex justify-between items-center mt-4">
        <span className="text-[20px]">
          от <b>{price} ₽</b>
        </span>

        <Button variant="secondary">
          <Plus size={16} className="mr-1" />
          Добавить
        </Button>
      </div>
    </div>
  );
};

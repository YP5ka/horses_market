'use client';
import React from 'react';
import { Title } from './title';
import { ProductCard } from './productCard';
import { useIntersection } from 'react-use';
import { list } from 'postcss';
import { cn } from '@/lib/utils';
import { useCategoryStore } from '@/store/category';

interface Props {
  title: string;
  items: any[];
  className?: string;
  categoryId: number;
  listClassName?: string;
}

export const ProductsGroupList: React.FC<Props> = ({
  title,
  items,
  className,
  categoryId,
  listClassName,
}) => {
  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, { threshold: 0.4 });
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);

  React.useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(categoryId);
      console.log(title, categoryId);
    }
  }, [intersection?.isIntersecting, categoryId, title]);

  return (
    <div className={className} id={title} ref={intersectionRef}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />
      <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
        {items.map((item, i) => (
          <ProductCard
            key={item.id}
            name={item.name}
            imageUrl={item.imageUrl}
            price={item.items[0].price}
            count={i % 2}
          />
        ))}
      </div>
    </div>
  );
};

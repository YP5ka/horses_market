import React from 'react';
import { Title } from './title';
import { FilterCheckbox } from './filterCheckbox';
import { Input } from '../ui';
import { RangeSlider } from './rangeSlider';

import { CheckboxFiltersGroup } from './checkboxFiltersGroup';

interface IProps {
  className?: string;
}

export const Filters: React.FC<IProps> = ({ className }) => {
  return (
    <div className={className}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />
      {/* Топ чекбоксы */}
      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Можно собирать" value="1" />
        <FilterCheckbox text="Новинки" value="2" />
      </div>
      {/* Филтьтры цен */}
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3"></p>
        <div className="flex gap-3 mb-5">
          <Input type="number" placeholder="0" min={0} max={100000} defaultValue={0} />
          <Input type="number" min={0} max={100000} placeholder="100000" />
        </div>
      </div>
      {/* Слайдер цен */}
      <RangeSlider min={0} max={100000} step={1000} value={[0, 100000]} />

      <CheckboxFiltersGroup
        className="mt-[60px]"
        title="Порода"
        limit={6}
        defaultItems={[
          { text: 'Фризская', value: 'friesian' },
          { text: 'Арабская', value: 'arabian' },
          { text: 'Английская чистокровная', value: 'thoroughbred' },
          { text: 'Аппалуза', value: 'appaloosa' },
          { text: 'Андалузская', value: 'andalusian' },
          { text: 'Квартерхорс', value: 'quarterhorse' },
        ]}
        items={[
          { text: 'Фризская', value: 'friesian' },
          { text: 'Арабская', value: 'arabian' },
          { text: 'Английская чистокровная', value: 'thoroughbred' },
          { text: 'Аппалуза', value: 'appaloosa' },
          { text: 'Андалузская', value: 'andalusian' },
          { text: 'Квартерхорс', value: 'quarterhorse' },
          { text: 'Шайр', value: 'shire' },
          { text: 'Хафлингер', value: 'haflinger' },
          { text: 'Тракененская', value: 'trakehner' },
          { text: 'Ганноверская', value: 'hanoverian' },
        ]}
      />
    </div>
  );
};

import { cn } from '@/lib/utils';
import { Container } from './container';
import { Categories } from './categories';
import { SortPopup } from './sort-popup';

interface IProps {
  className?: string;
}

export const TopBar: React.FC<IProps> = ({ className }) => {
  return (
    <div className={cn('sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10', className)}>
      <Container>
        <Categories />
        <SortPopup />
      </Container>
    </div>
  );
};

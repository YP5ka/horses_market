import { Container, Filters, Title, TopBar } from '@/components/shared';
import { ProductCard } from '@/components/shared/productCard';
import { ProductsGroupList } from '@/components/shared/productsGroupList';

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все кони и лошади" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />

      <Container className="pb-14 mt-9">
        {/* <Фильтрация /> */}
        <div className="flex gap-[90px]">
          <div className="w-[260px]">
            <Filters />
          </div>
          {/* <Список товаров /> */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title={'Кони'}
                items={[
                  {
                    id: 1,
                    name: 'Фриз',
                    imageUrl:
                      'https://i.pinimg.com/originals/ea/de/b2/eadeb299b0e717cd42a61fda543e0a1d.jpg',
                    items: [{ price: 25000 }],
                  },
                  {
                    id: 2,
                    name: 'Фриз',
                    imageUrl:
                      'https://i.pinimg.com/originals/ea/de/b2/eadeb299b0e717cd42a61fda543e0a1d.jpg',
                    items: [{ price: 25000 }],
                  },
                  {
                    id: 3,
                    name: 'Фриз',
                    imageUrl:
                      'https://i.pinimg.com/originals/ea/de/b2/eadeb299b0e717cd42a61fda543e0a1d.jpg',
                    items: [{ price: 25000 }],
                  },
                  {
                    id: 4,
                    name: 'Фриз',
                    imageUrl:
                      'https://i.pinimg.com/originals/ea/de/b2/eadeb299b0e717cd42a61fda543e0a1d.jpg',
                    items: [{ price: 25000 }],
                  },
                  {
                    id: 5,
                    name: 'Фриз',
                    imageUrl:
                      'https://i.pinimg.com/originals/ea/de/b2/eadeb299b0e717cd42a61fda543e0a1d.jpg',
                    items: [{ price: 25000 }],
                  },
                  {
                    id: 6,
                    name: 'Фриз',
                    imageUrl:
                      'https://i.pinimg.com/originals/ea/de/b2/eadeb299b0e717cd42a61fda543e0a1d.jpg',
                    items: [{ price: 25000 }],
                  },
                ]}
                categoryId={1}
              />
              <ProductsGroupList
                title={'Лошади'}
                items={[
                  {
                    id: 1,
                    name: 'Фриз',
                    imageUrl:
                      'https://i.pinimg.com/originals/ea/de/b2/eadeb299b0e717cd42a61fda543e0a1d.jpg',
                    items: [{ price: 25000 }],
                  },
                  {
                    id: 2,
                    name: 'Фриз',
                    imageUrl:
                      'https://i.pinimg.com/originals/ea/de/b2/eadeb299b0e717cd42a61fda543e0a1d.jpg',
                    items: [{ price: 25000 }],
                  },
                  {
                    id: 3,
                    name: 'Фриз',
                    imageUrl:
                      'https://i.pinimg.com/originals/ea/de/b2/eadeb299b0e717cd42a61fda543e0a1d.jpg',
                    items: [{ price: 25000 }],
                  },
                  {
                    id: 4,
                    name: 'Фриз',
                    imageUrl:
                      'https://i.pinimg.com/originals/ea/de/b2/eadeb299b0e717cd42a61fda543e0a1d.jpg',
                    items: [{ price: 25000 }],
                  },
                  {
                    id: 5,
                    name: 'Фриз',
                    imageUrl:
                      'https://i.pinimg.com/originals/ea/de/b2/eadeb299b0e717cd42a61fda543e0a1d.jpg',
                    items: [{ price: 25000 }],
                  },
                  {
                    id: 6,
                    name: 'Фриз',
                    imageUrl:
                      'https://i.pinimg.com/originals/ea/de/b2/eadeb299b0e717cd42a61fda543e0a1d.jpg',
                    items: [{ price: 25000 }],
                  },
                ]}
                categoryId={2}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

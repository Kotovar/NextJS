import { Button, Htag, Input, P, Rating, Tag, Textarea } from '@/components';
import { withLayout } from '@/layout/Layout';
import { GetStaticProps } from 'next';
import { useState } from 'react';
import axios from 'axios';
import { MenuItem } from '@/interfaces/menu.interface';

function Home() {
  const [rating, setRating] = useState(4);

  return (
    <>
      <Htag tag='h1'>123</Htag>
      <Button appearance='primary' className='123' arrow='down'>
        Кнопка
      </Button>
      <Button appearance='ghost' arrow='right'>
        Кнопка 2
      </Button>
      <P size='s'>Большой</P>
      <P>Средний</P>
      <P size='l'>Маленький</P>
      <Tag size='s'>def</Tag>
      <Tag size='m' color='primary'>
        primary
      </Tag>
      <Tag size='s' color='gray'>
        gray
      </Tag>
      <Tag size='s' color='red'>
        red
      </Tag>
      <Tag size='s' color='green'>
        green
      </Tag>
      <Rating rating={rating} isEditable={true} setRating={setRating}></Rating>
      <Input placeholder='Тест' />
      <Textarea placeholder='Тест' />
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
    {
      firstCategory,
    }
  );

  return {
    props: { menu, firstCategory },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}

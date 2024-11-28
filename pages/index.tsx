import { Button, Htag, P, Rating, Tag } from '@/components';
import { useState } from 'react';

export default function Home() {
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
    </>
  );
}

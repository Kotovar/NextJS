import { ComponentPropsWithoutRef } from 'react';

export interface CardProps extends ComponentPropsWithoutRef<'div'> {
  color?: 'white' | 'blue';
}

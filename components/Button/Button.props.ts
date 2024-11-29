import { ComponentPropsWithoutRef } from 'react';

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  appearance: 'primary' | 'ghost';
  arrow?: 'right' | 'down' | 'none';
}

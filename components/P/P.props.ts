import { ComponentPropsWithoutRef } from 'react';

export interface PProps extends ComponentPropsWithoutRef<'p'> {
  size?: 's' | 'm' | 'l';
}

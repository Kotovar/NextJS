import { ComponentPropsWithoutRef } from 'react';

export interface ButtonProps
  extends Omit<
    ComponentPropsWithoutRef<'button'>,
    'onAnimationStart' | 'onDragStart' | 'onDragEnd' | 'onDrag' | 'ref'
  > {
  appearance: 'primary' | 'ghost';
  arrow?: 'right' | 'down' | 'none';
}

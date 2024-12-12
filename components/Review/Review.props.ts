import { ReviewModel } from '@/interfaces/product.interface';
import { ComponentPropsWithoutRef } from 'react';

export interface ReviewProps extends ComponentPropsWithoutRef<'div'> {
  review: ReviewModel;
}

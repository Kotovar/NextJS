import { ProductModel } from '@/interfaces/product.interface';
import { ComponentPropsWithoutRef } from 'react';

export interface ProductProps extends ComponentPropsWithoutRef<'div'> {
  product: ProductModel;
}

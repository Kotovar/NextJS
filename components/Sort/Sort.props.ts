import { ComponentPropsWithoutRef } from 'react';

export interface SortProps extends ComponentPropsWithoutRef<'div'> {
  sort: SortEnum;
  setSort: (sort: SortEnum) => void;
}

export enum SortEnum {
  Rating,
  Price,
}

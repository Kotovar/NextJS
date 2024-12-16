import { SortEnum, type SortProps } from './Sort.props';
import styles from './Sort.module.css';
import cn from 'classnames';
import SortIcon from './sort.svg';

export const Sort = ({ sort, setSort, className, ...props }: SortProps) => {
  return (
    <div className={cn(styles.sort, className)} {...props}>
      <div className={styles.sortName} id='sort'>
        Сортировка
      </div>
      <button
        id='rating'
        tabIndex={0}
        onClick={() => setSort(SortEnum.Rating)}
        className={cn({
          [styles.active]: sort === SortEnum.Rating,
        })}
        aria-labelledby='sort rating'
      >
        <SortIcon className={styles.sortIcon} /> По рейтингу
      </button>
      <button
        id='price'
        tabIndex={0}
        onClick={() => setSort(SortEnum.Price)}
        className={cn({
          [styles.active]: sort === SortEnum.Price,
        })}
        aria-labelledby='sort price'
      >
        <SortIcon className={styles.sortIcon} /> По Цене
      </button>
    </div>
  );
};

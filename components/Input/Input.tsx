import { InputProps } from './Input.props';
import styles from './Input.module.css';
import cn from 'classnames';
import { ForwardedRef, forwardRef } from 'react';

export const Input = forwardRef(function Input(
  { className, error, ...props }: InputProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  return (
    <div className={cn(className, styles.inputWrapper)}>
      <input
        className={cn(styles.input, {
          [styles.error]: error,
        })}
        ref={ref}
        {...props}
      />
      {error && (
        <span role='alert' className={styles.errorMessage}>
          {error.message}
        </span>
      )}
    </div>
  );
});

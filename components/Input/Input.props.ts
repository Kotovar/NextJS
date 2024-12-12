import type { ComponentPropsWithoutRef } from 'react';
import type { FieldError } from 'react-hook-form';

export interface InputProps extends ComponentPropsWithoutRef<'input'> {
  error?: FieldError;
}

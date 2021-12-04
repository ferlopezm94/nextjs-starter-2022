import React, { ReactNode } from 'react';

import { classNames } from '../utils';

type Variant = 'primary' | 'secondary' | 'simple';

const VARIANT_MAP: Record<Variant, string> = {
  primary: 'border-transparent shadow-sm text-white bg-primary-600 hover:bg-primary-700',
  secondary: 'border-transparent shadow-none text-primary-700 bg-primary-100 hover:bg-primary-200',
  simple: 'border-gray-300 shadow-sm text-gray-700 bg-white hover:bg-gray-50',
};

type State = 'active' | 'disabled' | 'loading';

type Props = {
  children?: ReactNode;
  variant?: Variant;
  state?: State;
};

export function Button(props: Props & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { children, variant = 'simple', state = 'active', ...otherProps } = props;

  return (
    <button
      {...otherProps}
      type='button'
      disabled={state === 'loading' || state === 'disabled' ? true : otherProps.disabled}
      className={classNames(
        'inline-flex items-center px-4 py-2 border text-sm font-medium rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed',
        VARIANT_MAP[variant],
      )}
    >
      {state === 'loading' ? <SpinnerIcon /> : null}
      {children}
    </button>
  );
}

const SpinnerIcon = () => (
  <svg
    className='animate-spin -ml-1 mr-3 h-5 w-5'
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
  >
    <circle
      className='opacity-25'
      cx='12'
      cy='12'
      r='10'
      stroke='currentColor'
      strokeWidth='4'
    ></circle>
    <path
      className='opacity-75'
      fill='currentColor'
      d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
    ></path>
  </svg>
);

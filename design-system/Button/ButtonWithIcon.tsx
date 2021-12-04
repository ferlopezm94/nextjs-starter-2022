import React, { ReactNode } from 'react';

import { classNames } from '../utils';

type Variant = 'primary' | 'secondary' | 'simple';

const VARIANT_MAP: Record<Variant, string> = {
  primary: 'border-transparent shadow-sm text-white bg-primary-600 hover:bg-primary-700',
  secondary: 'border-transparent shadow-none text-primary-700 bg-primary-100 hover:bg-primary-200',
  simple: 'border-gray-300 shadow-sm text-gray-700 bg-white hover:bg-gray-50',
};

type State = 'active' | 'disabled';

type Props = {
  children?: ReactNode;
  variant?: Variant;
  state?: State;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  iconPosition?: 'full' | 'leading' | 'trailing';
};

export function ButtonWithIcon(props: Props & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const {
    children,
    variant = 'simple',
    state = 'active',
    iconPosition = 'full',
    icon,
    ...otherProps
  } = props;

  const renderChildren = () => {
    if (!icon) {
      return children;
    }

    const Icon = icon;

    if (iconPosition === 'leading') {
      return (
        <>
          <Icon className='h-5 w-5 -ml-1 mr-3' aria-hidden='true' /> {children}
        </>
      );
    }

    if (iconPosition === 'trailing') {
      return (
        <>
          {children} <Icon className='h-5 w-5 ml-3 -mr-1' aria-hidden='true' />
        </>
      );
    }

    return <Icon className='h-5 w-5' aria-hidden='true' />;
  };

  return (
    <button
      {...otherProps}
      type='button'
      disabled={state === 'disabled' ? true : otherProps.disabled}
      className={classNames(
        iconPosition === 'full'
          ? 'p-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed'
          : 'inline-flex items-center px-4 py-2 border text-sm font-medium rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed',
        VARIANT_MAP[variant],
      )}
    >
      {renderChildren()}
    </button>
  );
}

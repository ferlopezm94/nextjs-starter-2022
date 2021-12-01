import React from 'react';
import tw, { styled } from 'twin.macro';

interface ButtonProps {
  children?: React.ReactNode;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  iconPosition?: 'leading' | 'trailing';
  primary?: boolean;
  secondary?: boolean;
}

const BaseButton: React.FC<ButtonProps & React.HTMLProps<HTMLButtonElement>> = styled.button(
  ({ icon, iconPosition, primary, secondary }: ButtonProps) => [
    icon &&
      !iconPosition &&
      tw`p-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`,
    !(icon && !iconPosition) &&
      tw`inline-flex items-center px-4 py-2 border text-sm font-medium rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`,
    !primary &&
      !secondary &&
      tw`border-gray-300 shadow-sm  text-gray-700 bg-white hover:bg-gray-50`,
    secondary && tw`border-transparent text-indigo-700 bg-indigo-100 hover:bg-indigo-200`,
    primary && tw`border-transparent shadow-sm text-white bg-indigo-600 hover:bg-indigo-700`,
  ],
);

export const Button: React.FC<ButtonProps & React.HTMLProps<HTMLButtonElement>> = ({
  icon,
  iconPosition,
  children,
  primary = false,
  secondary = false,
  ...props
}: ButtonProps) => {
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
    <BaseButton
      {...props}
      type='button'
      icon={icon}
      iconPosition={iconPosition}
      primary={primary}
      secondary={secondary}
    >
      {renderChildren()}
    </BaseButton>
  );
};

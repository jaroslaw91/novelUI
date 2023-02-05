import { FC, ReactEventHandler, ReactNode } from 'react';
export interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'alert';
    type?: 'button' | 'submit' | 'reset';
    children: ReactNode;
    action?: ReactEventHandler<HTMLButtonElement>;
    hasFullWidth?: boolean;
    hasOnlyIcon?: boolean;
    align?: 'center' | 'left';
    isLoading?: boolean;
    isDisabled?: boolean;
    isDropdown?: boolean;
    'data-testid'?: string;
}
export declare const Button: FC<ButtonProps>;
//# sourceMappingURL=Button.d.ts.map
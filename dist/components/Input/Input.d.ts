import { FormikErrors, FormikTouched } from 'formik';
import { ChangeEventHandler, FC, FocusEventHandler, ReactEventHandler } from 'react';
export interface InputProps {
    type?: 'text' | 'email' | 'password';
    label?: string;
    name: string;
    id: string;
    value?: string;
    placeholder?: string;
    touched?: FormikTouched<{
        [field: string]: boolean;
    }>;
    errors?: FormikErrors<{
        [field: string]: string;
    }>;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    onBlur?: FocusEventHandler<HTMLInputElement>;
    autoFocus?: boolean;
    hasFullWidth?: boolean;
    hasPasswordMeter?: boolean;
    isDropdown?: boolean;
    hideError?: boolean;
    onClick?: ReactEventHandler<HTMLInputElement>;
    'data-testid'?: string;
}
export declare const Input: FC<InputProps>;
//# sourceMappingURL=Input.d.ts.map
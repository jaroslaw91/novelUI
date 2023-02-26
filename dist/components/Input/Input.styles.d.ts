interface InputComponentProps {
    hasFullWidth?: boolean;
    isError?: boolean;
    isPassword?: boolean;
    isDropdown?: boolean;
}
interface PasswordMeterComponentProps {
    strength?: number;
    color?: string;
}
export declare const LabelComponent: import("styled-components").StyledComponent<"label", import("styled-components").DefaultTheme, InputComponentProps, never>;
export declare const InputWrapperComponent: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const InputComponent: import("styled-components").StyledComponent<"input", import("styled-components").DefaultTheme, InputComponentProps, never>;
export declare const IconComponent: import("styled-components").StyledComponent<"span", import("styled-components").DefaultTheme, {}, never>;
export declare const PasswordMeterComponent: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, PasswordMeterComponentProps, never>;
export {};
//# sourceMappingURL=Input.styles.d.ts.map
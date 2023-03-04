import { ReactEventHandler } from 'react';
import { DefaultTheme } from 'styled-components';
interface ImageComponentProps {
    variant?: 'default' | 'avatar' | 'page';
    isBlur?: boolean;
    onClick?: ReactEventHandler<HTMLImageElement>;
}
export declare const ImageComponent: import("styled-components").StyledComponent<"img", DefaultTheme, ImageComponentProps, never>;
export {};
//# sourceMappingURL=Image.styles.d.ts.map
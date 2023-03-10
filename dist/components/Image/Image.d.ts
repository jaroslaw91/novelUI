import { FC, ReactEventHandler } from 'react';
export interface ImageProps {
    src: string;
    width?: number | string;
    height?: number | string;
    alt: string;
    variant?: 'default' | 'avatar';
    onClick?: ReactEventHandler<HTMLImageElement>;
    'data-testid'?: string;
}
export declare const Image: FC<ImageProps>;
//# sourceMappingURL=Image.d.ts.map
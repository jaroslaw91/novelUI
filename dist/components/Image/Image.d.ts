import { FC, ReactEventHandler } from 'react';
interface ImageProps {
    src: string;
    width?: number | string;
    height?: number | string;
    alt: string;
    variant?: 'default' | 'avatar';
    onClick?: ReactEventHandler<HTMLImageElement>;
    'data-testid'?: string;
}
export declare const Image: FC<ImageProps>;
export {};
//# sourceMappingURL=Image.d.ts.map
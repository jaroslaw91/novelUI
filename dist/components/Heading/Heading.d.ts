import { FC, ReactNode } from 'react';
export interface HeadingProps {
    level?: 1 | 2;
    children: ReactNode;
    align?: 'left' | 'center' | 'right';
    'data-testid'?: string;
}
export declare const Heading: FC<HeadingProps>;
//# sourceMappingURL=Heading.d.ts.map
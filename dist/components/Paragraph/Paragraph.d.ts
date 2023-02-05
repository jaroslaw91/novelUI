import { FC, ReactNode } from 'react';
export interface ParagraphProps {
    type?: 'default' | 'label' | 'error';
    children: ReactNode;
    size?: 'small' | 'medium' | 'big' | 'large' | 'huge';
    align?: 'left' | 'center' | 'right';
    'data-testid'?: string;
}
export declare const Paragraph: FC<ParagraphProps>;
//# sourceMappingURL=Paragraph.d.ts.map
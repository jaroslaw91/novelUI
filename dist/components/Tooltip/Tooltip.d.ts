import { FC, ReactNode } from 'react';
export interface TooltipProps {
    children: ReactNode;
    content: ReactNode;
    showOnClick?: boolean;
    isDisabled?: boolean;
    'data-testid'?: string;
}
export declare const Tooltip: FC<TooltipProps>;
//# sourceMappingURL=Tooltip.d.ts.map
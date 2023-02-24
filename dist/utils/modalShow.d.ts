import { ReactEventHandler, ReactNode } from 'react';
export type ModalShowProps = {
    id: string;
    title: string;
    subtitle?: string;
    content: ReactNode;
    variant?: 'primary' | 'secondary' | 'alert';
    action: ReactEventHandler<HTMLButtonElement>;
    actionName: string;
    cancelName: string;
};
export declare const modalShow: ({ id, title, subtitle, content, actionName, cancelName, variant, action, }: ModalShowProps) => Promise<unknown>;
//# sourceMappingURL=modalShow.d.ts.map
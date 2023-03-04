import { NiceModalHocProps } from '@ebay/nice-modal-react';
import { ReactNode } from 'react';
export type ModalShowProps = {
    title: string;
    subtitle?: string;
    content: ReactNode;
    variant?: 'primary' | 'secondary' | 'alert';
    action: () => void;
    actionName: string;
    cancelName: string;
} & NiceModalHocProps;
export declare const modalShow: ({ title, subtitle, content, actionName, cancelName, variant, action, ...modalProps }: ModalShowProps) => Promise<unknown>;
//# sourceMappingURL=modalShow.d.ts.map
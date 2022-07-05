import React, { ReactNode } from 'react';
export interface SubCardProps {
    children: ReactNode | string | null;
    content?: boolean;
    className?: string;
    contentClass?: string;
    darkTitle?: boolean;
    secondary?: ReactNode | string;
    sx?: {};
    contentSX?: {};
    title?: ReactNode | string;
}
declare const SubCard: React.ForwardRefExoticComponent<SubCardProps & React.RefAttributes<HTMLDivElement>>;
export default SubCard;

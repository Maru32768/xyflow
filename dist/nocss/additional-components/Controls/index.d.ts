import React, { HTMLAttributes, PropsWithChildren } from 'react';
import { FitViewParams } from '../../types';
export interface ControlProps extends HTMLAttributes<HTMLDivElement> {
    showZoom?: boolean;
    showFitView?: boolean;
    showInteractive?: boolean;
    fitViewParams?: FitViewParams;
    onZoomIn?: () => void;
    onZoomOut?: () => void;
    onFitView?: () => void;
    onInteractiveChange?: (interactiveStatus: boolean) => void;
}
export interface ControlButtonProps extends HTMLAttributes<HTMLButtonElement> {
}
export declare const ControlButton: ({ children, className, ...rest }: PropsWithChildren<ControlButtonProps>) => React.JSX.Element;
declare const _default: React.MemoExoticComponent<{
    ({ style, showZoom, showFitView, showInteractive, fitViewParams, onZoomIn, onZoomOut, onFitView, onInteractiveChange, className, children, }: React.PropsWithChildren<ControlProps>): React.JSX.Element | null;
    displayName: string;
}>;
export default _default;

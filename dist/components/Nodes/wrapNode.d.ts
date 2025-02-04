import React, { ComponentType } from 'react';
import { NodeComponentProps, WrapNodeProps } from '../../types';
declare const _default: (NodeComponent: ComponentType<NodeComponentProps>) => React.MemoExoticComponent<{
    ({ id, type, data, scale, xPos, yPos, selected, onClick, onMouseEnter, onMouseMove, onMouseLeave, onContextMenu, onNodeDoubleClick, onNodeDragStart, onNodeDrag, onNodeDragStop, style, className, isDraggable, isSelectable, isConnectable, selectNodesOnDrag, sourcePosition, targetPosition, isHidden, isInitialized, snapToGrid, snapGrid, isDragging, resizeObserver, dragHandle, }: WrapNodeProps): React.JSX.Element | null;
    displayName: string;
}>;
export default _default;

import { type NodeDragItem, type XYPosition, NodeBase } from '../types';

export function wrapSelectionDragFunc(selectionFunc?: (event: MouseEvent, nodes: NodeBase[]) => void) {
  return (event: MouseEvent, _: NodeBase, nodes: NodeBase[]) => selectionFunc?.(event, nodes);
}

export function isParentSelected<NodeType extends NodeBase>(node: NodeType, nodes: NodeType[]): boolean {
  if (!node.parentNode) {
    return false;
  }

  const parentNode = nodes.find((node) => node.id === node.parentNode);

  if (!parentNode) {
    return false;
  }

  if (parentNode.selected) {
    return true;
  }

  return isParentSelected(parentNode, nodes);
}

export function hasSelector(target: Element, selector: string, domNode: Element): boolean {
  let current = target;

  do {
    if (current?.matches(selector)) return true;
    if (current === domNode) return false;
    current = current.parentElement as Element;
  } while (current);

  return false;
}

// looks for all selected nodes and created a NodeDragItem for each of them
export function getDragItems<NodeType extends NodeBase>(
  nodes: NodeType[],
  nodesDraggable: boolean,
  mousePos: XYPosition,
  nodeId?: string
): NodeDragItem[] {
  return nodes
    .filter(
      (n) =>
        (n.selected || n.id === nodeId) &&
        (!n.parentNode || !isParentSelected(n, nodes)) &&
        (n.draggable || (nodesDraggable && typeof n.draggable === 'undefined'))
    )
    .map((node) => ({
      id: node.id,
      position: node.position || { x: 0, y: 0 },
      positionAbsolute: node.positionAbsolute || { x: 0, y: 0 },
      distance: {
        x: mousePos.x - (node.positionAbsolute?.x ?? 0),
        y: mousePos.y - (node.positionAbsolute?.y ?? 0),
      },
      delta: {
        x: 0,
        y: 0,
      },
      extent: node.extent,
      parentNode: node.parentNode,
      width: node.measuredWidth || node.width,
      height: node.measuredWidth || node.height,
      origin: node.origin,
      expandParent: node.expandParent,
    }));
}

// returns two params:
// 1. the dragged node (or the first of the list, if we are dragging a node selection)
// 2. array of selected nodes (for multi selections)
export function getEventHandlerParams<NodeType extends NodeBase>({
  nodeId,
  dragItems,
  nodeLookup,
}: {
  nodeId?: string;
  dragItems: NodeDragItem[];
  nodeLookup: Map<string, NodeType>;
}): [NodeType, NodeType[]] {
  const extentedDragItems: NodeType[] = dragItems.map((n) => {
    const node = nodeLookup.get(n.id)!;

    return {
      ...node,
      position: n.position,
      positionAbsolute: n.positionAbsolute,
    };
  });

  return [nodeId ? extentedDragItems.find((n) => n.id === nodeId)! : extentedDragItems[0], extentedDragItems];
}

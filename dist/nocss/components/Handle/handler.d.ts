import { MouseEvent as ReactMouseEvent } from 'react';
import { ElementId, XYPosition, OnConnectFunc, OnConnectStartFunc, OnConnectStopFunc, OnConnectEndFunc, ConnectionMode, SetConnectionId, Connection, HandleType } from '../../types';
type ValidConnectionFunc = (connection: Connection) => boolean;
export type SetSourceIdFunc = (params: SetConnectionId) => void;
export type SetPosition = (pos: XYPosition) => void;
export declare function onMouseDown(event: ReactMouseEvent, handleId: ElementId | null, nodeId: ElementId, setConnectionNodeId: SetSourceIdFunc, setPosition: SetPosition, onConnect: OnConnectFunc, isTarget: boolean, isValidConnection: ValidConnectionFunc, connectionMode: ConnectionMode, elementEdgeUpdaterType?: HandleType, onEdgeUpdateEnd?: (evt: MouseEvent) => void, onConnectStart?: OnConnectStartFunc, onConnectStop?: OnConnectStopFunc, onConnectEnd?: OnConnectEndFunc): void;
export {};

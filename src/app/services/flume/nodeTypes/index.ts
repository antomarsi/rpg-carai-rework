import { NodeType, PortType } from 'flume';
import { Attribute } from './BaseAttribute';
import { Number } from './number';
import { Sum } from './Sum';

export const NodeTypes: NodeType[] = [Sum, Number, Attribute];

export const PortTypes: PortType[] = [];

export const rootNodeTypes: NodeType[] = [];

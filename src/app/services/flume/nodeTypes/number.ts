import { NodeType } from 'flume';

const Node: NodeType = {
  type: 'number',
  label: 'Number',
  outputs: (ports) => [
    ports.number(),
  ],
  inputs: (ports) => [
    ports.number(),
  ],
};

const logic = {
  type: Node.type,
  logic: (inputValues: any, context: any) => {
    return inputValues.number;
  },
};

export { Node as Number, logic };

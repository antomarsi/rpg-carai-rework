import { NodeType } from 'flume';

const Node: NodeType = {
  type: 'attribute',
  label: 'Attribute',
  initialWidth: 140,
  outputs: (ports) => [
    ports.number(),
  ],
  inputs: (ports) => [
    ports.attribute({
      name: "attribute",
      label: "Attribute"
    }),
  ],
};

const logic = {
  type: Node.type,
  logic: (inputValues: any, context: any) => {
    return inputValues.number;
  },
};

export { Node as Attribute, logic };

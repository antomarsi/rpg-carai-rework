import { NodeType } from 'flume';

const Node: NodeType = {
  type: 'sum',
  label: 'Sum values',
  outputs: (ports) => [
    ports.number({
      name: 'First Value',
      label: 'SecondValue',
    }),
  ],
};

const logic = {
  type: Node.type,
  logic: (inputValues: any, context: any) => {
    return inputValues.number1 * inputValues.number2;
  },
};

export { Node as Multiply, logic };

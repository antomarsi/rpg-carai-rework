import { NodeType } from 'flume';

const Node: NodeType = {
  type: 'sum',
  label: 'Sum values',
  outputs: (ports) => [
    ports.number({
      name: 'sum Value',
      label: 'sumValue',
    }),
  ],
  inputs: (ports) => [
    ports.number({
      name: 'first Value',
      label: 'firstValue',
    }),
    ports.number({
      name: 'Second Value',
      label: 'secondValue',
    }),
  ],
};

const logic = {
  type: Node.type,
  logic: (inputValues: any, context: any) => {
    return inputValues.number1 + inputValues.number2;
  },
};

export { Node as Sum, logic };

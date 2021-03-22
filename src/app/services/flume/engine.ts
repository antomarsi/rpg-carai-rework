import { Node, NodeType } from 'flume';
import { logic as NumberLogic } from './nodeTypes/number';
import { logic as SumLogic } from './nodeTypes/Sum';

const resolversArray = [SumLogic, NumberLogic];

const resolveNodes = (
  node: Node,
  inputValues: any,
  nodeType: NodeType,
  context: any,
) => {
  switch (node.type) {
    case 'string':
      return { string: inputValues.string };
    case 'boolean':
      return { boolean: inputValues.boolean };
    case 'number':
      return { number: inputValues.number };
    case 'user':
      return context.user;
    case 'sum':
      return { value: inputValues.number1 + inputValues.number2 };
    case 'reverseBoolean':
      return { boolean: !inputValues.boolean };
    default:
      return inputValues;
  }
};

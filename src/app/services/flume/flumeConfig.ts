import { FlumeConfig } from 'flume';
import { NodeTypes, rootNodeTypes } from './nodeTypes/index';
import { attribute, number } from './ports/ports';

const ports = [number, attribute];

const config = new FlumeConfig();

for (const portType of ports) {
  config.addPortType(portType);
}
for (const nodeType of NodeTypes) {
  config.addNodeType(nodeType);
}

for (const rootNode of rootNodeTypes) {
  config.addRootNodeType(rootNode);
}

export default config;

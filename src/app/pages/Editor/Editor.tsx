import React from 'react';
import { NodeEditor } from 'flume';
import config from '@app/services/flume/flumeConfig';

// import { Container } from './styles';

const Editor: React.FC = () => {
  return (
    <div style={{ height: '100%' }}>
      <NodeEditor portTypes={config.portTypes} nodeTypes={config.nodeTypes} />
    </div>
  );
};

export default Editor;

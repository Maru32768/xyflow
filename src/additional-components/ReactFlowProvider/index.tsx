import React, { PropsWithChildren, useMemo} from 'react';
import { Provider } from 'react-redux';

import { initialState } from '../../store';
import configureStore from '../../store/configure-store';

const ReactFlowProvider = ({ children }: PropsWithChildren) => {
  const store = useMemo(() => {
    return configureStore(initialState);
  }, []);

  return <Provider store={store}>{children}</Provider>;
};

ReactFlowProvider.displayName = 'ReactFlowProvider';

export default ReactFlowProvider;

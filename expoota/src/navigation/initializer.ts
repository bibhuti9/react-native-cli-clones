import {AppRegistry} from 'react-native';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';

import {provider} from '../theme/provider';
import NavigatorContainer from '@navigators/NavigatorContainer';

export function createRootContainer() {
  return AppRegistry.registerComponent('expoota', () =>
    gestureHandlerRootHOC(provider(NavigatorContainer)),
  );
}

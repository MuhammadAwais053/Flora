import {StatusBar, useIsFocused} from '@react-navigation/native';

export function useStatusBar(props) {
  const isFocused = useIsFocused();
  return isFocused ? <StatusBar {...props} /> : null;
}

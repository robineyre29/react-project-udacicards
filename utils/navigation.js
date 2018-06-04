export function getNavigationParam(navigation, param) {
  return typeof navigation.state.params !== 'undefined'
    ? navigation.state.params[param]
    : null
}

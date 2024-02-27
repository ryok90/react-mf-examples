const errorLoadRemote = require('./hooks/errorLoadRemote');

// Plugin added to the current application.
// Reference to the following page to see each hook.
// https://github.com/module-federation/universe/tree/main/packages/runtime#hooks
/** @type {() => import('@module-federation/runtime').FederationRuntimePlugin} */
function runtimePlugin() {
  return {
    name: 'custom-plugin-next-js-mf-816',

    // Invoked if loading a federated module fails,
    // enabling custom error handling.
    errorLoadRemote,
  };
}

module.exports = runtimePlugin;

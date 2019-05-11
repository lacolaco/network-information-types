// Example: http://wicg.github.io/netinfo/#example-1
if (navigator.connection) {
  // Get the connection type.
  const type: ConnectionType = navigator.connection.type;

  // Get an upper bound on the downlink speed of the first network hop
  const max = navigator.connection.downlinkMax;

  const changeHandler = (e: Event) => {
    // Handle change to connection here.
  };

  // Register for event changes.
  navigator.connection.onchange = changeHandler;

  // Alternatively.
  navigator.connection.addEventListener('change', changeHandler);
}

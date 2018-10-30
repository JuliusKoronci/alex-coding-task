import React from 'react';

/**
 * Context to hold application state as there is no time to set up a state management library
 */
export const { Provider: TodoProvider, Consumer: TodoConsumer } = React.createContext();


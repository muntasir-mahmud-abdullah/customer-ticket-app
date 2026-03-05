# Project Q&A

- **What is JSX, and why is it used?**  
  JSX (JavaScript XML) is a syntax extension for JavaScript used with React to describe what the UI should look like. It allows developers to write HTML-like code directly inside JavaScript, making it easier to read, write, and maintain React components.

- **What is the difference between State and Props?**  
  State is local and mutable data managed directly within a component to track changes over time. Props (properties) are read-only data passed downwards from a parent component to child components to configure them.

- **What is the useState hook, and how does it work?**  
  The `useState` hook allows functional components to hold and update their own local state. It returns an array with two elements: the current state value and a function to update it. Calling the update function triggers a component re-render with the new state.

- **How can you share state between components in React?**  
  State can be shared by "lifting state up" to a common parent component, which then passes down the state and update functions via props. For deeply nested components or broader application state, you can use the React Context API or state management libraries like Redux or Zustand.

- **How is event handling done in React?**  
  React handles events using camelCase naming (e.g., `onClick`, `onChange`) instead of lowercase, and you pass a function reference (event handler) rather than a string. React also wraps native browser events in a `SyntheticEvent` to ensure consistent cross-browser compatibility.

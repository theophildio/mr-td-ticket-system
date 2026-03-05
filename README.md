# React Basic Concepts

---

## 1. What is JSX, and why is it used?

JSX stands for JavaScript XML. It allows developers to write HTML-like code inside JavaScript.

In React, JSX makes it easier to create the structure of the user interface. Instead of writing complicated JavaScript code to create elements, we can write code that looks very similar to HTML.

---

## 2. What is the difference between State and Props?

Both State and Props are used to handle data in React, but they are used in different ways.

Props:

- Props stands for Properties
- Used to pass data from a parent component to a child component
- Props are read-only, meaning the child component cannot modify them

State:

- State is used to store data inside a component
- State can change over time
- When state changes, React automatically updates the UI

---

## 3. What is the useState hook, and how does it work?

useState is a React Hook that allows functional components to use state.

It lets us store and update values that can change over time, such as counters, form inputs, or UI updates.

---

## 4. How can you share state between components in React?

To share state between components, the state is usually kept in a common parent component.

The parent component stores the state and passes it to child components using props.

If a child component needs to change the state, the parent can pass a function as a prop so the child can update it.

This concept is called lifting state up.

---

## 5. How is event handling done in React?

Event handling in React is similar to HTML events, but it uses camelCase naming and JavaScript functions.

## WELCOME TO ( সহজ সরল সিম্পল ) ASSIGNMENT-02

---

# Customer Support Zone

This project is a React-based **Customer Support Zone** designed to display customer tickets, track progress, and mark them as resolved. It follows a Figma design and includes additional features like status management, responsiveness, and toast notifications using **React-Toastify**.

---

## 📌 Features & Requirements 

### ✅ Navbar 

* Website name/logo on the **left**.
* Menu items and **New Ticket** button on the **right**.

### ✅ Banner

* Banner section designed according to Figma.
* Shows a **linear gradient** background.
* Displays ticket statistics:

  * **In Progress Count**
  * **Resolved Count** (default = 0).

### ✅ Main Section

1. **JSON Data **

   * Created **10–15 tickets** with the following properties:

     * `id`, `title`, `description`, `customer`, `priority`, `status`, `createdAt`.

2. **Ticket Cards**

   * Display all ticket information in a **card layout**.
   * Cards arranged in a **2-column grid** (left side).

3. **Task Status Section**

   * Clicking a card adds it to the **Task Status Section** (right side) and shows alert. It will increase the count of in-progress in banner
   * Task Status shows:

     * Ticket Title
     * **Complete Button**
   * Clicking **Complete Button**:

     * show alert


### ✅ Footer 

* Designed according to Figma.

### ✅ Responsiveness 

* The entire website is **responsive** for mobile devices.

### ✅ Readme: 

Create a README file to answer the following question-

 - **What is JSX, and why is it used?**  
   JSX (JavaScript XML) is a syntax extension for JavaScript used with React to describe what the UI should look like. It allows developers to write HTML-like code directly inside JavaScript, making it easier to read, write, and maintain React components.

 - **What is the difference between State and Props?**  
   State is local and mutable data managed directly within a component to track changes over time. Props (properties) are read-only data passed downwards from a parent component to child components.

 - **What is the useState hook, and how does it work?**  
   The `useState` hook allows functional components to hold and update their own local state. It returns an array with two elements: the current state value and a function to update it. Calling the update function triggers a component re-render.

 - **How can you share state between components in React?**  
   State can be shared by "lifting state up" to a common parent component, which passes down the state and update functions via props. For deeply nested components, you can use the React Context API or state management libraries.

 - **How is event handling done in React?**  
   React handles events using camelCase naming (e.g., `onClick`, `onChange`) instead of lowercase, and you pass a function reference (event handler) rather than a string. React also wraps native events in a `SyntheticEvent` to ensure cross-browser compatibility.

---

## 📌 Challenge Requirements 

### 🔔 React-Toastify 

* Used **React-Toastify** to replace all alerts with stylish toast notifications.

### 📝 Task Completion Logic 

Clicking **Complete Button**:

1. It is **removed from Task Status**. 
2. It is added to the **Resolved List**. 
3. The **In Progress count decreases**. 
4. The **Resolved count increases**. 
5. It is removed from the **Customer Tickets list**. 



## 🧰 Required Technology Stack

- **HTML**
- **CSS** (Vanilla / Tailwind / DaisyUI)
- **JavaScript**
- **React.js** (Mandatory)

> ⚠️ **Important:** The project must be built using **React.js**. Other frameworks such as Vue are not permitted.

---

## 📌 Project Rules

- ✅ At least **5 meaningful commits** are required.
- ❌ Do not use dummy text where real data can be displayed.

---

## 🔗 Submission
- **Live Link :** YOUR_DEPLOYED_URL_HERE
- **GitHub Repository:** YOUR_REPO_URL_HERE


### 📅 Deadline For 60 marks: 5th March, 2026 (11:59 pm ⏱️)

### 📅 Deadline For 50 marks: 6th March, 2026 (11:59 pm ⏱️)

### 📅 Deadline For 30 marks: Until the next assignment is published.

---

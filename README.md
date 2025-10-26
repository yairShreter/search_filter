# Live Search Filter - React Interview Task

## Overview
This is a minimal React application built with Vite, designed for conducting technical interviews. The candidate's task is to implement a **Live Search Filter** component that demonstrates their understanding of React fundamentals.

## Interview Task: "Live Search Filter" Component

### Task Goal
Create a React component that implements a Live Search Filter for a provided static list of employee data.

### Requirements

#### 1. State Management
- The component must maintain the current search term in its state
- The component must maintain the filtered list in its state
- Use React hooks (useState) appropriately

#### 2. User Input
- Include a text input field where the user can type a search query
- The input should have appropriate placeholder text
- Handle input changes properly

#### 3. Dynamic Filtering
- The displayed list should filter in real-time as the user types
- Filter should work across multiple fields (name, role, company)
- Case-insensitive search is expected
- Handle empty search states appropriately

#### 4. Component Structure
- The component must accept the initial data array as a prop
- Component should be reusable and well-structured
- Proper JSX structure and styling

### Getting Started

1. **Install dependencies** (if not already done):
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** to `http://localhost:5173`

### Files to Focus On

- `src/components/LiveSearchFilter.jsx` - **This is where you need to implement the solution**
- `src/App.jsx` - Contains the sample data and renders your component
- `src/App.css` - Styling is already provided

### Sample Data Structure
```javascript
{
  id: 1,
  name: 'Alice Johnson',
  role: 'Frontend Developer', 
  company: 'TechCorp'
}
```

### Expected Functionality

1. **Initial Load**: Display all employees in a clean, card-based layout
2. **Search Input**: As the user types, filter results in real-time
3. **Multi-field Search**: Search should work across name, role, and company fields
4. **No Results**: Handle the case when no employees match the search term
5. **Clear Search**: When the input is cleared, show all employees again

### Evaluation Criteria

- **Correctness**: Does the filtering work as expected?
- **Code Quality**: Clean, readable, and well-structured code
- **React Best Practices**: Proper use of hooks, component structure, and patterns
- **User Experience**: Smooth, responsive interface
- **Performance Considerations**: Efficient filtering logic

### Bonus Points

- Debounced search (for performance optimization)
- Highlighted search terms in results
- Keyboard navigation support
- Loading states
- Error handling

### Getting Help

- The component structure is already set up in `src/components/LiveSearchFilter.jsx`
- CSS classes are pre-defined for styling
- Sample data is passed as props from the parent component
- Focus on the React logic - styling is already handled

### Time Expectation

This task should take approximately **20-30 minutes** for an experienced React developer.

---

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Built With

- React 19.1.1
- Vite 7.1.7
- Modern ES6+ JavaScript

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

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

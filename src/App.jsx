import LiveSearchFilter from './components/LiveSearchFilter'
import LiveSearchFilterSolution from './components/LiveSearchFilterSolution'
import LiveSearchSimpleSolution from './components/LiveSearchSimpleSolution'
import './App.css'

// Sample data for the interview task
const sampleData = [
  { id: 1, name: 'Alice Johnson', role: 'Frontend Developer', company: 'TechCorp' },
  { id: 2, name: 'Bob Smith', role: 'Backend Developer', company: 'DataSoft' },
  { id: 3, name: 'Carol Brown', role: 'UI/UX Designer', company: 'DesignHub' },
  { id: 4, name: 'David Wilson', role: 'Full Stack Developer', company: 'WebSolutions' },
  { id: 5, name: 'Eva Martinez', role: 'Product Manager', company: 'StartupInc' },
  { id: 6, name: 'Frank Davis', role: 'DevOps Engineer', company: 'CloudTech' },
  { id: 7, name: 'Grace Lee', role: 'Data Scientist', company: 'Analytics Pro' },
  { id: 8, name: 'Henry Taylor', role: 'Mobile Developer', company: 'AppWorks' },
  { id: 9, name: 'Ivy Chen', role: 'QA Engineer', company: 'TestLabs' },
  { id: 10, name: 'Jack Robinson', role: 'System Administrator', company: 'IT Services' }
];

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Live Search Filter - Interview Task</h1>
        <p>Implement the LiveSearchFilter component below</p>
      </header>
      
      <main className="app-main">
        <LiveSearchSimpleSolution data={sampleData} />
      </main>
    </div>
  )
}

export default App

import { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList/TodoList.jsx'
import Header from './components/Header/Header.jsx';
import { DarkModeProvider } from './Context/DarkModeContext';
const filters = ['all','completed','active']
function App() {
  const [filter,setFilter] = useState(filters[0])
  const handleChangeFilter = (value)=>{
    setFilter(value)
  }
  return (
  <DarkModeProvider>
    <Header filters={filters} filter={filter} onChangeFilter={handleChangeFilter} />
    <TodoList filter={filter}/>
  </DarkModeProvider> 
  );
}

export default App;

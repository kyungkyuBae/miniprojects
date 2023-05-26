import { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList/TodoList.jsx'
import Header from './components/Header/Header.jsx';
const filters = ['all','completed','active']
function App() {
  const [filter,setFilter] = useState(filters[0])
  const handleChangeFilter = (value)=>{
    setFilter(value)
  }
  return (
  <>
    <Header filters={filters} handleChangeFilter={handleChangeFilter} />
    <TodoList filter={filter}/>
  </> 
  );
}

export default App;

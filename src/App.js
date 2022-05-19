import './App.css';
import Filters from './components/Filters';
import TopSelectedFilters from './components/TopSelectedFilters';
import { useGlobal } from './Context';

function App() {
  const {state, dispatch} = useGlobal();

  const {customFilters, selected} = state;

  console.log(customFilters)
  
  return (
    <div className="App">
      <Filters customFilters={customFilters} />
      <TopSelectedFilters customFilters={customFilters} selected={selected} />
    </div>
  );
}
export default App;

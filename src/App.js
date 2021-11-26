import './App.css';
import AddTask from './components/AddTask';
import TodoList from './components/TodoList';
import {Provider} from "react-redux"
import store from './js/Store';

function App() {
  return (
    <Provider store={store}>
      <div className="container">
      <TodoList />
      <AddTask />
    </div>
    </Provider>
  );
}

export default App;

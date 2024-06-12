import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AddTasks from "./components/AddTasks";
import TaskCount from "./components/TaskCount";
import TaskList from "./components/TaskList";
//import {TaskContext} from './contexts/TaskContext'
function App() {
  //let [tasks,setTasks]= useContext(TaskContext)
  return (
    <div className="App">
      <h1 className="text-center  display-1 text-primary bg-dark p-3">
        To-Do App
      </h1>
      <div className="row">
        <div className="col-sm-4 border p-5 bg-light ">
          <AddTasks />
        </div>
        <div className="col-sm-4 border p-5 bg-light">
          <TaskCount />
        </div>
        <div className="col-sm-4 border p-5 bg-light">
          <TaskList />
        </div>
      </div>
    </div>
  );
}

export default App;

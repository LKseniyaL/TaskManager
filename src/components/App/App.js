import "./App.css";
import UsersContainer from "../UsersContainer";
import AddUsersContainer from "../AddUsersContainer";
import AddTaskUser from "../AddTaskUser";

function App() {
  return (
    <div className="app">
      <h2>User hinzufügen</h2>
      <AddUsersContainer />
      <h2>Task hinzufügen</h2>
      <AddTaskUser />
      <UsersContainer />
    </div>
  );
}

export default App;

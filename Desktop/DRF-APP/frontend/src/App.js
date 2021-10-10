import {
  BrowserRouter as Router,
  Route, 
} from "react-router-dom";
import './App.css';
import Header from './components/header'
import NotesListPage from './pages/NotesListPage'
import Notepage from './pages/Notepage'

function App() {
  return (
    <Router>
    <div className="App">
    <Header/>
      <Route path="/" exact component={NotesListPage}/>
      <Route path="/note/:id" component={Notepage}/>
    </div>
    </Router>
  );
}
export default App;

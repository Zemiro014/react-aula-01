import logo from './logo.svg';
import GitImage from './githubimage.png';
import './App.css';

function App() {
  return (
    <div className = "container text-center">
      <h1 className="py-5 text-uppercase"> Git Hub Profile</h1>
      <form >
        <div className="form-group">
          <div className="input-group">
            <input type="text"
            className="form-control"
            required
            />
            <span className="input-group-btn">
              <button type = "submit" className="btn btn-success"> Search</button>
            </span>
          </div>  
        </div>    
      </form>
      <div className="py-5">
        <img src={GitImage} className="responsive rounded-circle" alt="" height="200px"/>
        <h1 className="pt-5">
          <a href="https://github.com/Zemiro014" target="_new"> Jeronimo Kulandissa</a>
        </h1>
      </div>
    </div>
  );
}

export default App;

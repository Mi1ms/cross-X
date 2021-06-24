import './App.css';
import  api from './helpers/api'


function updtText(props) {
  api.sendText(props);
}

function addFormat(style) {
  const txtHL = window.getSelection().toString();
  console.log(style, txtHL);
  console.log()
}

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-1"></div>
          <div className="col">
            <div className="btn-group" role="group" aria-label="Basic outlined example">
              <button type="button" className="btn btn-outline-primary" onClick={() => addFormat('italic')}>Italic</button>
              <button type="button" className="btn btn-outline-primary" onClick={() => addFormat('bold')}>Bold</button>
              {/* <button type="button" className="btn btn-outline-primary">List</button> */}
            </div>
          </div>
          <div className="col-1"></div>
        </div>
        <div className='row'>
            <textarea className="form-control pageTxt"  
            onChange={(event) => updtText(event.target.value)}
            // value
            ></textarea>

        </div>
      </div>
    </div>
  );
}

export default App;

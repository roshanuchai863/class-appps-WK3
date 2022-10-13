import logo from './logo.svg';
import './App.css';
import { Header } from './conponents/Header';

function App() {
  return (
    <div className="App">
      
      <div classname="navbar bg-light">
        <div className='container-fluid'>
          <a className="navbar-brand" href='#'>Navbar</a>
        </div>


        <Header title="MY App"/>

<div  className="cantainer-fluid">



  <div className="row">
<div className='col'>
  <h2>coloum 1</h2>
  </div>
  <div className='col'>
  <h2>coloum 3</h2>
  </div>
  <div className='col'>
  <h2>coloum4 </h2>
  </div>



  </div>
</div>



<footer>
  <p>hello Roshan</p>
</footer>
</div>



      </div>
   
  );
}

export default App;

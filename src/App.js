import Sidebar from './components/Sidebar'
import Cards from './components/Cards'
import Graph from './components/Graph'
import Product from './components/Products'
import './App.css';

function App() {
  return (
    <>
      <div className='final11'>
        <div className='slidebar11'>
          <Sidebar />
        </div>
        <div className='project-page11'>
          <Cards />
          <Graph />
          <Product />
        </div>
      </div>
      {/* <div className="App bg-red-50 ">
        <div className='flex '>
          <div className='fixed'>
            <Sidebar />
          </div>
          <div className='project-page'>
            <Cards />
            <Graph />
            <Product />
          </div>
        </div>
        <div>

        </div> */}

      {/* <Graph/> */}
      {/* <Overview /> */}
    {/* </div > */}
    </>
  );
}

export default App;

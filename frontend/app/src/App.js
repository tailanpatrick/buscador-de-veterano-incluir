
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen md:min-h-screen bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-500 text-black">
      <Navbar/>
      <div class="max-w-screen md:w-[800px] mx-auto">
          <Home/>
      </div>
    </div>
  );
}

export default App;

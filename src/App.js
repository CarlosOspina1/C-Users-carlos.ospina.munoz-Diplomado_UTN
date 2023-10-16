import Index from "./Components/layout/Index";
import Behance from "./Components/layout/Behance";
import CodeGit from "./Components/layout/CodeGit";
import SocialMedia from "./Components/layout/SocialMedia";
import Mockups from "./Components/layout/Mockups";
import Contact from "./Components/layout/Contact";
import './App.css';

function App() {
  
  return (
    <div className="App">
      <nav>
        <Index/>
        <Behance/>
        <CodeGit/>
        <SocialMedia/>
        <Mockups/>
        <Contact/>

      </nav>

    </div>
  );
}

export default App;

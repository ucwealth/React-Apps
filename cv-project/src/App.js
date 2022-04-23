import Education from "./components/Education";
import Footer from "./components/Footer";
import GeneralInfo from "./components/General";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import './components/styles.css'

function App() {
  return (
    <div className="container">
      <GeneralInfo />
      <Skills />
      <WorkExperience />
      <Education />
      <Footer />
    </div>
  );
}

export default App;

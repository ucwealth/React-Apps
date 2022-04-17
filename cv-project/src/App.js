import Education from "./components/Education";
import Footer from "./components/Footer";
import GeneralInfo from "./components/General";
import Navbar from "./components/Navbar";
import WorkExperience from "./components/WorkExperience";

function App() {
  return (
    <div className="App">
      <Navbar />
      <GeneralInfo />
      <Education />
      <WorkExperience />
      <Footer />
    </div>
  );
}

export default App;

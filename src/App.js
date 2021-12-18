import './App.css';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Contacts from "./Contacts/Contacts";
import DamirUakhit from "./Damir/DamirUakhit";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

    return (
        <div className="App">
            <div id={'main'}>
                <Header/>
            </div>
            <Main/>
            <div id={'skill_id'}>
                <Skills/>
            </div>
            <div id={'projects_id'}>
                <Projects/>
            </div>
            <div id={'contacts_id'}>
                <Contacts/>
            </div>
            <footer id={'references_id'}>
                <DamirUakhit/>
            </footer>
        </div>
    );
}

export default App;

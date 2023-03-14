import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import './App.css'
import Sidebar from "../Sidebar/Sidebar";

function App() {
    return (
        <div className="container">
            <Header />
            <Main></Main>
            <Sidebar></Sidebar>
            <Footer />
        </div>
    )
}
export default App;
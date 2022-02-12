import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './common/components/navbar';
import Footer from './common/components/footer';
//import Home from './pages/home/';
//import ViewPost from './pages/viewpost';
import Write from './pages/write';

function App() {
    return (
        <div className="App">
            <NavBar />
            <Write />
            <Footer />
        </div>
    );
}

export default App;

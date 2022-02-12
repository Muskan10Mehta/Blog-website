import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './common/components/navbar';
import Footer from './common/components/footer';
//import Home from './pages/home/';
import ViewPost from './pages/viewpost';

function App() {
    return (
        <div className="App">
            <NavBar />
            <ViewPost />
            <Footer />
        </div>
    );
}

export default App;

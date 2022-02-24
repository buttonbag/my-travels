import './App.css';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import data from './data';

function App() {
	const travels = data.map((place) => {
		// console.log(place);
		return <Cards {...place} />;
	});
	return (
		<div className="App">
			<Navbar />
			{travels}
		</div>
	);
}

export default App;

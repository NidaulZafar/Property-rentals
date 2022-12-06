import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/About';
import Favorites from './pages/Favorites';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Footer from './components/Footer/Footer';
import PropertyDetails from './pages/RentalProperties/PropertyDetails';
import PropertyList from './pages/RentalProperties/PropertyList';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function App() {
return (
	<Router>
		<Navbar />
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/properties/:id' element={<PropertyDetails />} />
			<Route path='/about' element={<About />} />
			<Route path='categories/:id' element={<PropertyList />} />
			<Route path='/favorites' element={<Favorites />} />
			<Route path='/contact' element={<Contact />} />
			<Route path='*' element={<NotFound />} />
		</Routes>
		<Footer />
	</Router>
);
}

export default App;

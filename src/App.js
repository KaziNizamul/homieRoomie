// external imports
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// components
import Home from './pages/Home';
//styles
import styles from './main.module.scss';

function App() {
  return (
    <div className={styles.appContainer}> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

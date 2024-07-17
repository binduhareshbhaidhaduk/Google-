
import { Routes, Route } from 'react-router-dom';
import ContactCreate from './component/ContactCreate/ContactCreate'
import ContactEdit from './component/ContactEdit/ContactEdit'
import Home from './component/Home/Home'
import './App.css'
// import Sidebar from './component/Sidebar/Sidebar';
import Header from './component/Header/Header';

function App() {
  return (
    <>
      <Header />
      {/* <Sidebar /> */}
      <Routes>
        {/* <Route path='/sidebar' element={<Sidebar />}/> */}
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<ContactCreate />} />
        <Route path="/edit/:id" element={<ContactEdit />} />
      </Routes>
    </>
  );
}

export default App;

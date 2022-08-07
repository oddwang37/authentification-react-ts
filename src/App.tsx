import { Routes, Route } from 'react-router-dom';

import { SignIn, SignUp, MyProfile } from './pages';
import { Header } from './components';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MyProfile />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default App;

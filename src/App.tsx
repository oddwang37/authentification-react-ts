import { SignIn } from './pages';
import { Header } from './components';

const App = () => {
  return (
    <div className="App">
      <Header username="Владислав Селиванов" />
      <SignIn />
    </div>
  );
};

export default App;

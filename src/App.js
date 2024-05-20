
import './App.css';
import Button from './Button';

function App() {
  return (
    <div className="App">
      <Button 
        bgColor="red"
        type="submit"
        size="full"
      />
      <Button 
        bgColor="blue"
        type="button"
      />
    </div>
  );
}

export default App;

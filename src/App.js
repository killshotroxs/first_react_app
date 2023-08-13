import Greeter from './components/Greeter.jsx';
import Counter from './components/Counter.jsx';
import './App.css';

function App(props) {
  return (
    <div>
    <h1>Hi I am {props.message} {props.msg}</h1>
    <Greeter name='Shanti'></Greeter>
    <Greeter name='Manoj'></Greeter>
    <Counter></Counter>
    </div>
  );
}

export default App;

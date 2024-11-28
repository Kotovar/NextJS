import { useStore } from '@/shared/store';

const App = () => {
  {
    const { count, inc } = useStore();

    return (
      <div>
        <span>{count}</span>
        <button onClick={inc}>one up</button>
      </div>
    );
  }
};

export default App;

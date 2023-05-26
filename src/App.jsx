import { colors } from "@semantic-conventional/demo-lib";
import { createSignal, For } from 'solid-js';

function App() {
  return (
    <div>
      <ul>
        <For each={colors}>{color => <li>{color.name}</li>}</For>
      </ul>
    </div>
  );
}

export default App;

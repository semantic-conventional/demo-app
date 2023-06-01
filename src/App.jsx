import { colors } from "@semantic-conventional/demo-lib";
import { createSignal, For } from 'solid-js';
import styles from "./App.module.css"

function App() {
  const [selectedColorIndex, setSelectedColorIndex] = createSignal(0)

  const selectedColorCode = () => colors[selectedColorIndex()].code

  const isActive = (index) => index === selectedColorIndex()

  return (
    <div class={styles.container} style={{ "background-color": selectedColorCode() }}>
      <div class={styles.card}>
          <For each={colors}>{(color, index) => 
            <div class={styles.option} onclick={() => setSelectedColorIndex(index)} active={index() === selectedColorIndex()}>
              <div class={styles.circle} style={{ "background-color": color.code }}></div>
              {color.name}
            </div>
          }</For>
      </div>
      <div class={styles.card}>
        <div class={styles.footer}>
          Version {__APP_VERSION__} &bull; 
          <a href="https://github.com/semantic-conventional/demo-app" target="_blank">GitHub</a>
        </div>
      </div>
    </div>
  );
}

export default App;

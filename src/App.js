import { useState } from 'react';
import './App.css';
import Tool from './Tool/Tool';

const App = () => {
  // eslint-disable-next-line 
  const [toolState, setToolState] = useState({
    tools: [
      { id: Math.random(), name: "Ciseau", width: "0.3" },
      { id: Math.random(), name: "Compas", width: "0.4" },
      { id: Math.random(), name: "Corde", width: "0.2" }
    ]
  });

  const [showState, setShowState] = useState({
    showTools: false
  });

  // const changeState = () => {
  //   setToolState({
  //     tools: [
  //       { name: "Ciseau", width: "0.2" },
  //       { name: "Compas", width: "0.2" },
  //       { name: "Corde", width: "0.2" }
  //     ]
  //   });
  // };

  // const changeName = (event) => {
  //   setToolState({
  //     tools: [
  //       { name: "Ciseau", width: "0.2" },
  //       { name: event.target.value, width: "0.2" },
  //       { name: "Corde", width: "0.2" }
  //     ]
  //   });
  // };

  const deleteTool = (toolIndex) => {
    const tools = toolState.tools;
    tools.splice(toolIndex, 1);
    setToolState({ tools: tools });
  }

  const toggleToolsHandler = () => {
    const doesShow = showState.showTools;
    setShowState({ showTools: !doesShow });
  };

  let tools = null;

  if (showState.showTools) {
    tools = (
      <div>
        {toolState.tools.map((tool, index) => {
          return <Tool
            deleted={() => deleteTool(index)}
            name={tool.name}
            width={tool.width}
          />
        })}
      </div>
    );
  }

  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  };

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <button style={style} onClick={toggleToolsHandler}>Show Tools</button>
      {tools}
    </div>
  );
}

export default App;

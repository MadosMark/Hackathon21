import Unity, { UnityContext } from "react-unity-webgl";
import './App.css';


const unityContext = new UnityContext({
  loaderUrl: "./HackaThonBuild/Build/HackaThonBuild.loader.js",
  dataUrl: "./HackaThonBuild/Build/HackaThonBuild.data",
  frameworkUrl: "./HackaThonBuild/Build/HackaThonBuild.framework.js",
  codeUrl: "./HackaThonBuild/Build/HackaThonBuild.wasm",
});


function App() {
  console.log(unityContext);
  return (
    <div className="App">
      <Unity unityContext={unityContext} style={{width:'70vw'}}/>
    </div>
    
  );
}

export default App;

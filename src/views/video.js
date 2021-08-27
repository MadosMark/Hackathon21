import React from 'react';
import Unity, { UnityContext } from "react-unity-webgl";
import Navbar from '../components/nav';
import '../views/video.css';




const unityContext = new UnityContext({
    loaderUrl: "./HackaThonBuildReal/Build/HackaThonBuild.loader.js",
    dataUrl: "./HackaThonBuildReal/Build/HackaThonBuild.data",
    frameworkUrl: "./HackaThonBuildReal/Build/HackaThonBuild.framework.js",
    codeUrl: "./HackaThonBuildReal/Build/HackaThonBuild.wasm",
  });

  

function Video () {
    return (
         <>
         <section className="gameContainer">
         <Navbar></Navbar>
         <div className="videoDiv">
         <Unity unityContext={unityContext} style={{width:'85vw'}}/>
         
         
         </div>
         </section>
         </>
    );

}

export default Video;
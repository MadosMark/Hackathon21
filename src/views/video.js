import React from 'react';
import Unity, { UnityContext } from "react-unity-webgl";
import Navbar from '../components/nav';
import '../views/video.css';




const unityContext = new UnityContext({
    loaderUrl: "./HackaThonBuild/Build/HackaThonBuild.loader.js",
    dataUrl: "./HackaThonBuild/Build/HackaThonBuild.data",
    frameworkUrl: "./HackaThonBuild/Build/HackaThonBuild.framework.js",
    codeUrl: "./HackaThonBuild/Build/HackaThonBuild.wasm",
  });

  

function Video () {
    return (
         <>
         <Navbar></Navbar>
         <div className="videoDiv">
         <Unity unityContext={unityContext} style={{width:'85vw'}}/>
         
         
         </div>
         </>
    );

}

export default Video;
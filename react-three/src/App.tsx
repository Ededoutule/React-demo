import React from 'react';
// import logo from './image/logo.svg';
import './App.css';
// import avatar from './image/avatar.png'
import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

function App() {
    return (
        <div className="App">
            App...
        </div>
  );
}

export default App;

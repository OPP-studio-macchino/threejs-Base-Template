import './style.css'
import * as THREE from 'three';

// canvasタグの取得
const canvas = document.querySelector('.webgl');

// 必須の3要素
/////////////////////////////////////////////
// シーン
const scene = new THREE.Scene();

/////////////////////////////////////////////
// サイズ設定
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

/////////////////////////////////////////////

// カメラ
const camera = new THREE.PerspectiveCamera(
  35,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.z = 6;
scene.add(camera);
/////////////////////////////////////////////
// レンダラー
const renderer = new THREE.WebGLRenderer(
  {
    canvas: canvas,
    alpha: true,
  }
);
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(window.devicePixelRatio);

renderer.render(scene, camera);
/////////////////////////////////////////////

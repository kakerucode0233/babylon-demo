/* eslint-disable */
import { Engine, Scene, ArcRotateCamera, Vector3, MeshBuilder, StandardMaterial, Color3, HemisphericLight, PointLight, SpotLight, SceneLoader, FollowCamera, VirtualJoysticksCamera, FreeCamera, ActionManager, ExecuteCodeAction } from "@babylonjs/core";
/* eslint-enable */

import "@babylonjs/loaders/glTF";
// import glbFile from "../assets/room.glb";

var engine;
var scene;
var camera;

//////////////////////////////////////////////////////////////////////////////////
// メイン
//////////////////////////////////////////////////////////////////////////////////
const createScene = (canvas) => {
  engine = new Engine(canvas);
  scene = new Scene(engine);

  // 部屋のメッシュロード
  createRoom();

  // カメラ作成
  createCamera(canvas);

  // ライト
  createLight();

  engine.runRenderLoop(() => {
    scene.render();
  });
};

//////////////////////////////////////////////////////////////////////////////////
// メソッド
//////////////////////////////////////////////////////////////////////////////////
// 部屋の作成
var createRoom = function(){
  SceneLoader.ImportMeshAsync("","https://kakerucode0233.github.io/models/", "room2.glb", scene)
}

// カメラ作成
var createCamera = function (canvas) {
  camera = new VirtualJoysticksCamera("vrCam", new Vector3(0, 0, 0), scene);

  scene.onPointerDown = function () {
      scene.onPointerDown = undefined
      camera.attachControl(canvas, true);
      camera.inputs.attached.virtualJoystick.getLeftJoystick().setJoystickSensibility(0.01);
      camera.inputs.attached.virtualJoystick.getRightJoystick().setJoystickSensibility(0.01);
  }
}

// ライトの作成
var createLight = function(){
  new HemisphericLight("light", Vector3.Up(), scene);
  var pl = new PointLight("pointLight", new Vector3(0,1.3,-0.1), scene);
  pl.diffuse = new Color3(1, 0.7, 0.6);
  // pl.specular = new Color3(1, 0, 0);
  // var sl = new SpotLight("spotLight", new Vector3(0, 1, 2), new Vector3(0, 0, 0), Math.PI / 3, 2, scene);
}

export { createScene };

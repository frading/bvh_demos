import { SceneDataManifestImporter } from "@polygonjs/polygonjs/dist/src/engine/io/manifest/import/SceneData";
const manifest = {
  properties: "1696603151347",
  root: "1696603151347",
  nodes: {
    COP: "1696603151347",
    env: "1696603173944",
    "env/MAT": "1696603173944",
    cameras: "1696603173944",
    "cameras/cameraControls1": "1696603173944",
    lights: "1696603173944",
    geo1: "1696603173944",
    "geo1/MAT": "1696603173944",
    "geo1/MAT/meshStandardBuilder_GROUND": "1696603173944",
    "geo1/physicsWorld1": "1696603173944",
    "geo1/physicsDebug1": "1696603173944",
    "geo1/pointBuilder1": "1696603173944",
  },
  shaders: {
    "/geo1/MAT/meshStandardBuilder_GROUND": {
      vertex: "1696603173944",
      fragment: "1696603173944",
      "customDepthMaterial.vertex": "1696603173944",
      "customDepthMaterial.fragment": "1696603173944",
      "customDistanceMaterial.vertex": "1696603173944",
      "customDistanceMaterial.fragment": "1696603173944",
      "customDepthDOFMaterial.vertex": "1696603173944",
      "customDepthDOFMaterial.fragment": "1696603173944",
    },
  },
  jsFunctionBodies: {
    "/geo1/physicsWorld1": "1696603173944",
    "/geo1/physicsDebug1": "1696603173944",
    "/geo1/pointBuilder1": "1696603173944",
  },
};

export const loadSceneData_bvh_demo_heightfield = async (options = {}) => {
  const sceneDataRoot = options.sceneDataRoot || "./polygonjs/scenes";
  return await SceneDataManifestImporter.importSceneData({
    sceneName: "bvh_demo_heightfield",
    urlPrefix: sceneDataRoot + "/bvh_demo_heightfield",
    manifest: manifest,
    onProgress: options.onProgress,
  });
};

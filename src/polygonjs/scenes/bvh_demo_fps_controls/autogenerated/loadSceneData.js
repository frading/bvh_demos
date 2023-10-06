import { SceneDataManifestImporter } from "@polygonjs/polygonjs/dist/src/engine/io/manifest/import/SceneData";
const manifest = {
  properties: "1696602924028",
  root: "1696602924028",
  nodes: {
    COP: "1696602775998",
    lights: "1696602924028",
    cameras: "1696602924028",
    "cameras/cameraControls1": "1696602924028",
    "cameras/cameraControls2": "1696602924028",
    level: "1696602924028",
    "level/MAT": "1696602924028",
    env: "1696602924028",
    "env/MAT": "1696602924028",
    "env/MAT/meshStandardBuilder1": "1696602992641",
  },
  shaders: {
    "/env/MAT/meshStandardBuilder1": {
      vertex: "1696602924028",
      fragment: "1696602924028",
      "customDepthMaterial.vertex": "1696602924028",
      "customDepthMaterial.fragment": "1696602924028",
      "customDistanceMaterial.vertex": "1696602924028",
      "customDistanceMaterial.fragment": "1696602924028",
      "customDepthDOFMaterial.vertex": "1696602924028",
      "customDepthDOFMaterial.fragment": "1696602924028",
    },
  },
  jsFunctionBodies: {},
};

export const loadSceneData_bvh_demo_fps_controls = async (options = {}) => {
  const sceneDataRoot = options.sceneDataRoot || "./polygonjs/scenes";
  return await SceneDataManifestImporter.importSceneData({
    sceneName: "bvh_demo_fps_controls",
    urlPrefix: sceneDataRoot + "/bvh_demo_fps_controls",
    manifest: manifest,
    onProgress: options.onProgress,
  });
};

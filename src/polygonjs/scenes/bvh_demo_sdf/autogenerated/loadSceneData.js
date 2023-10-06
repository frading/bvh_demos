import { SceneDataManifestImporter } from "@polygonjs/polygonjs/dist/src/engine/io/manifest/import/SceneData";
const manifest = {
  properties: "1696603695566",
  root: "1696603647050",
  nodes: {
    COP: "1696603662985",
    cameras: "1696603662985",
    "cameras/cameraControls1": "1696603662985",
    "cameras/cameraRenderer1": "1696603662985",
    lights: "1696603662985",
    raymarchedObject: "1696603662985",
    "raymarchedObject/COP": "1696603662985",
    "raymarchedObject/MAT": "1696603662985",
    "raymarchedObject/MAT/rayMarchingBuilder1": "1696603695566",
  },
  shaders: {
    "/raymarchedObject/MAT/rayMarchingBuilder1": {
      vertex: "1696603662985",
      fragment: "1696603662985",
      "customDepthMaterial.vertex": "1696603662985",
      "customDepthMaterial.fragment": "1696603662985",
      "customDistanceMaterial.vertex": "1696603662985",
      "customDistanceMaterial.fragment": "1696603662985",
    },
  },
  jsFunctionBodies: {},
};

export const loadSceneData_bvh_demo_sdf = async (options = {}) => {
  const sceneDataRoot = options.sceneDataRoot || "./polygonjs/scenes";
  return await SceneDataManifestImporter.importSceneData({
    sceneName: "bvh_demo_sdf",
    urlPrefix: sceneDataRoot + "/bvh_demo_sdf",
    manifest: manifest,
    onProgress: options.onProgress,
  });
};

import { SceneDataManifestImporter } from "@polygonjs/polygonjs/dist/src/engine/io/manifest/import/SceneData";
const manifest = {
  properties: "1696603196834",
  root: "1696603196834",
  nodes: {
    COP: "1696603196834",
    env: "1696603202306",
    "env/MAT": "1696603202306",
    cameras: "1696603202306",
    "cameras/cameraControls1": "1696603202306",
    lights: "1696603202306",
    geo1: "1696603202306",
    "geo1/MAT": "1696603202306",
    "geo1/MAT/meshStandardBuilder1": "1696603202306",
    "geo1/MAT/meshLambertBuilder_INSTANCES": "1696603202306",
    "geo1/physicsWorld1": "1696603202306",
    "geo1/physicsDebug1": "1696603202306",
  },
  shaders: {
    "/geo1/MAT/meshStandardBuilder1": {
      vertex: "1696603202306",
      fragment: "1696603202306",
      "customDepthMaterial.vertex": "1696603202306",
      "customDepthMaterial.fragment": "1696603202306",
      "customDistanceMaterial.vertex": "1696603202306",
      "customDistanceMaterial.fragment": "1696603202306",
      "customDepthDOFMaterial.vertex": "1696603202306",
      "customDepthDOFMaterial.fragment": "1696603202306",
    },
    "/geo1/MAT/meshLambertBuilder_INSTANCES": {
      vertex: "1696603202306",
      fragment: "1696603202306",
      "customDepthMaterial.vertex": "1696603202306",
      "customDepthMaterial.fragment": "1696603202306",
      "customDistanceMaterial.vertex": "1696603202306",
      "customDistanceMaterial.fragment": "1696603202306",
      "customDepthDOFMaterial.vertex": "1696603202306",
      "customDepthDOFMaterial.fragment": "1696603202306",
    },
  },
  jsFunctionBodies: {
    "/geo1/physicsWorld1": "1696603202306",
    "/geo1/physicsDebug1": "1696603202306",
  },
};

export const loadSceneData_bvh_demo_delete_inside_object = async (
  options = {}
) => {
  const sceneDataRoot = options.sceneDataRoot || "./polygonjs/scenes";
  return await SceneDataManifestImporter.importSceneData({
    sceneName: "bvh_demo_delete_inside_object",
    urlPrefix: sceneDataRoot + "/bvh_demo_delete_inside_object",
    manifest: manifest,
    onProgress: options.onProgress,
  });
};

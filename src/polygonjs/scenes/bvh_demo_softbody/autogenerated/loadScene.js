import { loadSceneData_bvh_demo_softbody } from "./loadSceneData.js";

export const loadScene_bvh_demo_softbody = async function (options = {}) {
  const {
    onProgress,
    domElement,
    configureSceneData,
    autoPlay,
    createViewer,
    sceneDataRoot,
    assetsRoot,
    libsRootPrefix,
    printWarnings,
    renderer,
    cameraMaskOverride,
  } = options;
  let sceneData = options.sceneData;

  const runRegister = options.runRegister != null ? options.runRegister : true;
  const loadModules = options.loadModules != null ? options.loadModules : true;

  const moduleNames = loadModules ? ["TET"] : [];
  const modulePromises = [import("./modules/TET.js")];
  const promises = [
    import("./loadSceneFromSceneData.js"),
    sceneData == null
      ? loadSceneData_bvh_demo_softbody({ onProgress, sceneDataRoot })
      : (() => {
          return new Promise((resolve) => resolve());
        })(),
    ...modulePromises,
  ];
  const results = await Promise.all(promises);
  const { Poly, loadSceneFromSceneData_bvh_demo_softbody } = results[0];
  if (sceneData == null) {
    sceneData = results[1];
  }
  if (configureSceneData) {
    configureSceneData(sceneData);
  }

  const loadedModules = [];
  for (let i = 2; i < results.length; i++) {
    loadedModules.push(results[i]);
  }
  // register modules
  let i = 0;
  for (let moduleName of moduleNames) {
    const moduleNameContainer = moduleName + "Module";
    Poly.registerModule(loadedModules[i][moduleNameContainer], printWarnings);
    i++;
  }

  const loadedData = await loadSceneFromSceneData_bvh_demo_softbody({
    onProgress,
    sceneData,
    domElement,
    runRegister,
    autoPlay,
    createViewer,
    assetsRoot,
    libsRootPrefix,
    printWarnings,
    renderer,
    cameraMaskOverride,
  });
  return loadedData;
};
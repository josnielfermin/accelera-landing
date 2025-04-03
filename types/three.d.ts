// types/three.d.ts
declare module 'three/examples/jsm/loaders/FBXLoader' {
  import { Loader } from 'three';
  export class FBXLoader extends Loader {
    constructor(manager?: any);
    load(
      url: string,
      onLoad: Function,
      onProgress?: Function,
      onError?: Function
    ): void;
    setPath(path: string): this;
    setTexturePath(path: string): this;
  }
}

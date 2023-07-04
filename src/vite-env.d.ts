/// <reference types="vite/client" />

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}


declare module "@shopify/draggable" {
  const Swappable: any
  const Droppable: any
}
import { createApp, App } from 'vue';

class EventBus {
  private vueInstance: App;

  constructor() {
    this.vueInstance = createApp({});
  }

  public $on(event: string, callback: (...args: any[]) => void): void {
    this.vueInstance.config.globalProperties.$on(event, callback);
  }

  public $off(event: string, callback?: (...args: any[]) => void): void {
    this.vueInstance.config.globalProperties.$off(event, callback);
  }

  public $emit(event: string, ...args: any[]): void {
    this.vueInstance.config.globalProperties.$emit(event, ...args);
  }
}

const eventBus = new EventBus();

export default eventBus;

// vuex.d.ts

declare module 'vuex' {
    export type { Store } from 'vuex';
  
    function createStore<S>(options?: StoreOptions<S>): Store<S>;
  
    interface StoreOptions<S> {
      state?: S;
      mutations?: Mutations;
      getters?: Getters<S>;
      actions?: Actions<S>;
    }
  
    interface Mutations {
      [mutationName: string]: (state: S, payload: any) => void;
    }
  
    interface Getters<S> {
      [getterName: string]: (state: S, getters: Getters<S>) => any;
    }
  
    interface Actions<S> {
      [actionName: string]: (
        context: {
          state: S;
          commit: (mutationName: string, payload: any) => void;
          dispatch: (actionName: string, payload: any) => void;
        },
        payload: any,
      ) => void;
    }
  }
  
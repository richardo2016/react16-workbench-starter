import { generateStoreManager } from "./react-helpers/store";

const { attach, useCtxState } = generateStoreManager();

// const noOp = () => undefined

const initialState = {
  sidebarCollapsed: false
};

const reducer: React.Reducer<typeof initialState, any> = (state, action) => {
  switch (action.type) {
    case 'toggle:sidebarCollapsed':
      return {
        ...state,
        sidebarCollapsed: typeof action.sidebarCollapsed === 'boolean' ? action.sidebarCollapsed : !state.sidebarCollapsed
      }
    default:
      return state;
  }
};

const computer = {};

export const connect = (Target: React.Component | React.FunctionComponent) => attach(Target, { state: initialState, reducer })
export { useCtxState, computer };

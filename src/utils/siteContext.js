import React, { createContext, useReducer } from "react";

const INITIAL_CONTEXT_STATE = {
  userName: 'Our customer',
  userGender: 'genderless'
};

const reducer = (state, action) => {
  switch (action.type) {
    case "RESET":
      return INITIAL_CONTEXT_STATE;

    case "UPDATE_NAME":
      return {
        ...state,
        userName: action.name
      };

    case "UPDATE_GENDER":
    return {
      ...state,
      userGender: action.gender
    };

    default:
      return state;
  }
};

const SiteContext = createContext();

export const SiteContextConsumer = SiteContext.Consumer;

export const SiteContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_CONTEXT_STATE);
  const value = { state, dispatch };

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
};


// maps state in site context store to props that the component will receive
export const connectSiteContext = (
  mapContextStateToProps = data => data
) => Component => props => (
  <SiteContextConsumer>
    {data => <Component {...mapContextStateToProps(data)} {...props} />}
  </SiteContextConsumer>
);

export default SiteContext;

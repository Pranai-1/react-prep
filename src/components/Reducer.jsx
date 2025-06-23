import { createContext, useEffect, useReducer } from "react";

// 🟢 1. Capitalize context name by convention
export const ContextProvider = createContext();

export default function Reducer({ children }) {
  const [state, dispatch] = useReducer(userReducer, { name: "" });

  useEffect(() => {
    async function getUserDetails() {
      let response = await fetch("http://localhost:4001/dashboard", {
        method: "GET",
        credentials: "include", // 🟢 2. Needed to send cookies
      });

      if (response.status === 200) {
        let data = await response.json();
        dispatch({ type: "set", payload: data.user });
      }
    }

    getUserDetails();
  }, []);



  async function logout() {
    let response = await fetch("http://localhost:4001/logout", {
      method: "POST",
      credentials: "include", // 🟢 3. Again, required for cookie-based auth
    });

    if (response.status === 200) {
      dispatch({ type: "reset" });
    }
  }

  return (
    // 🟢 4. Fix JSX: use correct context name and closing tag
    <ContextProvider.Provider value={{ state, logout,dispatch }}>
      {children}
    </ContextProvider.Provider>
  );
}

// 🟢 5. Move this outside the component and fix reducer logic
function userReducer(state, action) {
  switch (action.type) {
    case "set":
      return { name: action.payload };
    case "reset":
      return { name: "" };
    default:
      return state;
  }
}

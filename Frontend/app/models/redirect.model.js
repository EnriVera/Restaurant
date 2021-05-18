
import Cookies from "universal-cookie";
const Redirect = (router) => {
    const cookies = new Cookies();
    const token = cookies.get("Authorization");
    switch (router.pathname) {
        case "/":
          if (token) router.replace("/dashboard");
        case "/dashboard":
            if (!token) router.replace("/");
          break;
      }
};

export default Redirect

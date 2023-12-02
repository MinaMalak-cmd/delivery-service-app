import { useState } from "react";

const useLogin = () => {
    const [x, setX] = useState(5);
    
    return {
        x
    };
}
 
export default useLogin;
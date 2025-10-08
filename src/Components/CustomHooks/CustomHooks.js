
import { useEffect, useState } from "react";

const useApps = () => {
  const [Apps, setApps] = useState([]);
  const [Isloading, setIsLoading] = useState(true);
  const [Err, setEr] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch("/Apps.json")
      .then((res) => res.json())
      .then((data) => setApps(data)).catch(err=>setEr(err)).finally(()=>setIsLoading(false));
  }, []);

  return { Apps, Isloading, Err };
};

export default useApps;
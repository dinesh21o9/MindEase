import { useEffect, useState } from "react";
import { token } from "../config";

const userFetchData = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchfData = async () => {
      setLoading(true);

      try {
        const res = await fetch(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const result = await res.json();

        if (!res.ok) {
          throw new Error(result.message);
        }

        setData(result.data);
        console.log("yoi yoi userDatafetch")
        console.log(result.data);

        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }
    };
    fetchfData();
  }, [url]);

  return {
    data,
    loading,
    error,
  };
};

export default userFetchData;

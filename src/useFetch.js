import { useEffect, useState } from "react";
import axios from "axios";


export function useFetch(url) {
    const [count, setName] = useState([]);
    
      useEffect (() => {
        axios.get(url)
        .then((res) => {
            console.log(res.data);
            setName(res.data.count);
        });
      }, []);

      return { count };
};

  
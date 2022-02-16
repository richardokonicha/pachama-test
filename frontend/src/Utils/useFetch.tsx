import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = (slug: string) => {
    const [forest, setForest] = useState(null)
    useEffect(() => {
        const refreshList = () => {
            axios
                .get("http://localhost:8000/api/" + slug)
                .then((res) => setForest(res.data))
                .catch((err) => console.log(err, "ppf"));
        };
        refreshList()
    }, [slug]);
    return forest
}

const useFetchAll = () => {
    const [forests, setForests] = useState<any[]>([])
    useEffect(() => {
        const refreshList = () => {
            axios
                .get("http://localhost:8000/api/")
                .then((res) => setForests(res.data))
                .catch((err) => console.log(err));
        };
        refreshList()
    }, []);
    return forests
}

export { useFetch, useFetchAll }
export default useFetch
import { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataFromApi } from "./utils/api";
import { getGenres, getApiConfiguration } from "./store/homeSlice";
fetchDataFromApi;
function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);
  console.log(url?.results);
  useEffect(() => {
    apiTesting();
  }, []);

  const apiTesting = () => {
    fetchDataFromApi("/movie/popular").then((res) => {
      dispatch(getApiConfiguration(res));
    });
  };

  return <div className="App">{url?.total_pages}</div>;
}

export default App;

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../hook";
import { fetchNews } from "../store/newsSlice";
import NewsList from "./NewsList";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";


const News = () => {
  const { t } = useTranslation();
  const { loading, error } = useAppSelector((state) => state.news);
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(2);

  const addNews = () => {
    setPage(page + 1);
    dispatch(fetchNews(page));
  };
  
  return (
    <Container maxWidth="lg">
      {loading && <h2>Loading...</h2>}
      {error && <h2>An error occured: {error}</h2>}
      <NewsList />
      <Button
        variant="outlined"
        sx={{
          width: "300px",
          height: "50px",
          fontSize: "20px",
          margin: "auto",
          mb: 3,
        }}
        onClick={addNews}
      >
        {t("MORE POSTS")}
      </Button>
    </Container>
  );
};

export default News;

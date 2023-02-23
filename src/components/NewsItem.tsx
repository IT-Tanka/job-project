import { useAppDispatch } from "../hook";
import { deleteNews } from "../store/newsSlice";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

interface NewsItemProps {
    id: string;
    title: string;
    body: string;
}

const NewsItem: React.FC<NewsItemProps> = ({ id, title, body }) => {
    const dispatch = useAppDispatch();

    return (
        <li>
            <Paper
                elevation={3}
                sx={{
                    textAlign: "right",
                    p: 1,
                    pb:4,
                    mt: 2,
                }}
            >
                <Button
                    variant="outlined"
                    sx={{
                        width: "30px",
                        height: "30px",
                        fontSize: "20px",
                    }}
                    onClick={() => dispatch(deleteNews(id))}
                >
                    &times;
                </Button>
                <Box
                    sx={{
                        width: "80%",
                        margin: "auto",
                        textAlign: "center",
                    }}
                >
                    <h3 >{title.toLocaleUpperCase()}</h3>
                    <p>{body}</p>
                </Box>
            </Paper>
        </li>
    );
};

export default NewsItem;

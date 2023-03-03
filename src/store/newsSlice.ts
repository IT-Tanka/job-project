import { createSlice, PayloadAction, createAsyncThunk, AnyAction } from '@reduxjs/toolkit';

type NewsItem = {
    id: string;
    title: string;
    body: string;
}

type NewsState = {
    list: NewsItem[];
    loading: boolean;
    error: string | null;
}

export const fetchNews = createAsyncThunk<NewsItem[], number, { rejectValue: string, state: { news: NewsState } }>(
    'news/fetchNews',
    async function (num, { rejectWithValue, getState }) {
        const news = getState().news.list;
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${num}`);

        if (!response.ok) {
            return rejectWithValue('Server Error!');
        }

        const data = await response.json();
        return news.concat(data);
    }
);

export const deleteNews = createAsyncThunk<string, string, { rejectValue: string }>(
    'news/deleteNews',
    async function (id, { rejectWithValue }) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE',
        })

        if (!response.ok) {
            return rejectWithValue('Can\'t delete news. Server error.');
        }

        return id;
    }
);

const initialState: NewsState = {
    list: [],
    loading: false,
    error: null,
}

const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchNews.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchNews.fulfilled, (state, action) => {
                state.list = action.payload;
                state.loading = false;
            })

            .addCase(deleteNews.fulfilled, (state, action) => {
                state.list = state.list.filter(news => news.id !== action.payload);
            })
            .addMatcher(isError, (state, action: PayloadAction<string>) => {
                state.error = action.payload;
                state.loading = false;
            });
    }
});

export default newsSlice.reducer;

function isError(action: AnyAction) {
    return action.type.endsWith('rejected');
}

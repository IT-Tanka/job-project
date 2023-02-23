    import { useAppSelector } from '../hook';
    import NewsItem from './NewsItem';
    
    const NewsList: React.FC = () => {
        const news = useAppSelector(state => state.news.list);

    return (
        
        <ul>
        {news.map((item) => (
            <NewsItem 
            key={item.id}
            {...item}
            />
        ))}
        </ul>
    );
    };

    export default NewsList;
import { useParams } from 'react-router-dom';

const NewsItem = () => {

	const { id } = useParams();

	const info = {
		id: id,
	};

	return info.id;

};

export default NewsItem;

import { Link } from 'react-router-dom';

type Props = {
    id: number;
    title: string;
}

export const AlbumItem = ({ id, title }: Props) => {

    return (
        <Link to={`/album/${id}`} className="block p-3 m-5 border-2 border-black">
            {title}
        </Link>   
    );
}
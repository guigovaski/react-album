import { Link } from 'react-router-dom';

import { PhotoType } from '../../types/Photo';

type Props = {
    data: PhotoType;
}

export const PhotoItem = ({ data }: Props) => {
    return (
        <Link to={`/photo/${data.id}`} className="inline-block m-2">
            <img src={data.thumbnailUrl} alt={data.title} />
        </Link>  
    );
}
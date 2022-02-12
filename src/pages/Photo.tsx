import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { PhotoType } from '../types/Photo';
import { api } from '../api/AlbumApi';

export const Photo = () => {
    const params = useParams();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [photo, setPhoto] = useState<PhotoType>();

    useEffect(() => {
        loadPhoto(params.id as string);
    }, [])

    const loadPhoto = async (id : string) => {
        setLoading(true);
        const getPhoto = await api.getPhoto(id);
        setPhoto(getPhoto);
        setLoading(false);
    }

    const handleBackButton = () => {
        navigate(-1);
    }

    return (
        <div className="">
            {loading &&
                'Carregando...'
            }
            <button onClick={handleBackButton} className="">Voltar</button>
            {photo &&
            <>
                <h2>{photo.title}</h2>
                <img src={photo.url} alt={photo.title} />
            </>
            }
        </div>
    );
}
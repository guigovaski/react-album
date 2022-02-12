import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { api } from '../api/AlbumApi'
import { AlbumType } from '../types/Album';
import { PhotoType } from '../types/Photo';
import { PhotoItem } from '../components/PhotoItem';

export const Album = () => {
    const params = useParams();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [album, setAlbum] = useState<AlbumType>({id: 0, title: '', userID: 0});
    const [photo, setPhoto] = useState<PhotoType[]>([]);

    useEffect(() => {
        if (params.id) {
            loadPhotos(params.id);
            loadAlbum(params.id);
        }
    }, [])

    const loadPhotos = async (id: string) => {
        setLoading(true);
        const getPhotos = await api.getAllPhotos(id);
        setPhoto(getPhotos);
        setLoading(false);
    }

    const loadAlbum = async (id: string) => {
        const getAlbum = await api.getAlbum(id);
        setAlbum(getAlbum);
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
            <>
                <h1>{album.title}</h1>
                {photo.map((item, index) => (
                    <PhotoItem
                        key={index}
                        data={item}
                    />
                ))}
            </>
        </div>
    );
}
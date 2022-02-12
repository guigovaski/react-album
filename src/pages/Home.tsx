import { useState, useEffect } from 'react';
import { api } from '../api/AlbumApi';
import { AlbumType } from '../types/Album';
import { AlbumItem } from '../components/AlbumItem';

export const Home = () => {
    const [loading, setLoading] = useState(false);
    const [albums, setAlbums] = useState<AlbumType[]>([]);
    
    useEffect(() => {
        loadAlbums();
    }, []);
    
    const loadAlbums = async () => {
        try {
            setLoading(true);
            let json = await api.getAllAlbums();
            setAlbums(json);
            setLoading(false);
        } catch (err) {
            setAlbums([]);
            console.log(err);
        }
    }
    
    return (
        <div className="m-0 p-5">
            {loading && 
                'Carregando...'
            }
            <div className="">
                {albums.map((item, index) => (
                    <AlbumItem 
                    key={index}
                    id={item.id} 
                    title={item.title} />
                ))}
            </div>
        </div>
    );
}
import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Album } from '../pages/Album';
import { Photo } from '../pages/Photo';
import { NotFound } from '../pages/NotFound';

export const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/album/:id" element={<Album />} />
            <Route path="/photo/:id" element={<Photo />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}
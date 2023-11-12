import { useEffect, useState } from 'react';

export const useAppleMusic = () => {
    const [music, setMusic] = useState<MusicKit.MusicKitInstance | null>(null);

    useEffect(() => {
        fetch('https://js-cdn.music.apple.com/musickit/v1/musickit.js')
            .then(response => response.text())
            .then(text => {
                eval(text);
                // Now you can use MusicKit
                const musicInstance = MusicKit.getInstance();
                setMusic(musicInstance);
            })
            .catch(error => console.error('Error:', error));
    }, []); // Empty dependency array means this effect runs once on mount

    return music;
};
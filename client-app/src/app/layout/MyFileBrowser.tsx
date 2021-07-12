import { FullFileBrowser } from 'chonky';

export const MyFileBrowser = () => {
    const files = [
        { id: 'lht1', name: 'Onsite Forms', isDir: true },
        { id: 'lht2', name: 'Offsite Forms', isDir: true },

    ];
    const folderChain = [{ id: 'xcv', name: 'Forms', isDir: true }];
    return (
        <div style={{ height: 300 }}>
            <FullFileBrowser files={files} folderChain={folderChain} />
        </div>
    );
};
import React, { useEffect } from 'react';
import { useUploadHook } from './hooks/useUploadHook';
import { useDeleteHook } from './hooks/useDeleteHook';

export const Upload = () => {

    const {
        files,
        percent,
        handleChange,
        handleUpload,
        handleGetAll
    } = useUploadHook();

    const { deleteImage } = useDeleteHook();
    
    useEffect(() => {
        handleGetAll();
    }, [])

    return (
        <div>
            <input type='file' onChange={handleChange} accept=''/>
            <button onClick={() => handleUpload()}>Upload to FireBase</button>
            <p>{percent} "% done"</p>

            {
                files.map( (item, key) => {
                    return <img width='100px' src= { item } key={key} />
                })
            }

                        {files.map((file, index) => (
                <div key={index}>
                    <img src={file.url} alt={file.name} />
                    <button onClick={() => deleteImage(file.name)}>Delete</button>
                </div>
            ))}
        </div>
    )
}
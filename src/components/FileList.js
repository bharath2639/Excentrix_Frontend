import React from 'react';
// import styles from './styles.module.css';
import styles from '../styles/styles.css';

const FileList = ({ files }) => {
    return (
        <ul className={styles.file_list}>
            {files.map((file) => (
                <li key={file._id}>
                    <a href={`https://excentrix-project2639-2.onrender.com/uploads/${file.filename}`} download>
                        {file.filename}
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default FileList;

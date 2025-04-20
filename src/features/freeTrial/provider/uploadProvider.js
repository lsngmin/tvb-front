import {createContext, useContext, useState} from "react";

const UploadContext = createContext();

export const UploadProvider = ({ children }) => {
    const [uploadData, setUploadData] = useState(null);

    return (
        <UploadContext.Provider value={{ uploadData, setUploadData }}>
            {children}
        </UploadContext.Provider>
    );
};

export const useUpload = () => useContext(UploadContext);

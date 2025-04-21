import {createContext, useContext, useState} from "react";

const UploadContext = createContext();

/**
 * UploadProvider 컴포넌트는 업로드한 파일의 UUID 값을 전역적으로 관리하는 컨텍스트 공급자입니다.
 * 이미지 분석 요청 시 UUID를 함께 전송하기 위해 상태를 유지합니다.
 *
 * @component
 * @param {{ children: React.ReactNode }} props - 하위 컴포넌트들을 포함하는 React children
 * @returns {JSX.Element} - UploadContext.Provider로 감싼 children을 반환
 */
export const UploadProvider = ({ children }) => {
    const [uploadData, setUploadData] = useState(null);

    return (
        <UploadContext.Provider value={{ uploadData, setUploadData }}>
            {children}
        </UploadContext.Provider>
    );
};

export const useUpload = () => useContext(UploadContext);

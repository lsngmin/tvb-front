import React, { useState } from "react";

export default function FileUploader({ onUpload }) {
    /*
    드래그 앤 드롭 기능
     */
    const [dragging, setDragging] = useState(false);
    const handleDragOver = (e) => {
        e.preventDefault();
        setDragging(true);
    };
    const handleDragLeave = () => {
        setDragging(false);
    };
    // onUpload에 파일을 담아 상위 컴포넌트에 전달합니다
    const handleDrop = async (e) => {
        e.preventDefault();
        setDragging(false);

        const file = e.dataTransfer.files[0];
        if (file) {
            onUpload(file);
        }
    };

    // 클릭 이벤트 발생 시 파일 업로드 창 활성화
    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        if (file) {
            onUpload(file);
        }
    };

    return (
        <>
            <div className={`${dragging ? "bg-blue-100 border-blue-400" : "bg-gray-50 border-gray-300"}`}
                 onDragOver={handleDragOver}
                 onDragLeave={handleDragLeave}
                 onDrop={handleDrop}
            >
                <label htmlFor="dropzone-file" className="flex justify-center border-2
                border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50
                dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600
                dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                    <div className="flex flex-col items-center py-24">
                        <svg className="w-8 py-6  text-gray-500 dark:text-gray-400" aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                        </svg>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or
                            drag and drop</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX.
                            800x400px)</p>
                    </div>
                    <input
                        id="dropzone-file"
                        type="file"
                        className="hidden"
                        onChange={handleFileChange}
                        accept="image/*"
                    />
                </label>
            </div>
        </>
    )
};

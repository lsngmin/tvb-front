import React, {useEffect} from "react";
import {GridLoader} from "react-spinners";
import FileAnalyzeAPI from "features/freeTrial/api/fileAnalyzeAPI"

export default function SecondStep({onUploadComplete, onLoading, analyzeResult}) {
    //secondStep이 렌더링 되면 바로 분석 요청을 실행합니다.
    useEffect(() => {
        handleFileChange();
    }, []);

    const {fileAnalyze} = FileAnalyzeAPI();
    /**
     * 로딩 스피너가 동작합니다.
     * 이미지 분석 요청 API를 호출합니다 사용자의 이미지 UUID는 해당 API에서 불러와 처리합니다.
     * 정상흐름이라면 로딩 스피너를 멈추고 onUploadComplete를 통해 완료됐다는 동작을 전달하여 애니메이션이 동작하게 합니다.
     * analyzeResult에 JSON 형태의 분석 결과를 저장하고 상위 컴포넌트로 전달합니다.
     *
     * error가 발생하면 스피너의 동작을 멈추고 예외처리 합니다.
     *
     * @returns {Promise<void>} - 반환값은 존재하지 않지만 API 요청을 통해 받아온 분석 결과를 analyzeResult에 저장하여 전달합니다.
     */
    const handleFileChange = async () => {
        onLoading(true);
        const response = await fileAnalyze();//todo fileAnalyze에서 throw하는 error를 catch하는 로직이 필요합니다.
        if (response?.status === 200) {
            onLoading(false);
            onUploadComplete();
            analyzeResult(response.data)
        } else {
            //todo 에러 발생 시 예외처리 로직이 필요합니다.
            onLoading(false);
        }
    };

    return (
        <div className={`max-w-sm sm:max-w-7xl mx-auto p-6 mt-10 rounded-2xl shadow-lg border border-gray-200`}>
        <div className="flex justify-center py-10">
            <GridLoader
                loading
                margin={7}
                size={22}
                speedMultiplier={1.1}
            />
        </div>
        </div>
    );
}

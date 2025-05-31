import {useEffect, useRef, useState} from "react";
import {Transition} from "@headlessui/react";
import {DashboardAPI, GenerateApiKeyAPI} from "../api/dashboardAPI";
import {useAuth} from "../../../providers/authProvider";

const ApiKeyCard = ({token}) => {
    const [copied, setCopied] = useState(false);
    const [generate, setGenerate] = useState(false);
    const [apikey, setApikey] = useState("");

    const timerRef1 = useRef(null);
    const timerRef2 = useRef(null);

    useEffect(() => {
        if(token !== null) {
            setApikey(token);
        }
    }, []);
    const {generateToken} = GenerateApiKeyAPI();

    const generateApiKey = () => {
        const apikey = async () => {
            try {
                const t = await generateToken();
                console.log("apikey", t);
                return t.data;
            } catch (error) {
                console.error(error);
            }
        };
    }

    const triggerCopyToast = () => {
        navigator.clipboard.writeText(apikey)
            .then(() => {
                setCopied(true);
                if (timerRef1.current) clearTimeout(timerRef1.current);
                timerRef1.current = setTimeout(() => setCopied(false), 3000);
            })
            .catch(() => {
                // 복사 실패 시 에러 처리 (선택)
                // setCopy(false) 등 원하는 동작
            });
    };
    const triggerGenerateToast = async () => {
        try {
            // 1) 토큰 발급 API 호출
            const response = await generateToken();
            // axios 기준: response.data 에 실제 바디가 들어있다고 가정
            // 만약 response.data 가 { token: '...' } 형태라면:
            const token = response.data;
            // 만약 response.data 가 바로 토큰 문자열이라면:
            // const token = response.data;

            // 2) state 업데이트
            setApikey(token);
            setGenerate(true);

            // 3) 기존 타이머가 있으면 클리어
            if (timerRef2.current) {
                clearTimeout(timerRef2.current);
            }
            // 4) 3초 뒤에 토스트 숨기기
            timerRef2.current = setTimeout(() => {
                setGenerate(false);
            }, 3000);

        } catch (error) {
            console.error("API 키 생성 중 오류:", error);
        }
    };

    return (
        <div
            className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800  md:p-6">
            <div className="flex">
                <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
                    <svg width="1.6em" height="1.6em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 14H12.5M7 10H17M10 19H6.2C5.0799 19 4.51984 19 4.09202 18.782C3.71569 18.5903 3.40973 18.2843 3.21799 17.908C3 17.4802 3 16.9201 3 15.8V8.2C3 7.07989 3 6.51984 3.21799 6.09202C3.40973 5.71569 3.71569 5.40973 4.09202 5.21799C4.51984 5 5.0799 5 6.2 5H17.8C18.9201 5 19.4802 5 19.908 5.21799C20.2843 5.40973 20.5903 5.71569 20.782 6.09202C21 6.51984 21 7.0799 21 8.2V8.5M14 20L16.025 19.595C16.2015 19.5597 16.2898 19.542 16.3721 19.5097C16.4452 19.4811 16.5147 19.4439 16.579 19.399C16.6516 19.3484 16.7152 19.2848 16.8426 19.1574L21 15C21.5523 14.4477 21.5523 13.5523 21 13C20.4477 12.4477 19.5523 12.4477 19 13L14.8426 17.1574C14.7152 17.2848 14.6516 17.3484 14.601 17.421C14.5561 17.4853 14.5189 17.5548 14.4903 17.6279C14.458 17.7102 14.4403 17.7985 14.405 17.975L14 20Z"
                              stroke="#aaaaaa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <Transition
                    show={generate}
                    enter="transition-all duration-300"
                    enterFrom="opacity-0 -translate-y-2"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition-all duration-300"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-2"
                >
                    <div className="h-12 ml-3 flex items-center bg-blue-100 rounded-lg p-4 text-sm text-blue-700" role="alert">
                        <svg className="w-5 h-5 inline mr-3" fill="currentColor" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                  clip-rule="evenodd"></path>
                        </svg>
                        <div>
                            <span className="font-medium">API key created!</span> Copy and save it somewhere safe.
                        </div>
                    </div>
                </Transition>
            </div>
            <div className="mt-5">
                <div className="">
                    <span className="text-sm text-gray-500 dark:text-gray-400">API KEY · </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">Expires: 2025-12-31</span>

                    <div className="flex gap-2 mt-2 items-center">
                        <input type="text" id="name" value={apikey}
                               className="text-xs text-slate-500 h-11 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"/>
                        <button type="button" title="복사" onClick={triggerGenerateToast}
                                className="h-11 aspect-square px-2 py-2 rounded-md border border-gray-100 bg-gray-100 outline-none flex items-center justify-center">
                            <svg width="1.2em" height="1.2em" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M5 3V9M5 9L3 7M5 9L7 7M11 4H17.8C18.9201 4 19.4802 4 19.908 4.21799C20.2843 4.40973 20.5903 4.71569 20.782 5.09202C21 5.51984 21 6.0799 21 7.2V16M3 16V13M2 16H22V16.8C22 17.9201 22 18.4802 21.782 18.908C21.5903 19.2843 21.2843 19.5903 20.908 19.782C20.4802 20 19.9201 20 18.8 20H5.2C4.0799 20 3.51984 20 3.09202 19.782C2.71569 19.5903 2.40973 19.2843 2.21799 18.908C2 18.4802 2 17.9201 2 16.8V16Z"
                                    stroke="#000000" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"/>
                            </svg>
                        </button>
                        <button
                            type="button"
                            title={copied ? "복사됨" : "복사"}
                            onClick={triggerCopyToast}
                            className={`
    h-11 aspect-square px-2 py-2 rounded-md border border-gray-100 
    bg-gray-100 outline-none flex items-center justify-center
    transition-all duration-150
    ${copied ? "bg-green-200 border-green-400" : "hover:bg-gray-200 active:bg-gray-300"}
  `}
                        >
                            {copied ? (
                                // 체크 아이콘 (lucide-react, heroicons 등 아무거나 가능)
                                <svg width="1.4em" height="1.4em" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 13l4 4L19 7" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            ) : (
                                // 클립보드 아이콘 (네가 쓴 SVG)
                                <svg width="1.2em" height="1.2em" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8 8H7.2C6.0799 8 5.51984 8 5.09202 8.21799C4.71569 8.40973 4.40973 8.71569 4.21799 9.09202C4 9.51984 4 10.0799 4 11.2V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2843 4.71569 19.5903 5.09202 19.782C5.51984 20 6.0799 20 7.2 20H12.8C13.9201 20 14.4802 20 14.908 19.782C15.2843 19.5903 15.5903 19.2843 15.782 18.908C16 18.4802 16 17.9201 16 16.8V16M11.2 16H16.8C17.9201 16 18.4802 16 18.908 15.782C19.2843 15.5903 19.5903 15.2843 19.782 14.908C20 14.4802 20 13.9201 20 12.8V7.2C20 6.0799 20 5.51984 19.782 5.09202C19.5903 4.71569 19.2843 4.40973 18.908 4.21799C18.4802 4 17.9201 4 16.8 4H11.2C10.0799 4 9.51984 4 9.09202 4.21799C8.71569 4.40973 8.40973 4.71569 8.21799 5.09202C8 5.51984 8 6.07989 8 7.2V12.8C8 13.9201 8 14.4802 8.21799 14.908C8.40973 15.2843 8.71569 15.5903 9.09202 15.782C9.51984 16 10.0799 16 11.2 16Z"
                                        stroke="#000000" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ApiKeyCard;
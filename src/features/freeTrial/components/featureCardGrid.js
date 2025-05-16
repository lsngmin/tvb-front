import React from "react";

const featureCardGrid = () => {
    return (
        <div className="flex gap-16 items-center justify-center mt-4 ">
            <div className="flex flex-col items-center gap-2 max-w-xs whitespace-normal break-words">
                <div className="w-14 h-14 rounded-full bg-white ring-0 shadow-lg flex items-center justify-center">
                    <svg width="28px" height="28px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.2647 15.9377L12.5473 14.2346C11.758 13.4519 11.3633 13.0605 10.9089 12.9137C10.5092 12.7845 10.079 12.7845 9.67922 12.9137C9.22485 13.0605 8.83017 13.4519 8.04082 14.2346L4.04193 18.2622M14.2647 15.9377L14.606 15.5991C15.412 14.7999 15.8149 14.4003 16.2773 14.2545C16.6839 14.1262 17.1208 14.1312 17.5244 14.2688C17.9832 14.4253 18.3769 14.834 19.1642 15.6515L20 16.5001M14.2647 15.9377L18.22 19.9628M12 4H7.2C6.07989 4 5.51984 4 5.09202 4.21799C4.7157 4.40973 4.40973 4.71569 4.21799 5.09202C4 5.51984 4 6.0799 4 7.2V16.8C4 17.4466 4 17.9066 4.04193 18.2622M4.04193 18.2622C4.07264 18.5226 4.12583 18.7271 4.21799 18.908C4.40973 19.2843 4.7157 19.5903 5.09202 19.782C5.51984 20 6.07989 20 7.2 20H16.8C17.9201 20 18.4802 20 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V12M16 3L18.5 5.5M18.5 5.5L21 8M18.5 5.5L21 3M18.5 5.5L16 8" stroke="#4238cb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <p className="text-lg font-semibold text-gray-700 text-center">
                    Image not saved
                </p>
                <p className="text-xs font-extralight text-gray-500 tracking-tight text-center mt-2">
                    Your uploads are processed in-memory only and never written to disk.
                    We ensure complete privacy by discarding all temporary image data immediately after analysis.
                </p>
            </div>
            <div className="flex flex-col items-center gap-2 max-w-xs whitespace-normal break-words">
                <div className="w-14 h-14 rounded-full bg-white ring-0 shadow-lg flex items-center justify-center">
                    <svg width="28px" height="28px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 14.5V16.5M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288" stroke="#4238cb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <p className="text-lg font-semibold text-gray-700 text-center">
                    Encrypted Data Transfer
                </p>
                <p className="text-xs font-extralight text-gray-500 tracking-tight text-center mt-2">
                    All data sent between your application and our servers is secured with end-to-end encryption.
                    Industry-standard TLS protocols protect every request and response from interception or tampering.
                </p>

            </div>
            <div className="flex flex-col items-center gap-2 max-w-xs whitespace-normal break-words">
                <div className="w-14 h-14 rounded-full bg-white ring-0 shadow-lg flex items-center justify-center">
                    <svg width="28px" height="28px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 13.2222L10.8462 15L15 11M8.4 19C5.41766 19 3 16.6044 3 13.6493C3 11.2001 4.8 8.9375 7.5 8.5C8.34694 6.48637 10.3514 5 12.6893 5C15.684 5 18.1317 7.32251 18.3 10.25C19.8893 10.9449 21 12.6503 21 14.4969C21 16.9839 18.9853 19 16.5 19L8.4 19Z" stroke="#4238cb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <p className="text-lg font-semibold text-gray-700 text-center">
                    Cloud Computing Environment
                </p>
                <p className="text-xs font-extralight text-gray-500 tracking-tight text-center mt-2">
                    Our service runs on a scalable, high-availability cloud infrastructure.
                    Benefit from elastic resources and automatic failover to keep your API calls fast and reliable.
                </p>
            </div>
        </div>
    )
}
export default featureCardGrid;
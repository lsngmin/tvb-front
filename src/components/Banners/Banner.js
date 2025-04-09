import { XMarkIcon } from '@heroicons/react/20/solid'
import {useState} from "react";

export default function Banner() {
    const today = new Date();
    const formatted = today.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
    });
    const [visible, setVisible] = useState(true);
    if (!visible) return null;
    return (
        <>
            <div className="lg:hidden relative isolate flex  items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
                <div className="flex flex-wrap justify-center w-full items-center gap-x-4 gap-y-2">
                    <p className="text-xs text-gray-900">
                        <strong className="font-semibold">{formatted}</strong>
                        <svg viewBox="0 0 2 2" aria-hidden="true" className="mx-2 inline size-0.5 fill-current">
                            <circle r={1} cx={1} cy={1} />
                        </svg>
                        we’d love your feedback!
                    </p>

                    <a
                        href="#"
                        className="flex-none rounded-full bg-gray-900 px-2 py-0.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                    >
                        Go<span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
                <div className="flex flex-1 justify-end ">
                </div>
            </div>

            <div className="lg:flex relative isolate hidden items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <p className="text-xs text-gray-900">
                    <strong className="font-semibold">{formatted}</strong>
                    <svg viewBox="0 0 2 2" aria-hidden="true" className="mx-2 inline size-0.5 fill-current">
                        <circle r={1} cx={1} cy={1} />
                    </svg>
                    Our service is currently in testing — we’d love your feedback!
                </p>

                <a
                    href="#"
                    className="flex-none rounded-full bg-gray-900 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                >
                    Feedback<span aria-hidden="true">&rarr;</span>
                </a>
            </div>
            <div className="flex flex-1 justify-end ">
                <button type="button"
                        onClick={() => setVisible(false)}
                        className="-m-3 p-3 focus-visible:outline-offset-[-4px]">
                    <span className="sr-only">Dismiss</span>
                    <XMarkIcon aria-hidden="true" className="size-5 text-gray-900" />
                </button>
            </div>
        </div>
        </>

        // <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
        //     <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        //         <p className="text-xs text-gray-900">
        //             <strong className="font-semibold">{formatted}</strong>
        //             <svg viewBox="0 0 2 2" aria-hidden="true" className="mx-2 inline size-0.5 fill-current">
        //                 <circle r={1} cx={1} cy={1} />
        //             </svg>
        //             Our service is currently in testing — we’d love your feedback!
        //         </p>
        //
        //         <a
        //             href="#"
        //             className="flex-none rounded-full bg-gray-900 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
        //         >
        //             Feedback<span aria-hidden="true">&rarr;</span>
        //         </a>
        //     </div>
        //     <div className="flex flex-1 justify-end ">
        //         <button type="button"
        //                 onClick={() => setVisible(false)}
        //                 className="-m-3 p-3 focus-visible:outline-offset-[-4px]">
        //             <span className="sr-only">Dismiss</span>
        //             <XMarkIcon aria-hidden="true" className="size-5 text-gray-900" />
        //         </button>
        //     </div>
        // </div>
    )
}

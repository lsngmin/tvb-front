export default function PageSection() {
    return (
        <div className="">
            <div className="relative isolate px-6 mt-[-30px] lg:px-8">
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 pointer-events-none"
                >
                    {/*<div*/}
                    {/*    style={{*/}
                    {/*        clipPath:*/}
                    {/*            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',*/}
                    {/*    }}*/}
                    {/*    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"*/}
                    {/*/>*/}
                </div>
                <div className="mx-auto max-w-4xl py-16 sm:py-24 lg:py-32">
                    <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                        <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                            Have a question or partnership idea? Let's talk &nbsp;{' '}
                            <a href="#" className="font-semibold text-indigo-600">
                                <span aria-hidden="true" className="absolute inset-0" />
                                Contact Us <span aria-hidden="true">&rarr;</span>
                            </a>
                        </div>
                    </div>
                    <div className="text-center">
                        <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white">
                            Fast insights, zero setup.<br/>
                            Plug into our AI API and go.
                        </h1>
                        <p className="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400">
                            Turn data into decisions in seconds — no ML expertise required<br/>
                            Our endpoints handle the heavy lifting.
                        </p>

                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a
                                href="/free-trial"
                                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Get Started for Free
                            </a>
                            <a href="#" className="text-sm/6 font-semibold text-gray-900">
                                Give Feedback <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                >
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    />
                </div>
            </div>
        </div>
    )
}
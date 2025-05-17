import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

const features = [
    {
        name: 'One-Line API Call.',
        description: "Send your data and get AI-powered insights in milliseconds—no setup required.",
        icon: CloudArrowUpIcon,
    },
    {
        name: 'Enterprise-Grade Security.',
        description: 'All requests are end-to-end encrypted and protected by strict access controls.',
        icon: LockClosedIcon,
    },
    {
        name: 'Auto-Scaling Infrastructure.',
        description: 'Seamlessly handle any traffic spike with our fully managed, elastically scaling servers.',
        icon: ServerIcon,
    },
]

export default function Feature() {
    return (
        <div className="overflow-hidden bg-white py-12 sm:py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    
                    {/* Left Column */}
                    <div className="lg:pr-8 lg:pt-4">
                        <div className="lg:max-w-lg">
                            <h2 className="text-base/7 font-semibold text-indigo-600">
                                Integrate Instantly
                            </h2>
                            <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                                Plug and Play
                            </p>
                            <p className="mt-6 text-lg/8 text-gray-600">
                                Vision, language, and custom models ready out-of-the-box<br/>
                                Focus on building; we handle the heavy lifting.
                            </p>
                            
                            {/* Features List */}
                            <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                                {features.map((feature) => (
                                    <div key={feature.name} className="relative pl-9">
                                        <dt className="inline font-semibold text-gray-900">
                                            <feature.icon 
                                                aria-hidden="true" 
                                                className="absolute left-1 top-1 size-5 text-indigo-600"
                                            />
                                            {feature.name}
                                        </dt>{' '}
                                        <dd className="inline">
                                            {feature.description}
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>

                    {/* Right Column - Code Editor */}
                    <div className="min-w-[600px] max-w-[600px] overflow-hidden">
                        <div className="mt-10">
                            <div className="relative overflow-hidden shadow-xl flex bg-slate-800 h-[24rem] w-[600px] sm:rounded-xl">
                                <div className="relative w-full flex flex-col">
                                    
                                    {/* Editor Top Bar */}
                                    <div className="flex-none border-b border-slate-500/30">
                                        <div className="flex items-center h-8 space-x-1.5 px-3">
                                            <div className="w-2.5 h-2.5 bg-slate-600 rounded-full"></div>
                                            <div className="w-2.5 h-2.5 bg-slate-600 rounded-full"></div>
                                            <div className="w-2.5 h-2.5 bg-slate-600 rounded-full"></div>
                                        </div>
                                    </div>

                                    {/* Editor Content */}
                                    <div className="relative min-h-0 flex-auto flex flex-col">
                                        <div className="w-full flex-auto flex min-h-0 overflow-auto">
                                            <div className="w-full relative flex-auto">
                                                <pre className="flex min-h-full text-sm leading-6">
                                                    
                                                    {/* Line Numbers */}
                                                    <div 
                                                        aria-hidden="true"
                                                        className="hidden md:block text-slate-600 flex-none py-4 pr-4 text-right select-none"
                                                        style={{ width: '50px' }}
                                                    >
                                                        {`1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12`}
                                                    </div>

                                                    {/* Code Content */}
                                                    <code className="flex-auto relative block text-slate-50 pt-4 pb-4 px-4 overflow-auto whitespace-pre">
<span className="text-purple-400">def</span>{` `}<span className="text-yellow-300">analyze_image</span>{`(image_url):
    response = `}<span className="text-sky-300">requests</span>{`.`}<span className="text-yellow-300">post</span>{`(
        `}<span className="text-emerald-300">"https://gravifox.com/api/analyze"</span>{`,
        json={`}<span className="text-emerald-300">"imageUrl"</span>{`: image_url},
    )
    data = response.`}<span className="text-yellow-300">json</span>{`()
    `}<span className="text-yellow-300">print</span>{`(`}<span className="text-emerald-300">"Result:"</span>{`, data)


`}<span className="text-purple-400">if</span>{` __name__ == `}<span className="text-emerald-300">"__main__"</span>{`:
    `}<span className="text-yellow-300">analyze_image</span>{`(`}<span className="text-emerald-300">"https://gravifox.com/image.jpg"</span>{`)`}
                                                    </code>
                                                </pre>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

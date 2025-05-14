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
        <div className="overflow-hidden bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pr-8 lg:pt-4">
                        <div className="lg:max-w-lg">
                            <h2 className="text-base/7 font-semibold text-indigo-600">Integrate Instantly</h2>
                            <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                                Plug and Play
                            </p>
                            <p className="mt-6 text-lg/8 text-gray-600">
                                Vision, language, and custom models ready out-of-the-box<br/>
                                Focus on building; we handle the heavy lifting.
                            </p>
                            <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                                {features.map((feature) => (
                                    <div key={feature.name} className="relative pl-9">
                                        <dt className="inline font-semibold text-gray-900">
                                            <feature.icon aria-hidden="true" className="absolute left-1 top-1 size-5 text-indigo-600" />
                                            {feature.name}
                                        </dt>{' '}
                                        <dd className="inline">{feature.description}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                    <img
                        alt="Product screenshot"
                        src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
                        width={2432}
                        height={1442}
                        className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                    />
                </div>
            </div>
        </div>
    )
}

import { ArrowUpOnSquareIcon, CpuChipIcon, ChartBarIcon,} from '@heroicons/react/20/solid'
const features = [
    {
        name: 'Step 1: Upload an Image',
        description:
            'Users begin by uploading a suspicious image. Supported formats include SVG, PNG, JPG or GIF',
        icon: ArrowUpOnSquareIcon,
    },
    {
        name: 'Step 2: Deepfake Detection',
        description:
            'Our AI model analyzes the content to detect signs of manipulation using deep learning techniques.',
        icon: CpuChipIcon,
    },
    {
        name: 'Step 3: View the Result',
        description:
            'Detection results are displayed with confidence scores and visual indicators to help users understand authenticity.',
        icon: ChartBarIcon,
    },
]


export default function Feature() {
    return (
        <div className="overflow-hidden bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pr-8 lg:pt-4">
                        <div className="lg:max-w-lg">
                            <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                                Built for detecting what's real
                            </p>
                            <p className="mt-6 text-lg/8 text-gray-600">
                                Our mission is to protect users from visual misinformation. With cutting-edge AI models, we analyze
                                images to detect manipulations and deepfakes in seconds.
                            </p>

                            <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                                {features.map((feature) => (
                                    <div key={feature.name} className="relative pl-9">
                                        <div className="absolute left-1 top-1">
                                            <feature.icon aria-hidden="true" className="size-5 text-indigo-600" />
                                        </div>
                                        <dt className="block font-semibold text-gray-900 mb-1">
                                            {feature.name}
                                        </dt>
                                        <dd className="block">
                                            {feature.description}
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                    <div className="flex justify-end">
                    <img
                        src="/upload-ui.png"
                        alt="Upload UI"
                        style={{ width: '1000px', height: '400px' }}
                        className="rounded-xl shadow-xl ring-1 ring-gray-400/10"
                    />
                    </div>
                </div>
            </div>
        </div>
    )
}

const StartAnalyzeButton = ({resetImage, startAnalyze}) => {

    const handleResetImage = () => {
        resetImage();
    };
    const handleStartAnalyze = () => {
        startAnalyze();
    }

    return (
        <div>
            <a onclick={handleStartAnalyze}
               className="m-2 inline-flex items-center justify-center rounded-xl border border-transparent bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700">
                Start Analyze
            </a>
            <a onClick={handleResetImage}
               className="m-2 inline-flex items-center justify-center rounded-xl border bg-white px-5 py-3 font-medium text-blue-600 shadow hover:bg-blue-50">
                Change Image
            </a>
        </div>
);
};

export default StartAnalyzeButton;
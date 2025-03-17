import React, {useState, useRef, useEffect} from 'react'
import "./CallToAction.css"

const CallToAction = () => {
    const [isSmall, setIsSmall] = useState(false);
    const buttonRef = useRef(null);
    const [buttonText, setButtonText] = useState("Get Started with Image");
    const [initialWidth, setInitialWidth] = useState(null); // null로 시작
    const [initialHeight, setInitialHeight] = useState(null); // null로 시작
    const [isInitialized, setIsInitialized] = useState(false); // 초기화 상태 추가


    useEffect(() => {
        if (buttonRef.current && !isInitialized) {
            const rect = buttonRef.current.getBoundingClientRect();
            setInitialWidth(`${rect.width}px`);
            setInitialHeight(`${rect.height}px`);
            setIsInitialized(true);
        }
    }, [isInitialized]);

    const handleClick = () => {
        setIsSmall(true);
        setButtonText("Go");
    };

    if (!isInitialized) {
        return (
            <div className="P68Z32">
                <button
                    ref={buttonRef}
                    className={`H79P52 K81X16`}
                >{buttonText}</button>
                <button className="H79P52">View API Documentation</button>
            </div>
        );
    }

    return (
        <div className="P68Z32">
            <div style={{
                display: "inline-block",
                position: "relative",
                width: initialWidth,
                height: initialHeight,
                overflow: "hidden"
            }}>
                <button
                    ref={buttonRef}
                    className={`H79P52 K81X16`}
                    onClick={handleClick}
                    style={{
                        width: isSmall ? "100px" : initialWidth,
                        height: initialHeight,
                        transition: "width 0.8s ease-in-out",
                        position: "absolute",
                        right: "0",
                        margin: "0"
                    }}
                >{buttonText}</button>
            </div>

            {/*<button className="H79P52">View API Documentation</button>*/}
            {/*<p className="C12O82">View API Documentation</p>*/}
        </div>
    );
}
export default CallToAction;
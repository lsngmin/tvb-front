import Logo from "assets/logo.svg";
import React, { Fragment, useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import SignInForm from "features/login/signInForm";
import SignUpForm from "features/login/signUpForm";

export default function Login() {
    const [isSignIn, setIsSignIn] = useState(true);
    const [showSignIn, setShowSignIn] = useState(true);
    const [showSignUp, setShowSignUp] = useState(false);

    // 폼 전환 상태 관리
    const switchToSignUp = () => {
        setShowSignIn(false);
        // 첫 번째 폼이 사라진 후에 두 번째 폼을 표시
        setTimeout(() => {
            setIsSignIn(false);
            setShowSignUp(true);
        }, 1000); // 트랜지션 duration과 일치시킴
    };

    const switchToSignIn = () => {
        setShowSignUp(false);
        // 첫 번째 폼이 사라진 후에 두 번째 폼을 표시
        setTimeout(() => {
            setIsSignIn(true);
            setShowSignIn(true);
        }, 1000); // 트랜지션 duration과 일치시킴
    };

    // 초기 렌더링 시 상태 설정
    useEffect(() => {
        setShowSignIn(isSignIn);
        setShowSignUp(!isSignIn);
    }, []);

    return (
        <div className="mx-auto flex max-w-7xl items-center bg-white">
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 lg:px-8 mt-12">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img className="mx-auto h-16 w-auto" src={Logo} alt="truebox" />
                </div>

                <div className="relative w-full min-h-96">
                    {/* 로그인 폼 */}
                    <Transition
                        show={showSignIn}
                        as={Fragment}
                        enter="transition duration-1000 ease-in-out transform"
                        enterFrom="translate-x-full opacity-0"
                        enterTo="translate-x-0 opacity-100"
                        leave="transition duration-1000 ease-in-out transform"
                        leaveFrom="translate-x-0 opacity-100"
                        leaveTo="-translate-x-full opacity-0"
                        appear={true}
                    >
                        <div className="absolute w-full">
                            <SignInForm changeForm={() => switchToSignUp()} />
                        </div>
                    </Transition>

                    {/* 회원가입 폼 */}
                    <Transition
                        show={showSignUp}
                        as={Fragment}
                        enter="transition duration-1000 ease-in-out transform"
                        enterFrom="-translate-x-full opacity-0"
                        enterTo="translate-x-0 opacity-100"
                        leave="transition duration-1000 ease-in-out transform"
                        leaveFrom="translate-x-0 opacity-100"
                        leaveTo="translate-x-full opacity-0"
                        appear={true}
                    >
                        <div className="absolute w-full">
                            <SignUpForm changeForm={() => switchToSignIn()} />
                        </div>
                    </Transition>
                </div>
            </div>
        </div>
    );
}
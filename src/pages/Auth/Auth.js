import React, { useEffect, useState } from 'react';
import axios from "axios";

const OAuthRedirectPage = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // URL에서 'state'와 'code' 파라미터 가져오는 함수
    const getQueryParams = () => {
        const urlParams = new URLSearchParams(window.location.search);
        const state = urlParams.get('state');
        const code = urlParams.get('code');
        return { state, code };
    };

    // 인증 후 후속 작업 (예: 토큰 처리 등)
    const handleOAuthResponse = () => {
        const { state, code } = getQueryParams();

        if (state && code) {
            console.log('State:', state);  // 'state' 파라미터 로그
            console.log('Code:', code);    // 'code' 파라미터 로그

            // 백엔드와 통신하여 액세스 토큰을 받기
            axios.post('http://localhost:8080/api/v1/auth/oauth-token', {
                state,
                code
            })
                .then(response => {
                    if (response.data.access_token) {
                        // 로컬 스토리지에 토큰 저장
                        localStorage.setItem('auth-token', response.data.access_token);
                        alert("로그인 성공!");
                        // 리디렉션 (예: 대시보드 페이지로)
                        window.location.href = '/dashboard';
                    } else {
                        setError('로그인 실패. 다시 시도해주세요.');
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    setError('로그인 실패. 다시 시도해주세요.');
                })
                .finally(() => {
                    setLoading(false);
                });
        } else {
            setError('잘못된 요청입니다.');
            setLoading(false);
        }
    };

    useEffect(() => {
        handleOAuthResponse();
    }, []);

    return (
        <div style={styles.container}>
            {loading ? (
                <div>
                    <div style={styles.loader}></div>
                    <p style={styles.message}>OAuth 인증 중... 잠시만 기다려 주세요.</p>
                </div>
            ) : error ? (
                <div style={styles.errorContainer}>
                    <p style={styles.errorMessage}>{error}</p>
                </div>
            ) : null}
        </div>
    );
};

// 스타일링
const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f0f0',
        fontFamily: 'Arial, sans-serif',
        margin: 0,
    },
    loader: {
        border: '4px solid #f3f3f3',
        borderTop: '4px solid #3498db',
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        animation: 'spin 2s linear infinite',
    },
    message: {
        marginTop: '20px',
        fontSize: '16px',
        color: '#333',
    },
    errorContainer: {
        textAlign: 'center',
    },
    errorMessage: {
        color: 'red',
        fontSize: '18px',
    },
};

export default OAuthRedirectPage;

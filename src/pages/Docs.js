import React from 'react';

const Docs = () => {
    const sendSwaggerJson = async () => {
        try {
            const response = await fetch('http://localhost:8080/v3/api-docs', {
                method: 'GET',
                mode: 'cors',
            });

            if (!response.ok) {
                throw new Error(`Swagger JSON 불러오기 실패 (status: ${response.status})`);
            }

            const swaggerJson = await response.json();

            const uploadResponse = await fetch('http://localhost:8080/api/upload-swagger', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(swaggerJson),
            });

            if (!uploadResponse.ok) {
                throw new Error(`Swagger JSON 전송 실패 (status: ${uploadResponse.status})`);
            }

            alert('Swagger JSON이 성공적으로 전송되었습니다.');
        } catch (error) {
            console.error('Swagger JSON 전송 오류:', error);
            alert('전송 중 오류가 발생했습니다:\n' + error.message);
        }
    };

    return (
        <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#f9f9f9' }}>
            <div style={{
                padding: '16px 24px',
                display: 'flex',
                justifyContent: 'flex-end',
                backgroundColor: '#f9f9f9',
            }}>
                <button
                    onClick={sendSwaggerJson}
                    style={{
                        backgroundColor: '#1976D2',
                        color: 'white',
                        padding: '10px 18px',
                        border: 'none',
                        borderRadius: '6px',
                        fontSize: '15px',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        boxShadow: '0 3px 6px rgba(0, 0, 0, 0.08)',
                        transition: 'background-color 0.2s ease-in-out',
                    }}
                    onMouseOver={(e) => {
                        e.target.style.backgroundColor = '#1565C0';
                    }}
                    onMouseOut={(e) => {
                        e.target.style.backgroundColor = '#1976D2';
                    }}
                >
                    📤 Swagger JSON 전송
                </button>
            </div>
            <div style={{ flex: 1 }}>
                <iframe
                    src="/swagger.html"
                    title="GraviFox API Docs"
                    width="100%"
                    height="100%"
                    style={{ border: 'none' }}
                />
            </div>
        </div>
    );
};

export default Docs;

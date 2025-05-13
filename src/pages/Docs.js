import React from 'react';

const Docs = () => {
    return (
        <div style={{ height: '100vh' }}>
            <iframe
                src="/swagger.html"
                title="GraviFox API Docs"
                width="100%"
                height="100%"
                style={{ border: 'none' }}
            />
        </div>
    );
};

export default Docs;

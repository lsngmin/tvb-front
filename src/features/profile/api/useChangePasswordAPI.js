import { useState } from 'react';
import axios from 'axios';
import { useAuth } from "../../../providers/authProvider";
import {PROFILE_ENDPOINTS} from "../../../api/endPointRoute";


export default function useChangePasswordAPI() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { accessToken } = useAuth();

    // 실제 비밀번호 변경 함수
    const changePassword = async (currentPassword, newPassword) => {
        setLoading(true);
        setError(null);
        try {
            await axios.patch(
                PROFILE_ENDPOINTS.POST_PASSWORD,
                { currentPassword, newPassword },
                {
                    headers: { Authorization: `Bearer ${accessToken}` }
                }
            );
            setLoading(false);
            return true;
        } catch (err) {
            setError(err.response?.data?.message || '비밀번호 변경 실패');
            setLoading(false);
            return false;
        }
    };

    return {
        changePassword,
        loading,
        error,
    };
}

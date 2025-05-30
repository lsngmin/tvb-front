import { useState } from 'react';
import axios from 'axios';
import { useAuth } from "../../../providers/authProvider";
import {PROFILE_ENDPOINTS} from "../../../api/endPointRoute";

export default function useDeleteAccountAPI() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { accessToken } = useAuth();

    const deleteAccount = async () => {
        setLoading(true);
        setError(null);
        try {
            await axios.delete(
                PROFILE_ENDPOINTS.DELETE_ACCOUNT,
                {
                    headers: { Authorization: `Bearer ${accessToken}` }
                }
            );
            setLoading(false);
            return true;
        } catch (err) {
            setError(err.response?.data?.message || '계정 삭제 실패');
            setLoading(false);
            return false;
        }
    };

    return {
        deleteAccount,
        loading,
        error,
    };
}

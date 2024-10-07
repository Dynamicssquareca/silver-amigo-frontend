import { useEffect, useState } from 'react';
import AppURL from '../api/AppUrl';

const useAuth = () => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            const token = localStorage.getItem('authToken');

            if (!token) {
                setLoading(false); // Set loading to false if no token
                return; // Exit early if not authenticated
            }

            try {
                const response = await fetch(AppURL.UserDetails, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch user data');
                }

                const data = await response.json();

                if (data.status === 1) {
                    setUserData(data.data);
                } else {
                    setError(data.message || 'Failed to fetch user details');
                }
            } catch (error) {
                console.error('Authentication failed', error);
                setError(error.message || 'An unexpected error occurred');
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, []);

    return { userData, loading, error };
};

export default useAuth;

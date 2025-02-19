import { Navigate, Outlet } from "react-router";
import { supabase } from "../lib/superbaseClient";
import { useEffect, useState } from "react";
import type { User, AuthError } from "@supabase/supabase-js";

export default function ProtectedRoute() {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;

        const fetchUser = async () => {
            const { data, error }: { data: { user: User | null }; error: AuthError | null } = await supabase.auth.getUser();

            if (isMounted) {
                if (error) {
                    console.error("Error fetching user:", error);
                    setUser(null);
                } else {
                    setUser(data.user);
                }
                setLoading(false);
            }
        };

        fetchUser();

        return () => {
            isMounted = false;
        };
    }, []);

    if (loading) return <p>Loading...</p>;

    return user ? <Outlet /> : <Navigate to="/auth" replace />;
}

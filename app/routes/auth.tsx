import { useState } from "react";
import { supabase } from "../lib/superbaseClient";

export default function Auth() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleLogin = async () => {
        setLoading(true);
        setError("");
        const { error } = await supabase.auth.signInWithOtp({ email });
        if (error) setError(error.message);
        setLoading(false);
    };

    return (
        <div>
            <h2>Login with Supabase</h2>
            <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={handleLogin} disabled={loading}>
                {loading ? "Loading..." : "Send Magic Link"}
            </button>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
}

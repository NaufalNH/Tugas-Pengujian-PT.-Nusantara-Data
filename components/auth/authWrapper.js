"use client";
import Cookies from "js-cookie";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";


const Wrapper = ({ children, needLogin = false, requiredRoles = [] }) => {
    const router = useRouter();
    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);
    const [display, setDisplay] = useState(false);
    const currentUrl = usePathname();

    useEffect(() => {
        setDisplay(false)
        const session = Cookies.get('session');
        const profile = session ? JSON.parse(session) : null;
        setProfile(profile);
        setLoading(false);
    }, []);

    useEffect(() => {
        if (loading) return;

        const role = profile?.idRole;
        if (!needLogin && !role) {
            
        } else if (needLogin) {
            if (role) {
                if (requiredRoles.length) {
                    if (requiredRoles.includes(role)) {
                        
                    } else {
                        router.push('/');
                    }
                } else {
                    
                }
            } else {
                router.push('/');
            }
        } else if (currentUrl === "/" && role) {
            router.push('/dashboard');
        }

        setDisplay(true)

    }, [profile, loading, router]);
    return (
        <div className="">

            {!display ? <div></div> : <div>{children}</div>}

        </div>
    );
}

export default Wrapper
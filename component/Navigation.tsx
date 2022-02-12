import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";


const Navigation: React.FC = () =>{
    const router = useRouter()
    const isActive = (pathname: string) => router.pathname == pathname
   // const session = 
    const {data : session } = useSession()
    return (
        <nav className="Navigation">
            <Link  href="/home">
                <a className="Navigation__link" data-active={isActive("/home")}>Home</a>
            </Link>
            <Link  href="/search">
                <a className="Navigation__link" data-active={isActive("/search")}>Recherche</a>
            </Link>
            <Link  href="/recommendation">
                <a className="Navigation__link" data-active={isActive("/recommendation")}>Reco</a>
            </Link>
            <Link  href={`/user/${session?.userId}`}>
                <a className="Navigation__link" data-active={isActive(`/user/[userId]`)}>Profil</a>
            </Link>
            <style jsx>{`
              .Navigation {
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-direction: row;
                padding: 1rem;
              }
              .Navigation__link[data-active=true]{
                font-weight: bold;
              }
            `}</style>
        </nav>
    )

}

export default Navigation
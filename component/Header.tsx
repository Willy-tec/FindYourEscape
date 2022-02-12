import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";

const Header: React.FC = () => {
    const router = useRouter();
    const isActive: (pathname : string) => boolean = (pathname) => router.pathname === pathname

    const {data: session, status} = useSession()
    let left = (
        <div className="left">
          <Link href="/">
            <a className="bold" data-active={isActive("/")}>
              Home
            </a>
          </Link>
        </div>
      );
    
      let right = null;
    
      if (status === "loading") {
        left = (
          <div className="left">
            <Link href="/">
              <a className="bold" data-active={isActive("/")}>
                Feed
              </a>
            </Link>
          </div>
        );
        right = (
          <div className="right">
            <p>Validating session ...</p>
            <style jsx>{`
              .right {
                margin-left: auto;
              }
            `}</style>
          </div>
        );
      }
    
      if (!session) {
        right = (
          <div className="right">
            <Link href="/api/auth/signin">
              <a data-active={isActive("/signup")}>Log in</a>
            </Link>

          </div>
        );
      }
    
      if (session) {
        left = (
          <div className="left">
            <Image className="avatar" src={session.user.image} width={48} height={48}></Image>
            <p>
              {session.user.name}
            </p>            
            <style jsx>{`
              .left {
                display: flex;
                justify-content: center;
                align-items: flex-start;
                flex-direction: column;
              }
            `}</style>
          </div>
        );
        right = (
          <div className="right">
            <button onClick={() => signOut()}>
              <a>Log out</a>
            </button>
          </div>
        );
      }
    
      return (
        <nav  >
          {left}
          {right}
          <style jsx>{`
              nav {
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-direction: row;
                padding: 1rem;
              }
            `}</style>
        </nav>
      );
    };
    
    export default Header;
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Login.module.css'
import {prisma} from '../lib/prisma'

const Login : NextPage = ()=>{
    console.log("Login top function")
    function handleSubmit(e){
        e.preventDefault();
        console.log("clicked")
    }

    return (
        <div>Login
            <form onSubmit={handleSubmit}>
                <input required  type="text" name="name" id="name" placeholder='YourName here' />
                <input required  type="text" name="quote" id="quote" placeholder='YourQuote here'/>
                <input type="submit" value="Inscription" />
            </form>
            <Image src="/icon/house.svg" alt="home" width={48} height={48} />
        </div>
    )
}

export default Login
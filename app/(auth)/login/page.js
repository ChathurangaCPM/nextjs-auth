"use client"
/* eslint-disable @next/next/no-async-client-component */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { redirect, useRouter } from 'next/navigation';
import { useState } from 'react';
import {Button} from '@/app/components/ui/button'
import { signIn, useSession } from 'next-auth/react'
import { ToastAction } from "@/app/components/ui/toast"
import { useToast } from "@/app/components/ui/use-toast"


const LoginPage = () => {
    const router = useRouter();
    const { toast } = useToast()
    const session = useSession();

    const [loginUser, setLoginUser] = useState({
        email: "",
        password: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState({
        status: '',
        message: '',
        isOpen: false
    });

    if (session.status === "authenticated") {
        redirect('/wall');
    }

    const handlerInputChange = (e) => {
        setLoginUser((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const getSignIn = await signIn("credentials", {
                email: loginUser.email,
                password: loginUser.password,
                redirect: false,
            });

            setIsLoading(false);

            console.log('getSignIn ===', getSignIn);

            if (getSignIn.status === 200){
                setErrorMessage({
                    status: 'success',
                    message: 'Login was successfully',
                    isOpen: true
                })
                // router.push('/dashboard');
                // router.refresh();
            } else{

                setErrorMessage({
                    status: 'fail',
                    message: 'Please Check the creadentiols',
                    isOpen: true
                })
            }
            
        } catch (error) {
            console.log('error', error);
            setIsLoading(false);
        }
    }


    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-10 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=green&shade=600"
                        alt="Your Company"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    value={loginUser.email}
                                    onChange={handlerInputChange}
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        Forgot password?
                                    </a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    value={loginUser.password}
                                    onChange={handlerInputChange}
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        {errorMessage.isOpen && <div className={`rounded-lg p-[5px] ${errorMessage.status === "fail" ? "bg-red-500" : 'bg-green-500'}`}>
                            <span className='text-sm text-white'>{errorMessage.message}</span>
                        </div>}

                        <div>
                            <button
                                disabled={isLoading}
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                {isLoading ? "Please wait" : 'Sign in'}
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        New member?{' '}
                        <Link href='/register'>
                            Register
                        </Link>
                    </p>

                </div>
            </div>
        </>
    )
}


export default LoginPage;
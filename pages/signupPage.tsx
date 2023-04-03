import { LockClosedIcon } from "@heroicons/react/solid";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import gradcelaImage from "../assets/images/gradcela logo.png"



const SignupPage = () => {

    const router = useRouter();

    const { data: session } = useSession()
    console.log({ session })
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')

    if (session?.user.data.role.includes('client')) {
        router.push('/businessPage')
    }


    if (session?.user.data.role.includes('provider')) {
        router.push('/serviceProviders/orderPages')
    }

    const handlesignUp = async (e: any) => {
        e.preventDefault()

        try {

            const data = await signIn("credentials", {
                email: email,
                password: password,
                phone,
                firstName,
                lastName,
                redirect: false,
                // callbackUrl: "http://localhost:8080/businessPage",
            });
            console.log('signupPage')
            console.log(data)
            // console.log(session)
            setEmail('');
            setPassword('')
            console.log(session?.user.data.role)
            // if (session?.user.data.role.includes('client')) {
            //     router.push('/businessPage')
            // }


            // if (session?.user.data.role.includes('provider')) {
            //     router.push('/serviceProviders/orderPages')
            // }


        } catch (error) {
            console.log(error);

        }


        console.log({ email, password })

    }


    return (
        <>

            <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        {/* <img
                            className="mx-auto h-12 w-auto"
                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                            alt="Workflow"
                        /> */}
                        <div className='mx-auto  flex justify-center relative'><Image alt="logo" width={150} height={100}  layout="contain" src={gradcelaImage} /></div>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
                        <p className="mt-2 text-center text-sm text-gray-600">

                            <a className="font-medium text-lg text-[#2DD4BF] hover:text-[#2DD4BF]">
                                Gradcela
                            </a>
                        </p>
                    </div>
                    <form className="mt-8 space-y-0" action="#" method="POST">
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div>
                            <label htmlFor="first-name" className="sr-only">
                                First Name
                            </label>
                            <input
                                id="first-name"
                                name="first-name"
                                type="text "
                                // autoComplete="email"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-[#2DD4BF] focus:border-[#2DD4BF] focus:z-10 sm:text-sm"
                                placeholder="first Name"
                            />
                        </div>
                        <div>
                            <label htmlFor="last-name" className="sr-only">
                                Last Name
                            </label>
                            <input
                                id="last-name"
                                name="last-name"
                                type="text"
                                // autoComplete="email"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-[#2DD4BF] focus:border-[#2DD4BF] focus:z-10 sm:text-sm"
                                placeholder="Last Name"
                            />
                        </div>
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="off"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-[#2DD4BF] focus:border-[#2DD4BF] focus:z-10 sm:text-sm"
                                    placeholder="Email address"
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="sr-only">
                                    Phone Number
                                </label>
                                <input
                                    id="phone"
                                    name="phone"
                                    type="phone"
                                    // autoComplete="email"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-[#2DD4BF] focus:border-[#2DD4BF] focus:z-10 sm:text-sm"
                                    placeholder="Phone"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="new-password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-[#2DD4BF] focus:border-[#2DD4BF] focus:z-10 sm:text-sm"
                                    placeholder="Password"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between ">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 text-[#2DD4BF] focus:ring-[#2DD4BF] border-gray-300 rounded"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                    Remember me
                                </label>
                            </div>

                            <div className="text-sm flex items-center py-4">
                                {/* href="/dashboard"  */}
                                <a className="font-medium text-[#2DD4BF] hover:text-[#2DD4BF]">
                                    Forgot your password?
                                </a>
                            </div>
                        </div>

                        <div>
                            <button
                                // onSubmit={handleSignUp}
                                onClick={handlesignUp}
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#2DD4BF] hover:bg-[#2DD4BF] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2DD4BF]"

                            >
                                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                    <LockClosedIcon className="h-5 w-5 text-[#14b8a6] group-hover:text-[#14b8a6]" aria-hidden="true" />
                                </span>
                                Sign up
                            </button>
                        </div>

                        
                            <div className="text-sm flex items-center py-4">
                                {/* href="/dashboard"  */}
                                <Link href={'/authPage'}>
                                <p className="font-medium text-[#2DD4BF] hover:text-[#2DD4BF]">
                                    Already have an account? signin
                                </p>
                                </Link>
                            </div>

                        


                    </form>
                </div>
            </div>
        </>

    );
}

export default SignupPage;
"use client";
import Modal from "@/components/modal/modal";
import axios from "axios";
import Cookies from "js-cookie";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginPage = () => {
    const router = useRouter();
    const [input, setInput] = useState({ email: "", password: "" })
    const [showPassword, setShowPassword] = useState(false)
    const [modal, setModal] = useState({
        show: false,
        message: "",
        code: 0
    })

    const onClose = () => { setModal({ ...modal, show: false }) }

    const handleChange = (e) => {
        const { name, value } = e?.target;
        setInput({ ...input, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            //disini saya memakai api route sebagai middleware, karena saat langsung send req ke api terhalang CORS karena apinya masih http
            const send = await axios({
                method: "POST",
                url: "/api/login",
                data: input,
            });
            if (send?.data?.data?.dataProfile) {
                const auth = Cookies.set('session', JSON.stringify(send?.data?.data?.dataProfile), { expires: 7 })
                if (send?.data?.data?.dataProfile?.idRole == 1) {
                    router.push("/dashboard")
                }
            } else {
                setModal({ show: true, message: error?.response?.data?.error?.message, code: error?.response?.data?.error?.code })
            }
        } catch (error) {
            console.log(error?.response?.data?.error)
            setModal({ show: true, message: error?.response?.data?.error?.message, code: error?.response?.data?.error?.code })
        }
    };

    return (
        <div className="w-dvw h-fit sm:h-[100vh] p-[20px] flex items-center justify-center gap-[10px] ">

            <Modal message={modal?.message} show={modal?.show} onClose={onClose} code={modal?.code} />

            <div className="w-[614px] bg-blue-600 hidden sm:flex items-center justify-center  text-white min-h-full h-fit border-[1.5px] rounded-md border-gray-200">
                <div className="relative w-full h-full flex items-center justify-center">
                    <Image className="w-[70%] grayscale invert brightness-0" src={"/logo.png"} width={300} height={300} alt="logo" />
                </div>
            </div>

            <div className="w-[614px] min-h-[80vh] sm:min-h-full h-fit sm:h-fit border-[1.5px] rounded-md border-gray-200 flex flex-col items-center justify-center gap-[30px] ">
                <form onSubmit={handleSubmit} className=" flex items-center justify-center flex-col gap-[30px] p-[10px] w-[90%] sm:w-[60%]">
                    <h1 className="font-semibold text-2xl">Login Sistem</h1>
                    <Image className="sm:hidden flex w-[200px] " src={"/logo.png"} width={500} height={500} alt="logo" />
                    <div className="flex flex-col gap-[30px] my-[25px] w-full">
                        <input required className="bg-gray-100 w-full p-[10px] rounded-md h-[50px] outline-none" placeholder="User Name or Email ID" type="text" name="email" onChange={handleChange}  ></input>
                        <div className="relative">
                            <input
                                id="password"
                                name="password"
                                required
                                type={showPassword ? "text" : "password"}
                                value={input?.password}
                                onChange={handleChange}
                                className="bg-gray-100 w-full p-[10px] rounded-md h-[50px] outline-none"
                                placeholder="Password"
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 top-0"
                                onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="1em"
                                        height="1em"
                                        viewBox="0 0 24 24">
                                        <path
                                            fill="currentColor"
                                            d="M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="1em"
                                        height="1em"
                                        viewBox="0 0 24 24">
                                        <path
                                            fill="currentColor"
                                            d="M2 5.27L3.28 4L20 20.72L18.73 22l-3.08-3.08c-1.15.38-2.37.58-3.65.58c-5 0-9.27-3.11-11-7.5c.69-1.76 1.79-3.31 3.19-4.54zM12 9a3 3 0 0 1 3 3a3 3 0 0 1-.17 1L11 9.17A3 3 0 0 1 12 9m0-4.5c5 0 9.27 3.11 11 7.5a11.79 11.79 0 0 1-4 5.19l-1.42-1.43A9.862 9.862 0 0 0 20.82 12A9.821 9.821 0 0 0 12 6.5c-1.09 0-2.16.18-3.16.5L7.3 5.47c1.44-.62 3.03-.97 4.7-.97M3.18 12A9.821 9.821 0 0 0 12 17.5c.69 0 1.37-.07 2-.21L11.72 15A3.064 3.064 0 0 1 9 12.28L5.6 8.87c-.99.85-1.82 1.91-2.42 3.13"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                    <button type="submit" className="bg-blue-600 duration-[0.3s] transition-all hover:bg-blue-400 h-fit w-[110px] p-[10px] text-white font-medium text-md rounded-md flex items-center justify-center">Sign in</button>
                </form>

                <div className="w-[90%] sm:w-[60%] flex flex-col gap-[30px] pb-[10px]">
                    <span className="line flex flex-row items-center justify-center gap-[10px]">Sign in with</span>
                    <div className="flex flex-row gap-[10px] items-center justify-center">
                        <button type="button" className="border-[1.4px] hover:bg-gray-100 duration-[0.3s] transition-all text-2xl flex items-center justify-center border-gray-300 w-[100px] h-[50px] rounded-md"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 326667 333333" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd"><path d="M326667 170370c0-13704-1112-23704-3518-34074H166667v61851h91851c-1851 15371-11851 38519-34074 54074l-311 2071 49476 38329 3428 342c31481-29074 49630-71852 49630-122593m0 0z" fill="#4285f4" /><path d="M166667 333333c44999 0 82776-14815 110370-40370l-52593-40742c-14074 9815-32963 16667-57777 16667-44074 0-81481-29073-94816-69258l-1954 166-51447 39815-673 1870c27407 54444 83704 91852 148890 91852z" fill="#34a853" /><path d="M71851 199630c-3518-10370-5555-21482-5555-32963 0-11482 2036-22593 5370-32963l-93-2209-52091-40455-1704 811C6482 114444 1 139814 1 166666s6482 52221 17777 74814l54074-41851m0 0z" fill="#fbbc04" /><path d="M166667 64444c31296 0 52406 13519 64444 24816l47037-45926C249260 16482 211666 1 166667 1 101481 1 45185 37408 17777 91852l53889 41853c13520-40185 50927-69260 95001-69260m0 0z" fill="#ea4335" /></svg></button>
                        <button type="button" className="border-[1.4px] hover:bg-gray-100 duration-[0.3s] transition-all text-2xl flex items-center justify-center border-gray-300 w-[100px] h-[50px] rounded-md"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 512 462.799"><path fillRule="nonzero" d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z" /></svg></button>
                        <button type="button" className="border-[1.4px] hover:bg-gray-100 duration-[0.3s] transition-all text-2xl flex items-center justify-center border-gray-300 w-[100px] h-[50px] rounded-md"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 509 509"><g fillRule="nonzero"><path fill="#0866FF" d="M509 254.5C509 113.94 395.06 0 254.5 0S0 113.94 0 254.5C0 373.86 82.17 474 193.02 501.51V332.27h-52.48V254.5h52.48v-33.51c0-86.63 39.2-126.78 124.24-126.78 16.13 0 43.95 3.17 55.33 6.33v70.5c-6.01-.63-16.44-.95-29.4-.95-41.73 0-57.86 15.81-57.86 56.91v27.5h83.13l-14.28 77.77h-68.85v174.87C411.35 491.92 509 384.62 509 254.5z" /><path fill="#fff" d="M354.18 332.27l14.28-77.77h-83.13V227c0-41.1 16.13-56.91 57.86-56.91 12.96 0 23.39.32 29.4.95v-70.5c-11.38-3.16-39.2-6.33-55.33-6.33-85.04 0-124.24 40.16-124.24 126.78v33.51h-52.48v77.77h52.48v169.24c19.69 4.88 40.28 7.49 61.48 7.49 10.44 0 20.72-.64 30.83-1.86V332.27h68.85z" /></g></svg></button>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default LoginPage

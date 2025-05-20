import { useCallback, useEffect, useState, type SetStateAction } from "react"
import '@/styles/tailwind.css'
import ImageLogin from '@/assets/admin/login.jpg'
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid"
import { handleLogin } from "@/services/authService"
import type { LoginPayload } from "@/types/auth"
const Login = () => {
    const [usename, setUsename] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [showPassword, setShowPassword] = useState<boolean>(false)
    useEffect(() => {
        document.title = 'Đăng nhập'
    }, [])

    const handleChangeUsename = useCallback((e: { target: { value: SetStateAction<string> } })=>{
        setUsename(e.target.value)
    }, [])

    const handleChangePassword = useCallback((e: { target: { value: SetStateAction<string> } })=>{
        setPassword(e.target.value)
    }, [])

    const handleShowPassword = useCallback(()=>{
        setShowPassword(!showPassword)
    }, [showPassword])

    const handleSubmit = useCallback((e: { preventDefault: Function })=>{
        e.preventDefault();
        const loginForm:LoginPayload = {
            usename: usename,
            password: password
        }
        handleLogin(loginForm)
    }, [usename, password])
    return (
        <div className="bg-[#ebeeef] w-full h-screen relative p-2">
            <div className="absolute md:w-[670px] w-[calc(100%-15px)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg bg-white rounded-lg overflow-hidden">
                <div className="relative bg-no-repeat bg-cover before:content-[''] before:absolute before:inset-0 before:bg-[#365463B3]" style={{ backgroundImage: `url(${ImageLogin})` }}>
                    <h1 className="uppercase text-2xl text-center py-[70px] font-bold text-white relative z-10">Đăng nhập</h1>
                </div>
                <form onSubmit={handleSubmit} className="md:py-[70px] py-10 px-10 text-[#808080]">
                    <div className="mb-[26px] flex flex-wrap items-end">
                        <label htmlFor="" className="md:w-1/4 w-full text-[#808080] sm:mb-0 py-2 pr-2">Tên đăng nhập</label>
                        <input onChange={handleChangeUsename} value={usename} className="md:w-3/4 w-full bg-transparent placeholder:text-slate-400 
                                            text-slate-700 text-sm border-b border-slate-200 py-2 transition duration-300 ease 
                                            focus:outline-none focus:border-green-500"
                            placeholder="Email hoặc số điện thoại"
                        />
                    </div>
                    <div className="mb-[26px] flex flex-wrap items-end">
                        <label htmlFor="" className="md:w-1/4 text-[#808080] sm:mb-0 py-2 pr-2">Mật khẩu</label>
                        <div className="md:w-3/4 w-full relative">
                            <input onChange={handleChangePassword} value={password} type={`${showPassword ? 'text' : 'password'}`} className="w-full bg-transparent placeholder:text-slate-400 
                                                text-slate-700 text-sm border-b border-slate-200 py-2 transition duration-300 ease 
                                                focus:outline-none focus:border-green-500"
                                placeholder="********"
                            />
                            <button type="button" className="absolute right-0 bottom-[2px]" onClick={handleShowPassword}>
                                {
                                    showPassword ? <EyeIcon className="w-5 h-5 text-green-600" />
                                    : 
                                    <EyeSlashIcon className="w-5 h-5 text-green-600"/>
                                }
                            </button>
                        </div>
                    </div>
                    <div className="md:w-3/4 ml-auto w-full mb-[26px]">
                        <div className="flex justify-between">
                            <div className="inline-flex items-center">
                                <label className="flex items-center cursor-pointer relative" htmlFor="check-2">
                                    <input type="checkbox"
                                        className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-green-600 checked:border-green-600"
                                        id="check-2" />
                                    <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                                            stroke="currentColor" strokeWidth="1">
                                            <path fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"></path>
                                        </svg>
                                    </span>
                                </label>
                                <label className="cursor-pointer ml-2 text-slate-600 text-sm" htmlFor="check-2">
                                    Ghi nhớ mật khẩu
                                </label>
                            </div>
                            <p className="text-sm">Quên mật khẩu</p>
                        </div>
                    </div>
                    <div className="md:w-3/4 ml-auto w-full">
                        <button type="submit" className="bg-[#57b846] hover:bg-slate-800 rounded-3xl py-3 px-10 text-white font-medium">
                            Đăng nhập
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
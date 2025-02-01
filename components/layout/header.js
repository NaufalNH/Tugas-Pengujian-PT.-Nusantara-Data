"use client";
import Cookies from 'js-cookie';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Header() {
    const router = useRouter();
    const [open, setOpen] = useState(false)

    const handleLogout = () => {
        Cookies.remove('session')
        router.push("/")
    }
    return (
        <header className="bg-white text-black border-b-[1.5px] z-[20] duration-[0.2s] transition-all top-0 fixed w-[100vw] h-fit border-gray-300 p-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <nav className="hidden md:flex space-x-6">
                    <Link href="/" className="hover:text-gray-300 duration-[0.2s] transition-all">Home</Link>
                    <Link href="/dashboard/kelola-produk" className="hover:text-gray-300 duration-[0.2s] transition-all">Kelola Produk</Link>
                    <Link href="/dashboard/kelola-pesanan" className="hover:text-gray-300 duration-[0.2s] transition-all">Kelola Pesanan</Link>
                </nav>

                <button type='button' onClick={handleLogout} className='hidden md:flex flex-row items-center hover:text-gray-300 duration-[0.2s] transition-all justify-center gap-[4px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' fill='currentColor' shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 474 512.46"><path d="M249.71.13 12.08 35.6C5.46 36.59 0 43.43 0 50.23v418.88c0 6.77 5.39 9.38 12.08 10.31l237.63 32.97c6.68.92 12.08-7.77 12.08-14.63V10.44c0-6.86-5.53-11.28-12.08-10.31zm124.96 329.08-.01-34.07c-.58.17-1.2.27-1.83.27h-53.47c-3.55 0-6.45-2.96-6.45-6.45v-66.2c0-3.48 2.97-6.45 6.45-6.45h53.47c.63 0 1.24.1 1.82.27v-34.06c0-6.29 5.1-11.4 11.39-11.4 3.29 0 6.25 1.4 8.33 3.63l76.01 70.9c4.59 4.27 4.85 11.47.58 16.06l-76.95 75.59c-4.47 4.4-11.67 4.34-16.07-.13a11.439 11.439 0 0 1-3.27-7.96zm-87.26 129.54h31.02V345.46h25.37v113.9c0 6.77-2.8 12.95-7.27 17.44-4.47 4.52-10.67 7.31-17.49 7.31h-31.63v-25.36zm31.02-292.48V52.98h-31.02V27.62h31.63c6.81 0 13.01 2.79 17.49 7.27 4.47 4.48 7.27 10.68 7.27 17.49v113.89h-25.37zm-87.67 58.52-24.93-5.68v74.24l24.93-7.18v-61.38z" /></svg>
                    <p>Logout</p>
                </button>


                <div className="md:hidden duration-[0.2s] transition-all">
                    <button type='button' onClick={() => { setOpen(!open) }} className="text-black hover:text-gray-300 duration-[0.2s] transition-all focus:outline-none">
                        {open ?
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill='currentColor' width="1em" h="1em" stroke='currentColor' shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 478 511.69"><path fillRule="nonzero" d="M67.39 141.1H295.4c87.58 0 133.12 17.12 157.98 56.11 23.79 37.32 24.62 90.3 24.62 166.24V490.8c0 11.52-9.37 20.89-20.89 20.89-11.53 0-20.9-9.37-20.9-20.89V363.45c0-68.92-.61-116.76-17.91-143.91-16.24-25.45-51.58-36.66-122.9-36.66H66.23l127.92 111.99c8.64 7.55 9.51 20.73 1.95 29.37-7.55 8.65-20.73 9.51-29.37 1.96L12.94 191.58l-3.22-3.41C2.87 179.98-.36 169.84.03 159.96c.44-10.28 4.74-20.26 12.85-27.8C63.01 89.05 115.69 47.03 166.73 4.79c8.88-7.34 22.04-6.1 29.37 2.78 7.34 8.88 6.1 22.03-2.78 29.37L67.39 141.1z" /></svg>
                            :
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        }

                    </button>
                </div>
            </div>

            {open &&
                <div className="md:hidden mt-2 space-y-4 duration-[0.2s] transition-all">
                    <Link href="/" className="block hover:text-gray-300 duration-[0.2s] transition-all">Home</Link>
                    <Link href="/dashboard/kelola-produk" className="block hover:text-gray-300 duration-[0.2s] transition-all">Kelola Produk</Link>
                    <Link href="/dashboard/kelola-pesanan" className="block hover:text-gray-300">Kelola Pesanan</Link>
                    <button type='button' onClick={handleLogout} className='flex flex-row items-center hover:text-gray-300 duration-[0.2s] transition-all justify-center gap-[4px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' fill='currentColor' shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 474 512.46"><path d="M249.71.13 12.08 35.6C5.46 36.59 0 43.43 0 50.23v418.88c0 6.77 5.39 9.38 12.08 10.31l237.63 32.97c6.68.92 12.08-7.77 12.08-14.63V10.44c0-6.86-5.53-11.28-12.08-10.31zm124.96 329.08-.01-34.07c-.58.17-1.2.27-1.83.27h-53.47c-3.55 0-6.45-2.96-6.45-6.45v-66.2c0-3.48 2.97-6.45 6.45-6.45h53.47c.63 0 1.24.1 1.82.27v-34.06c0-6.29 5.1-11.4 11.39-11.4 3.29 0 6.25 1.4 8.33 3.63l76.01 70.9c4.59 4.27 4.85 11.47.58 16.06l-76.95 75.59c-4.47 4.4-11.67 4.34-16.07-.13a11.439 11.439 0 0 1-3.27-7.96zm-87.26 129.54h31.02V345.46h25.37v113.9c0 6.77-2.8 12.95-7.27 17.44-4.47 4.52-10.67 7.31-17.49 7.31h-31.63v-25.36zm31.02-292.48V52.98h-31.02V27.62h31.63c6.81 0 13.01 2.79 17.49 7.27 4.47 4.48 7.27 10.68 7.27 17.49v113.89h-25.37zm-87.67 58.52-24.93-5.68v74.24l24.93-7.18v-61.38z" /></svg>
                        <p>Logout</p>
                    </button>
                </div>
            }

        </header>
    );
}

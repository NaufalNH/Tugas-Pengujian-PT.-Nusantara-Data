"use client";
import { useEffect, useState } from "react";


export default function Modal({ message, code, show, onClose }) {
    const [modal, setModal] = useState(show);

    useEffect(() => {
        setModal(show);
    }, [show]);
    return (
        <>
            {modal && (
                <div
                    className="absolute z-10"
                    aria-labelledby="modal-title"
                    role="dialog"
                    aria-modal="true">
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <div className="bg-white flex sm:flex-row flex-col-reverse justify-between items-center px-4 pb-4 pt-3 sm:px-6 sm:pb-4 border-b border-gray-300">
                                    <div className="sm:flex sm:items-start">
                                        <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                            <svg
                                                className="h-6 w-6 text-red-600"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                aria-hidden="true">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                                                />
                                            </svg>
                                        </div>
                                        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                            <div className="mt-2">
                                                <h3
                                                    className="text-lg font-semibold leading-6 text-red-600"
                                                    id="modal-title">
                                                    Warning
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" w-full flex items-center justify-end sm:items-center sm:justify-center sm:w-fit">
                                        <button onClick={() => {
                                            setModal(false);
                                            onClose()
                                        }} className="sm:text-lg text-base text-gray-500 font-extralight " type="button"><svg version="1.1" fill="currentColor" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="1em" height="1em" viewBox="0 0 122.878 122.88" enableBackground="new 0 0 122.878 122.88" xmlSpace="preserve"><g><path d="M1.426,8.313c-1.901-1.901-1.901-4.984,0-6.886c1.901-1.902,4.984-1.902,6.886,0l53.127,53.127l53.127-53.127 c1.901-1.902,4.984-1.902,6.887,0c1.901,1.901,1.901,4.985,0,6.886L68.324,61.439l53.128,53.128c1.901,1.901,1.901,4.984,0,6.886 c-1.902,1.902-4.985,1.902-6.887,0L61.438,68.326L8.312,121.453c-1.901,1.902-4.984,1.902-6.886,0 c-1.901-1.901-1.901-4.984,0-6.886l53.127-53.128L1.426,8.313L1.426,8.313z" /></g></svg></button>
                                    </div>
                                </div>
                                <div className="bg-white sm:min-h-[120px] px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                    <div className="my-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                        <div className="my-2">
                                            <p className="text-sm sm:text-base text-gray-500">
                                                {code === 405 ? "Password yang anda masukkan salah!" : message}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setModal(false);
                                            onClose()
                                        }}
                                        className="mt-3 inline-flex w-full justify-center rounded-md bg-gray-600 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-400 duration-[0.3s] transition-all sm:mt-0 sm:w-[100px]">
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
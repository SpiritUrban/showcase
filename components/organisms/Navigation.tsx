"use client";

import NavLink from "@/components/molecule/NavLink";
import Image from "next/image";
import { useEffect, useState } from "react";

/* Альтернативные значения aria-current
Помимо "page", aria-current поддерживает другие значения:

"step" — для пошаговых процессов.
"location" — когда элемент обозначает текущее местоположение.
"date" — если это текущая дата (например, в календаре).
"time" — если это текущее время.
"true" — универсальный вариант для выделения текущего элемента. */

export default function Navigation() {
    const [theme, setTheme] = useState<"light" | "dark">("light");

    useEffect(() => {
        const root = document.documentElement;
        setTheme(root.classList.contains("dark") ? "dark" : "light");
    }, []);

    const toggleTheme = () => {
        const root = document.documentElement;
        const newTheme = theme === "dark" ? "light" : "dark";
        root.classList.toggle("dark", newTheme === "dark");
        localStorage.setItem("theme", newTheme);
        setTheme(newTheme);
    };

    return (
        <nav className="flex h-screen w-64 flex-col bg-white dark:bg-gray-800">
            <div className="flex h-16 items-center justify-center px-4">
                <Image
                    className="h-8 w-auto"
                    src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Showcase logo"
                    width={180}
                    height={38}
                />
            </div>
            <div className="flex-1 space-y-1 px-2 py-4">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/about">About</NavLink>
            </div>
            <div className="mt-auto flex items-center space-x-2 px-2 py-4">
                <button
                    type="button"
                    onClick={toggleTheme}
                    className="rounded-full p-2 text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-0 dark:text-gray-300 dark:hover:text-white"
                    aria-label="Toggle theme"
                >
                    {theme === "dark" ? (
                        <svg
                            className="size-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                            data-slot="icon"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                            />
                        </svg>
                    ) : (
                        <svg
                            className="size-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                            data-slot="icon"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                            />
                        </svg>
                    )}
                </button>
                <button
                    type="button"
                    className="relative rounded-full bg-gray-100 p-1 text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-white dark:bg-gray-800 dark:hover:text-white dark:focus:ring-offset-gray-800"
                >
                    <span className="absolute -inset-1.5"></span>
                    <span className="sr-only">View notifications</span>
                    <svg
                        className="size-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                        />
                    </svg>
                </button>
                <div className="relative ml-auto">
                    <button
                        type="button"
                        className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-none"
                        id="user-menu-button"
                        aria-expanded="false"
                        aria-haspopup="true"
                    >
                        <span className="absolute -inset-1.5"></span>
                        <span className="sr-only">Open user menu</span>
                        <Image
                            className="size-8 rounded-full"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt="Showcase logo"
                            width={180}
                            height={180}
                        />
                    </button>
                    <div
                        className="absolute left-0 z-10 mt-2 w-48 origin-top-left rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 focus:outline-none dark:bg-gray-700"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="user-menu-button"
                    >
                        <NavLink href="/profile">Your Profile</NavLink>
                        <NavLink href="/settings">Settings</NavLink>
                        <NavLink href="/signout">Sign out</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
}
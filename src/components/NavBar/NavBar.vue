<template>
    <!-- Main navigation container -->
    <nav
    class="fixed top-0 relative flex w-full flex-wrap items-center justify-between bg-[#FBFBFB] py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:py-4"
    data-te-navbar-ref>
    <div class="flex w-full flex-wrap items-center justify-between px-3">
        <div>
        <a
            class="mx-1 my-1 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 lg:mb-0 lg:mt-0"
            href="#">
            <img
            class="mr-2"
            src="../assets/dine ease logo white.png"
            style="height: 40px"
            alt="TE Logo"
            loading="lazy" />
        </a>
        </div>

        <!-- Hamburger button for mobile view -->
        <button
        class="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
        type="button"
        data-te-collapse-init
        data-te-target="#navbarSupportedContent4"
        aria-controls="navbarSupportedContent4"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <!-- Hamburger icon -->
        <span class="[&>svg]:w-7">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="h-7 w-7">
            <path
                fill-rule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clip-rule="evenodd" />
            </svg>
        </span>
        </button>

        <!-- Collapsible navbar container -->
        <div
        class="!visible mt-2 hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto"
        id="navbarSupportedContent4"
        data-te-collapse-item>
        <!-- Left links -->
        <ul
            class="list-style-none mr-auto flex flex-col ml-[850px] lg:mt-1 lg:flex-row"
            data-te-navbar-nav-ref>
            <!-- Home link -->
            <li
            class="my-4 pl-2 lg:my-0 lg:pl-2 lg:pr-1"
            data-te-nav-item-ref>
            <a
                class="text-white hover:text-green focus:text-neutral-700 disabled:text-black/30  lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                aria-current="page"
                href="/"
                data-te-nav-link-ref
                >Home</a
            >
            </li>
            <!-- About Link -->
            <li
            class="my-4 pl-2 lg:my-0 lg:pl-2 lg:pr-1"
            data-te-nav-item-ref>
            <a
                class="text-white hover:text-green focus:text-neutral-700 disabled:text-black/30  lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                aria-current="page"
                href="/about"
                data-te-nav-link-ref
                >About</a
            >
            </li>
            <!-- Contact Link -->
            <li
            class="my-4 pl-2 lg:my-0 lg:pl-2 lg:pr-1"
            data-te-nav-item-ref>
            <a
                class="text-white hover:text-green focus:text-neutral-700 disabled:text-black/30 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                aria-current="page"
                href="/contact"
                data-te-nav-link-ref
                >Contact</a
            >
            </li>
        </ul>

        <div class="flex items-center">
            <a href="/login">
                <button
                type="button"
                data-te-ripple-init
                data-te-ripple-color="light"
                class="mr-3 inline-block px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-green transition duration-150 ease-in-out bg-white rounded-full hover:text-txt-gray">
                Login 
                </button>
            </a>
            <a href="/signup">
                <button
                type="button"
                data-te-ripple-init
                data-te-ripple-color="light"
                class="inline-block rounded-full bg-green px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white hover:text-lgreen transition duration-150 ease-in-out hover:bg-hover-green  focus:bg-green active:bg-green">
                Get Started
                </button>
            </a>
        </div>
        </div>
    </div>
    </nav>
</template>

<script lang="ts">
    import { Collapse, initTE, Ripple } from "tw-elements";

initTE({ Collapse, Ripple });
</script>
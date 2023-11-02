<template>
    <!-- Main navigation container -->
    <nav class="fixed top-0 bg-white z-[1036] flex-no-wrap fixed flex w-full items-center justify-between py-2 shadow-md shadow-black/5 lg:flex-wrap lg:justify-start lg:py-4
    data-te-navbar-ref">
    <div class="flex w-full flex-wrap items-center justify-between px-3">
        <!-- Hamburger button for mobile view -->
        <button
        class="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
        type="button"
        data-te-collapse-init
        data-te-target="#navbarSupportedContent12"
        aria-controls="navbarSupportedContent12"
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

        <!-- Collapsible navigation container -->
        <div
        class="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
        id="navbarSupportedContent12"
        data-te-collapse-item>
        <!-- Logo -->
        <a
            class=" ml-2 mr-5 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mb-0 lg:mt-0"
            href="/home">
            <img
            src="../../assets/only-logo.png"
            style="height: 40px" 
            alt="TE Logo"
            loading="lazy" />
        </a>
        <!-- Left navigation links -->
        <ul
        class="list-style-none flex flex-col ml-[1000px] lg:flex-row"
            data-te-navbar-nav-ref>
            <li class="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
            <a
            class="text-white bg-primary rounded-xl py-3 px-8 transition duration-200 hover:text-neutral-800 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none [&.active]:text-black/90 dark:[&.active]:text-zinc-400"
                href="/reservations"
                data-te-nav-link-ref
                >Reserve a booking</a
            >
            </li>
            
            <li class="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
            <!-- Dashboard link -->
            <a
                class="text-green transition duration-200 hover:text-neutral-800 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400"
                href="/home"
                data-te-nav-link-ref
                >Home</a
            >
            </li>
            <!-- Team link -->
            
            <!-- Projects link -->
            <li class="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
            <a
            class="text-green transition duration-200 hover:text-neutral-800 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400"
                href="/contact"
                data-te-nav-link-ref
                >Contact</a
            >
            </li>
        </ul>
        </div>
        <!-- Second dropdown container -->
        <div class="relative" data-te-dropdown-ref>
            <!-- Second dropdown trigger -->
            <a
            class="hidden-arrow flex items-center whitespace-nowrap transition ease-in-out motion-reduce:transition-none"
            href="/user-profile"
            id="dropdownMenuButton2"
            role="button"
            data-te-dropdown-toggle-ref
            aria-expanded="false">
            <!-- User avatar -->
            <img
                src="https://tecdn.b-cdn.net/img/new/avatars/2.jpg"
                class="rounded-full"
                style="height: 40px; width: 40px"
                alt=""
                loading="lazy" />
            </a>
            <!-- Second dropdown menu -->
            <ul
            class="absolute left-auto right-0 z-[1000] float-left m-0 mt-1 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
            aria-labelledby="dropdownMenuButton2"
            data-te-dropdown-menu-ref>
            <!-- Second dropdown menu items -->
            <li>
                <a
                class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                href="#"
                data-te-dropdown-item-ref
                >View Profile</a
                >
            </li>
            <li>
                <a
                class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                href="#"
                data-te-dropdown-item-ref
                >Log Out</a
                >
            </li>
            </ul>
        </div>
    </div>
    </nav>
</template>
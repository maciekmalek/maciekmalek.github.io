export const Navbar = () => {
    return (
        <nav className="h-full flex flex-col items-center justify-start gap-4 p-4 bg-gray-100 dark:bg-gray-800">
            <a href="/" className="text-lg font-semibold text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Home</a>
            <a href="/github" className="text-lg font-semibold text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">GitHub</a>
        </nav>
    );
}
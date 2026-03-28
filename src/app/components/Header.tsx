import Link from "next/link";

const navLinks = [
    { label: "Features", href: "/features" },
    { label: "Community", href: "/#community" },
    { label: "Docs", href: "/docs" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
];

export default function Header() {
    return (
        <header className="navbar bg-base-100 px-6 py-4 lg:px-12">
            <div className="navbar-start">
                {/* Mobile dropdown */}
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu dropdown-content menu-sm z-10 mt-3 w-52 rounded-box bg-base-200 p-2 shadow">
                        {navLinks.map((link) => (
                            <li key={link.label}>
                                <Link href={link.href}>{link.label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <Link
                    href="/"
                    className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-base-content"
                >
                    axon
                </Link>
            </div>
            <nav className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-1 px-1 text-sm font-medium">
                    {navLinks.map((link) => (
                        <li key={link.label}>
                            <Link href={link.href} className="text-base-content/70 hover:text-base-content">
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="navbar-end">
                <Link href="/docs" className="btn btn-primary btn-sm rounded-full text-sm">
                    Get Started
                </Link>
            </div>
        </header>
    );
}

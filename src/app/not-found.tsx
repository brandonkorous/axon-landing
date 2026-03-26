import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-16 text-center">
            <span className="font-[family-name:var(--font-display)] text-8xl font-extrabold text-secondary/20 lg:text-9xl">
                404
            </span>
            <h1 className="mt-4 font-[family-name:var(--font-display)] text-2xl font-extrabold tracking-tight lg:text-3xl">
                Page not found
            </h1>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-base-content/60">
                The page you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>
            <div className="mt-8 flex gap-3">
                <Link href="/" className="btn btn-primary btn-sm rounded-full">
                    Go Home
                </Link>
                <Link href="/docs" className="btn btn-ghost btn-sm rounded-full">
                    View Docs
                </Link>
            </div>
        </div>
    );
}

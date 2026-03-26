import Link from "next/link";

const columns = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/#features" },
      { label: "Documentation", href: "/docs" },
      { label: "Changelog", href: "/changelog" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "GitHub", href: "https://github.com/brandonkorous/axon", external: true },
      { label: "Blog", href: "/blog" },
      { label: "About", href: "/about" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "License", href: "https://github.com/brandonkorous/axon/blob/main/LICENSE", external: true },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-primary px-6 py-16 text-primary-content lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
          {/* Brand */}
          <div className="flex flex-col gap-3 lg:w-1/4">
            <Link
              href="/"
              className="font-[family-name:var(--font-display)] text-2xl font-bold"
            >
              axon
            </Link>
            <p className="text-xs leading-relaxed opacity-70">
              Open-source, self-hosted AI command center.
              <br />
              Your intelligence, your infrastructure, your rules.
            </p>
          </div>

          {/* Link columns */}
          <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-3">
            {columns.map((col) => (
              <div key={col.title} className="flex flex-col gap-3">
                <h4 className="text-xs font-semibold uppercase tracking-widest opacity-60">
                  {col.title}
                </h4>
                <ul className="flex flex-col gap-2">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      {"external" in link ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm opacity-80 transition-opacity hover:opacity-100"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-sm opacity-80 transition-opacity hover:opacity-100"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-3 lg:w-1/4">
            <h4 className="text-xs font-semibold uppercase tracking-widest opacity-60">
              Newsletter
            </h4>
            <p className="text-xs opacity-70">
              Stay updated on releases and community news.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="you@email.com"
                className="input input-sm flex-1 rounded-full border-primary-content/20 bg-primary-content/10 text-xs text-primary-content placeholder:text-primary-content/40"
              />
              <button className="btn btn-sm rounded-full bg-primary-content text-primary hover:bg-primary-content/90">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-primary-content/10 pt-8 text-xs opacity-60 sm:flex-row">
          <p>&copy; 2026 Axon. Open source under AGPL License.</p>
          <p>Made with care for the developer community.</p>
        </div>
      </div>
    </footer>
  );
}

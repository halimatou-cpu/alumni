import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
        <header className="p-4 w-3/4 mx-auto">
            {/* First line */}
            <div className="flex items-center justify-between">
                {/* Logo on the left */}
                <Image
                    width={150}
                    height={125}
                    src="/esgi_logo.png"
                    alt="Logo"
                />
                {/* Text on the right */}
                <div className="text-esgiColor font-bold text-right text-18">
                    Le réseau des alumni <br/> de L&apos;ESGI
                </div>
            </div>

            {/* Second line */}
            <nav className="p-2 flex justify-between items-center">
                <div className="flex gap-5">
                    <Link href="/" className="hover:text-esgiColor no-underline">
                        Accueil
                    </Link>
                    <Link href="/dashboard" className="hover:text-esgiColor no-underline">
                        Dashboard
                    </Link>
                    <Link href="/diploma" className="hover:text-esgiColor no-underline">
                        Diplome
                    </Link>
                    <Link href="/school" className="hover:text-esgiColor no-underline">
                        Création d&apos;une école
                    </Link>
                    <Link href="/posts" className="hover:text-esgiColor no-underline">
                        Posts
                    </Link>
                </div>
            </nav>
        </header>
    );
}

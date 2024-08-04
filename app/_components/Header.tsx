import { Button, buttonVariants } from "@/components/ui/button";
import { GithubIcon } from "./icons/GithubIcon";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { YoutubeIcon } from "./icons/YoutubeIcon";
import { LinkedinIcon } from "./icons/LinkedinIcon";

export const Header = () => {
    return (
        <header className="sticky top-0 py-4 px-20 bg-background">
            <section className="flex items-baseline">
                <h1 className="text-lg font-bold text-primary">LAWAN_Mouctar_Ali.com </h1>
                <div className="flex-1" />
                <ul className="flex items-center gap-2">
                    <Link 
                        href="https://github.com/MOUCTARLAWAN"
                        className={cn(buttonVariants({ variant: "outline" }), "size-10 p-0")} 
                    >
                        <GithubIcon size={16} className="text-foreground" />
                    </Link>

                    <Link 
                        href="https://www.linkedin.com/in/mouctar-lawan-8a3850234/"
                        className={cn(buttonVariants({ variant: "outline" }), "size-10 p-0")} 
                    >
                        <LinkedinIcon size={16} className="text-foreground-center" />
                    </Link>
                </ul>
            </section>
        </header>
    );
};
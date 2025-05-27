import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

import { useTranslations } from "@/i18n/utils"
import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"

import type { ui } from "@/i18n/ui"

const NavBar: React.FC<{ lang: keyof typeof ui }> = ({ lang }) => {
	const [isScrolled, setIsScrolled] = useState(false)
	const [isOpen, setIsOpen] = useState(false)

	const t = useTranslations(lang)

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > window.innerHeight - 120)
		}

		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	const toggleNav = () => {
		setIsOpen(!isOpen)
	}

	const toggleLanguage = () => {
		lang === "es" ? "en" : "es"
	}

	return (
		<header
			className={cn(
				"fixed top-4 left-1/2 z-50 w-full max-w-[calc(100%-2em)] -translate-x-1/2 transform rounded-4xl bg-white/10 py-4 shadow backdrop-blur-xl transition-all duration-300 md:max-w-screen-xl",
				{
					"bg-white/40 py-3 shadow-md": isScrolled,
				}
			)}
		>
			<div className="container mx-auto flex items-center justify-between px-4">
				<a href="#" className="flex items-center space-x-2">
					<span className="text-asm-orange text-2xl font-bold">ASM</span>
					<span
						className={cn("text-xl font-medium text-white", {
							"text-asm-blue": isScrolled,
						})}
					>
						SPA
					</span>
				</a>

				<nav className="hidden items-center space-x-6 md:flex">
					<a
						href="#home"
						className={cn("hover:text-asm-orange font-medium text-white transition-colors", {
							"text-asm-blue": isScrolled,
						})}
					>
						{t("nav.home")}
					</a>
					<a
						href="#about"
						className={cn("hover:text-asm-orange font-medium text-white transition-colors", {
							"text-asm-blue": isScrolled,
						})}
					>
						{t("nav.about")}
					</a>
					<a
						href="#services"
						className={cn("hover:text-asm-orange font-medium text-white transition-colors", {
							"text-asm-blue": isScrolled,
						})}
					>
						{t("nav.services")}
					</a>
					<a
						href="#clients"
						className={cn("hover:text-asm-orange font-medium text-white transition-colors", {
							"text-asm-blue": isScrolled,
						})}
					>
						{t("nav.clients")}
					</a>
					<a
						href="#contact"
						className={cn("hover:text-asm-orange font-medium text-white transition-colors", {
							"text-asm-blue": isScrolled,
						})}
					>
						{t("nav.contact")}
					</a>

					<Button variant="ghost" onClick={toggleLanguage} className="font-bold">
						{lang === "es" ? "ES" : "EN"}
					</Button>
				</nav>

				<div className="flex items-center md:hidden">
					<button
						className={cn(
							"hover:bg-asm-blue flex size-9 items-center justify-center rounded-full p-2 font-bold text-white transition-colors",
							{
								"text-asm-blue hover:text-white": isScrolled,
							}
						)}
						onClick={toggleLanguage}
					>
						{lang === "es" ? "ES" : "EN"}
					</button>

					<button
						className={cn(
							"hover:bg-asm-blue flex size-9 items-center justify-center rounded-full p-2 text-white transition-colors",
							{
								"text-asm-blue hover:text-white": isScrolled,
							}
						)}
						onClick={toggleNav}
						aria-label="Toggle menu"
					>
						{isOpen ? <X /> : <Menu />}
					</button>
				</div>
			</div>

			<div
				className={`absolute top-full mt-2 w-full overflow-hidden rounded-4xl bg-white shadow transition-all duration-300 ease-in md:hidden ${
					isOpen ? "max-h-[40vh] opacity-100" : "max-h-0 opacity-0"
				}`}
			>
				<nav className="flex flex-col py-4">
					<a
						href="#home"
						className="text-asm-blue hover:text-asm-orange px-6 py-3 font-medium"
						onClick={() => setIsOpen(false)}
					>
						{t("nav.home")}
					</a>
					<a
						href="#about"
						className="text-asm-blue hover:text-asm-orange px-6 py-3 font-medium"
						onClick={() => setIsOpen(false)}
					>
						{t("nav.about")}
					</a>
					<a
						href="#services"
						className="text-asm-blue hover:text-asm-orange px-6 py-3 font-medium"
						onClick={() => setIsOpen(false)}
					>
						{t("nav.services")}
					</a>
					<a
						href="#clients"
						className="text-asm-blue hover:text-asm-orange px-6 py-3 font-medium"
						onClick={() => setIsOpen(false)}
					>
						{t("nav.clients")}
					</a>
					<a
						href="#contact"
						className="text-asm-blue hover:text-asm-orange px-6 py-3 font-medium"
						onClick={() => setIsOpen(false)}
					>
						{t("nav.contact")}
					</a>
				</nav>
			</div>
		</header>
	)
}

export default NavBar

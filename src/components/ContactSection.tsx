import React, { useState } from "react"
import { Mail, Phone, Building } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { useTranslations } from "@/i18n/utils"
import type { ui } from "@/i18n/ui"

const ContactSection: React.FC<{ lang: keyof typeof ui }> = ({ lang }) => {
	const t = useTranslations(lang)
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		subject: "",
		message: "",
	})
	const [loading, setLoading] = useState(false)

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target
		setFormData((prev) => ({ ...prev, [name]: value }))
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setLoading(true)

		try {
			// Here you would normally send the form data to your backend
			// For demo purposes, we'll simulate a successful submission
			await new Promise((resolve) => setTimeout(resolve, 1000))

			toast.success(t("contact.success"), {
				duration: 5000,
			})

			setFormData({
				name: "",
				email: "",
				phone: "",
				subject: "",
				message: "",
			})
		} catch (error) {
			toast.error(t("contact.error"), {
				duration: 5000,
			})
		} finally {
			setLoading(false)
		}
	}

	const fadeIn = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6 },
		},
	}

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()

		toast.success("Message sent", {
			duration: 5000,
		})

		formData.name = ""
		formData.email = ""
		formData.phone = ""
		formData.subject = ""
		formData.message = ""
	}

	return (
		<section id="contact" className="bg-muted mx-auto max-w-screen-xl py-20">
			<div className="section-container">
				<div className="mb-12 text-center">
					<h2 className="text-asm-blue mb-4 text-3xl font-bold md:text-4xl">
						{t("contact.title")}
					</h2>
					<div className="bg-asm-orange mx-auto h-1 w-24"></div>
				</div>

				<div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
					<div className="rounded-xl bg-white p-6 shadow-md lg:col-span-2">
						<h3 className="text-asm-blue mb-6 text-xl font-bold">{t("contact.form.submit")}</h3>
						<form onSubmit={handleSubmit} className="space-y-6">
							<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
								<div>
									<label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">
										{t("contact.form.name")} *
									</label>
									<Input
										id="name"
										name="name"
										value={formData.name}
										onChange={handleChange}
										required
										className="w-full"
									/>
								</div>
								<div>
									<label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
										{t("contact.form.email")} *
									</label>
									<Input
										id="email"
										name="email"
										type="email"
										value={formData.email}
										onChange={handleChange}
										required
										className="w-full"
									/>
								</div>
							</div>

							<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
								<div>
									<label htmlFor="phone" className="mb-1 block text-sm font-medium text-gray-700">
										{t("contact.form.phone")}
									</label>
									<Input
										id="phone"
										name="phone"
										value={formData.phone}
										onChange={handleChange}
										className="w-full"
									/>
								</div>
								<div>
									<label htmlFor="subject" className="mb-1 block text-sm font-medium text-gray-700">
										{t("contact.form.subject")} *
									</label>
									<Input
										id="subject"
										name="subject"
										value={formData.subject}
										onChange={handleChange}
										required
										className="w-full"
									/>
								</div>
							</div>

							<div>
								<label htmlFor="message" className="mb-1 block text-sm font-medium text-gray-700">
									{t("contact.form.message")} *
								</label>
								<Textarea
									id="message"
									name="message"
									value={formData.message}
									onChange={handleChange}
									required
									className="min-h-[150px] w-full"
								/>
							</div>

							<Button
								type="submit"
								disabled={loading}
								className="bg-asm-blue hover:bg-asm-blue/90 w-full text-white sm:w-auto"
								onClick={handleClick}
							>
								{loading ? "Enviando..." : t("contact.form.submit")}
							</Button>
						</form>
					</div>

					<div className="bg-asm-blue flex flex-col justify-between rounded-xl p-6 text-white shadow-md">
						<div>
							<h3 className="mb-6 text-xl font-bold">{t("contact.info.title")}</h3>

							<div className="space-y-6">
								<div className="flex items-start space-x-4">
									<div className="rounded-full bg-white/10 p-3">
										<Building className="h-5 w-5 text-white" />
									</div>
									<div>
										<h4 className="font-medium">{t("contact.info.manager")}</h4>
									</div>
								</div>

								<div className="flex items-start space-x-4">
									<div className="rounded-full bg-white/10 p-3">
										<Mail className="h-5 w-5 text-white" />
									</div>
									<div>
										<h4 className="font-medium">Email</h4>
										<a
											href={`mailto:${t("contact.info.email")}`}
											className="text-white/80 hover:text-white"
										>
											{t("contact.info.email")}
										</a>
									</div>
								</div>

								<div className="flex items-start space-x-4">
									<div className="rounded-full bg-white/10 p-3">
										<Phone className="h-5 w-5 text-white" />
									</div>
									<div>
										<h4 className="font-medium">Teléfono</h4>
										<a
											href={`tel:${t("contact.info.phone")}`}
											className="text-white/80 hover:text-white"
										>
											{t("contact.info.phone")}
										</a>
									</div>
								</div>
							</div>
						</div>

						<div className="mt-8 border-t border-white/20 pt-6">
							<p className="text-white/80 italic">"{t("footer.slogan")}"</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ContactSection

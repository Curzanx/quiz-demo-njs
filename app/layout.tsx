import type { Metadata } from "next"
import "./globals.css"
import { QuizProvider } from "@/components/context/QuizProvider"

export const metadata: Metadata = {
  title: "Quizzy",
  description: "A simple quiz application demo.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <QuizProvider>{children}</QuizProvider>
      </body>
    </html>
  )
}

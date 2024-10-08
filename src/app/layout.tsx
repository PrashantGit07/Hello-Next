"use client"

// import { Metadata } from "next"
import Link from "next/link"
import { usePathname } from "next/navigation"
import "./style.css"


// export const metadata: Metadata = {
//   title: {
//     default: "Learning NextJs",
//     template: "%s | Learning Next"
//   }
// }

// showing active linkes , like we will display all the links on every page we go so that we can naviagate to any page form current page

const navLinks = [
  { name: "About", href: "/About" },
  { name: "Profile", href: "/profile" }
]


// export const metadata = {
//   title: 'Next.js',
//   description: 'Generated by Next.js',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const pathname = usePathname()

  return (
    <html lang="en">

      <body>


        <header style={{
          backgroundColor: '#f8f9fa',
          padding: '20px',
          fontFamily: 'Arial, sans-serif',
        }}>
          this is header
        </header>



        {/* this is important */}
        {children}

        <div>


          {navLinks.map((link) => {
            const isActive = pathname.startsWith(link.href)
            return (
              <Link href={link.href} key={link.name}
                className={isActive ? " font-bold mr-4" : " text-blue-500 mr-4"}
              >
                {link.name}
              </Link>
            )
          })}
        </div>

        <footer style={{
          backgroundColor: '#f8f9fa',
          padding: '20px',
          fontFamily: 'Arial, sans-serif',
          marginTop: '20px',
        }}>
          this is footer
        </footer>







      </body>

    </html>
  )
}

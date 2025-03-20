export default function HeroSection() {
    return (
      <section className="w-full h-screen flex justify-center items-center">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-black mb-6">
              Fullstack Next.js
            </h1>
            <p className="text-xl md:text-2xl text-gray-800 max-w-[800px] mx-auto">
              Implemented Clerk Authentication, Resend for sending email and drizzle with Neon Database
            </p>
          </div>
        </div>
      </section>
    )
  }
  
  
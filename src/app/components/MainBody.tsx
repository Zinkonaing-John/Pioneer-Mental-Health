import image from 'next/image';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className=''>
    <div className="min-h-screen bg-gradient-to-b from-[#E097FD] via-[#81D9FF]  to-[#DCEBB7] text-gray-900">
      <header className="flex justify-between items-center px-8 py-6">
        <h1 className="text-3xl font-extrabold">UrTherapist</h1>
      </header>

      <nav className="flex space-x-7 items-center justify-center">
          <Link href="/" className="hover:bg-rose-300 rounded-md px-4 py-2 text-3xl text-black">Home</Link>

          {/* Services Dropdown */}
          <div className="relative group">
            <Link href="#" className="hover:bg-rose-300 rounded-md px-4 py-2 text-3xl text-black">Services</Link>
            <div className="absolute hidden group-hover:flex flex-col bg-white text-gray-800 rounded-md shadow-md mt-2 min-w-[140px] z-10">
              <Link href="/services/therapy" className="px-4 py-2 hover:bg-gray-100">Therapy</Link>
              <Link href="/services/consultation" className="px-4 py-2 hover:bg-gray-100">Consultation</Link>
            </div>
          </div>

          <Link href="/about" className="hover:bg-rose-300 rounded-md px-4 py-2 text-3xl text-black">About Us</Link>
        </nav>

      {/* Hero Section */}
      <section className="text-center my-8">
        <h2 className="text-3xl sm:text-3xl md:text-6xl font-bold text-teal-800 mb-4">
          Your Mental Health is Always Important
        </h2>
        <br></br>
        <br></br>
        <Link href="/get-started" className="inline-block bg-blue-500 text-white px-10 py-5 rounded-3xl text-lg hover:bg-blue-600 transition">
          Get Started
        </Link>
      </section>

      {/* Images Grid */}
      <section className="flex justify-center items-center min-h-screen  px-4 py-0">
        <div className="flex gap-6">

    {/* Column 1 */}
            <div className="flex flex-col gap-6">
            <Image src="/images/image1.png" alt="Person 1" width={150} height={150} className="rounded-xl object-cover" />
            <Image src="/images/image2.png" alt="Person 2" width={150} height={150} className="rounded-xl object-cover" />
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-6">
            <Image src="/images/image3.png" alt="Person 3" width={150} height={150} className="rounded-xl object-cover" />
            <Image src="/images/image4.png" alt="Person 4" width={150} height={150} className="rounded-xl object-cover" />
            </div>

            {/* Center Column */}
            <div className="flex flex-col items-center gap-6 pt-20">
            
            <Image src="/images/image5.png" alt="Center Person" width={200} height={200} className="rounded-xl object-cover" />
            </div>

            {/* Column 4 */}
            <div className="flex flex-col gap-6">
            <Image src="/images/image6.png" alt="Person 6" width={150} height={150} className="rounded-xl object-cover" />
            <Image src="/images/image7.png" alt="Person 7" width={150} height={150} className="rounded-xl object-cover" />
            </div>

            {/* Column 5 */}
            <div className="flex flex-col gap-6">
            <Image src="/images/image8.png" alt="Person 8" width={150} height={150} className="rounded-xl object-cover" />
            <Image src="/images/image9.png" alt="Person 9" width={150} height={150} className="rounded-xl object-cover" />
            </div>
        </div>
</section>

      {/* Help Section */}
      <section className="flex flex-col md:flex-row items-center justify-around px-8 py-16 gap-8 pl-30">
        {/* Mock Chat on Phone */}
        <Image src="/images/image.png" alt="Login preview" width={500} height={300} />


        {/* Text Content */}
        <div className="text-center md:text-left max-w-md ">
          <h3 className="text-6xl font-bold mb-4 font-serif">IT'S OKAY TO ASK FOR HELP</h3>
          <p className="text-xl text-gray-700">
            You don't have to fight your battle alone. <br />
            Talk to us.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-white not-first:py-20 px-8 text-sm text-black flex flex-col md:flex-row justify-evenly items-start">
        <div className="mb-4 md:mb-0">
          <p className='text-xl'><strong>Get Help</strong></p>
          <p>Kor-010-1234-2775</p>
        </div>

        <div className="mb-4 md:mb-0">
          <p  className='text-xl '><strong>About us</strong></p>
          <Link href="/team" className="block hover:underline">Meet our team</Link>
          <Link href="/feedback" className="block hover:underline">Feedback</Link>
        </div>

        <div className="mb-4 md:mb-0">
          <p  className='text-xl'><strong>Social Media</strong></p>
          <div className="flex space-x-2 items-center justify-around mt-1">
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <span className="text-black text-lg"><Image src="/images/facebook.png" alt="Login preview" width={40} height={40} /></span>
            </Link>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <span className="text-pink-500 text-lg"><Image src="/images/instagram.png" alt="Login preview" width={40} height={40} /></span>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-4 right-4 flex space-x-4">
          <Link href="/terms" className="mr-4 hover:underline">Terms of Service</Link>
          <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
        </div>
      </footer>
      
    </div>
    </div>
  );
}

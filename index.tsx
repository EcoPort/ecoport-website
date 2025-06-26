
export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-6">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">EcoPort</h1>
        <p className="text-xl">Turning Bali’s plastic waste into global opportunity</p>
      </header>

      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold mb-4">What We Do</h2>
        <p className="text-lg">
          EcoPort is a Bali-based recycling export operation that collects, cleans, and bales HDPE plastic for export to buyers worldwide. We partner with local communities and businesses to reduce waste and give plastic a second life.
        </p>
      </section>

      <section className="bg-gray-100 p-8 rounded-2xl shadow-lg max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold mb-4">Our Process</h2>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>Collect plastic from resorts, beach clubs, and street sources</li>
          <li>Sort, wash, and prepare HDPE material</li>
          <li>Bale for efficient container export</li>
          <li>Ship globally to trusted plastic buyers</li>
        </ul>
      </section>

      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold mb-4">Work With Us</h2>
        <p className="text-lg mb-4">
          Whether you’re a global buyer, local supplier, or want to support a cleaner Bali, we’d love to hear from you.
        </p>
        <a
          href="mailto:leahg.operations@ecoport.co.nz"
          className="inline-block bg-green-600 text-white px-6 py-3 rounded-2xl font-semibold shadow hover:bg-green-700 transition"
        >
          Contact Us
        </a>
      </section>

      <footer className="text-center text-sm text-gray-500 mt-12">
        &copy; {new Date().getFullYear()} EcoPort. All rights reserved.
      </footer>
    </div>
  );
}

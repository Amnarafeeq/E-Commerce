import Image from "next/image";

const About = () => {
  return (
    <div className="bg-[url('/images/about.jpg')] bg-cover   container mx-auto p-2 sm:p-8 space-y-8">
      <section className="text-center py-4 sm:py-12 px-4 sm:px-8 bg-[rgba(0,0,0,0.5)] text-white sm:w-[80%] mx-auto rounded-xl ">
        <h2 className="text-3xl font-extrabold mb-6">Our Story</h2>
        <p className="text-sm sm:text-lg mb-4">
          Welcome to our online makeup store! We started with the mission to
          provide a platform that makes beauty accessible for everyone. Our
          handpicked selection of products is designed to suit all skin tones,
          preferences, and budgets. With fast delivery and top-quality makeup,
          we aim to bring the best beauty experience to your doorstep.
        </p>
        <div className="relative w-full h-64 md:h-96 mb-6 border-4  border-gray-700 rounded-xl overflow-hidden">
          <Image
            src="/images/about1.avif" 
            alt="Our Story"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </section>

      <section className="text-center py-4 sm:py-12 px-4 sm:px-8 bg-[rgba(0,0,0,0.5)] text-white w-[80%] mx-auto rounded-xl ">
        <h2 className="text-3xl font-extrabold mb-6">Our Mission</h2>
        <p className="text-lg mb-4">
          Our mission is simple – to deliver high-quality, cruelty-free makeup
          products at your fingertips. We are committed to providing a seamless
          shopping experience, offering fast shipping and personalized
          recommendations to help you find the perfect products for every
          occasion.
        </p>
        <div className="relative w-full h-64 md:h-96 mb-6 border-4  border-gray-700 rounded-xl overflow-hidden">
          <Image
            src="/images/about2.jpg" // Add your image in public/images/our-mission.jpg
            alt="Our Mission"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </section>

      <section className="text-center py-4 sm:py-12 px-4 sm:px-8 bg-[rgba(0,0,0,0.5)] text-white w-[80%] mx-auto rounded-xl">
        <h2 className="text-3xl font-extrabold text-center mb-6">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Inclusive Beauty */}
          <div className="text-center">
            <div className="relative w-full h-64 mb-4 border-4  border-gray-700 rounded-xl overflow-hidden">
              <Image
                src="/images/about3.jpeg" // Add your image in public/images/inclusive-beauty.jpg
                alt="Inclusive Beauty"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h3 className="text-xl font-semibold">Inclusive Beauty</h3>
            <p className="text-lg mt-2">
              Our products cater to all skin tones, celebrating the diversity of
              beauty.
            </p>
          </div>

          {/* Cruelty-Free */}
          <div className="text-center">
            <div className="relative w-full h-64 mb-4 border-4  border-gray-700 rounded-xl overflow-hidden">
              <Image
                src="/images/about4.webp" // Add your image in public/images/cruelty-free.jpg
                alt="Cruelty-Free"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h3 className="text-xl font-semibold">Cruelty-Free</h3>
            <p className="text-lg mt-2">
              We are proud to offer products that are cruelty-free, made with
              care and love for both you and the planet.
            </p>
          </div>

          {/* Expertly Crafted */}
          <div className="text-center">
            <div className="relative w-full h-64 mb-4 border-4  border-gray-700 rounded-xl overflow-hidden">
              <Image
                src="/images/about5.avif" // Add your image in public/images/expertly-crafted.jpg
                alt="Expertly Crafted"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h3 className="text-xl font-semibold">Expertly Crafted</h3>
            <p className="text-lg mt-2">
              Each product is carefully crafted with high-quality ingredients
              for a flawless finish.
            </p>
          </div>
        </div>
      </section>

      <section className="text-center py-4 sm:py-12 px-4 sm:px-8 bg-[rgba(0,0,0,0.5)] text-white w-[80%] mx-auto rounded-xl ">
        <h2 className="text-3xl font-extrabold mb-6">Join Our Journey</h2>
        <p className="text-lg mb-4">
          Be a part of our makeup revolution. Shop with confidence and join the
          community of beauty lovers who trust our products.
        </p>
        <div className="relative w-full h-64 md:h-96 mb-6 border-4  border-gray-700 rounded-xl overflow-hidden">
          <Image
            src="/images/about6.webp" // Add your image in public/images/join-us.jpg
            alt="Join Our Journey"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </section>
    </div>
  );
};

export default About;

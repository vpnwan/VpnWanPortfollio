const ContactSection = () => {
    return (
      <section className="text-gray-700 body-font relative  scale-95">
        <div className="absolute inset-0 bg-gray-300">
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="map"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3298.1070336094513!2d72.8313337!3d24.5594045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395d2f0010f33b0b%3A0x80bc04847a3b2660!2sNirwan%20Villa!5e1!3m2!1sen!2sin!4v1739891580099!5m2!1sen!2sin&zoom=20"
            style={{ filter: 'grayscale(1) contrast(1.2)' }}
          ></iframe>
        </div>
        <div className="container px-5 py-24 mx-auto flex">
          <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Get in Touch or Hire a Designer </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              Nirwan Villa, Mount Abu
            </p>
            <input
              className="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4"
              placeholder="Email"
              type="email"
            />
            <textarea
              className="bg-white rounded border border-gray-400 focus:outline-none h-32 focus:border-indigo-500 text-base px-4 py-2 mb-4 resize-none"
              placeholder="Message"
            ></textarea>
            <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Quick Consult
            </button>
            <p className="text-xs text-gray-500 mt-3">
              We Respond in 24 hours via mail or call.
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default ContactSection;
  
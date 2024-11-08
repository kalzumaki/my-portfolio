
const Contact = () => {
  return (
    <div>
      <section id="contact" className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-3xl font-semibold mb-6 text-gray-700">Contact</h3>
          <p className="text-gray-600">
            Feel free to reach out for collaborations or just a friendly hello!
          </p>
          <a
            href="mailto:lumantasvankirk@gmail.com"
            className="inline-block mt-4 bg-teal-600 text-white px-6 py-2 rounded-md hover:bg-teal-700 transition"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;

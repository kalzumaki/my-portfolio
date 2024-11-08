import { MainSectionProps } from "../types/mainSection";

const MainSection: React.FC<MainSectionProps> = ({
  name,
  description,
  resumeLink,
}) => {
  return (
    <div>
      <section className="flex flex-col items-center justify-center text-center py-20 px-4 bg-gradient-to-br from-teal-100 via-white to-teal-50">
        {/* Profile Picture */}
        <div className="mb-6">
          <img
            src="/path/to/your/profile-picture.jpg"
            alt="Profile Picture"
            className="w-32 h-32 rounded-full object-cover border-4 border-teal-600 shadow-lg"
          />
        </div>

        {/* Name and Description */}
        <h2 className="text-4xl font-extrabold mb-4 text-teal-700">{name}</h2>
        <p className="text-lg max-w-lg mb-6 text-gray-700">{description}</p>

        {/* Resume Button */}
        <div className="flex space-x-4">
          <a
            href={resumeLink}
            className="border border-teal-600 text-teal-600 px-6 py-2 rounded-md hover:bg-teal-100 transition shadow-md"
          >
            Download Resume
          </a>
        </div>
      </section>
    </div>
  );
};

export default MainSection;

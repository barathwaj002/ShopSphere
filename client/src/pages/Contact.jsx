import {
  FiMail,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";

function Contact() {
  return (
    <div className="mx-auto max-w-5xl px-8 py-20">

      <h1 className="mb-10 text-5xl font-black text-white">
        Contact Us
      </h1>

      <div className="rounded-3xl border border-white/10 bg-[#0b1023] p-10">

        <div className="space-y-8 text-lg">

          <div className="flex items-center gap-4">

            <FiMail className="text-violet-400" />

            <span className="text-slate-300">
              support@shopsphere.com
            </span>

          </div>

          <div className="flex items-center gap-4">

            <FiPhone className="text-violet-400" />

            <span className="text-slate-300">
              +91 98765 43210
            </span>

          </div>

          <div className="flex items-center gap-4">

            <FiMapPin className="text-violet-400" />

            <span className="text-slate-300">
              Chennai, Tamil Nadu, India
            </span>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Contact;
"use client";
import { useState } from "react";
import {
    MapPin,
    Phone,
    Mail,
    Clock,
} from "lucide-react";

export default function ContactCard({ data }) {
      const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    notes: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
const handleSubmit = async (e) => {
  e.preventDefault();

  if (!form.name || !form.phone) {
    alert("Please enter your name and phone number.");
    return;
  }

  setLoading(true);

  try {
    const response = await fetch(
      "https://apibackend.mastercall.in/api/v1/web-leads/submit/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          form_key: "frm_spaberry_498333",
          name: form.name,
          phone: form.phone,
          address: form.address,
          notes: form.notes,
          submitted_from_url: window.location.href,
        }),
      }
    );

    const result = await response.json();

    if (response.ok) {
      alert(result.message || "Thank you! Your enquiry has been submitted.");

      setForm({
        name: "",
        phone: "",
        address: "",
        notes: "",
      });
    } else {
      alert(result.message || "Failed to submit the enquiry.");
    }
  } catch (error) {
    console.error(error);
    alert("Network error. Please check your internet connection.");
  } finally {
    setLoading(false);
  }
};
    return (
        <section className="bg-[#f8f6f3] py-20">
            <div className="max-w-7xl mx-auto px-5">

                <div className="flex items-center justify-center gap-6 mb-14">

                    <div className="h-[1px] w-20 bg-gray-400"></div>

                    <h2 className="text-4xl md:text-5xl font-serif text-[#2C2C2C]">
                        Contact Us
                    </h2>

                    <div className="h-[1px] w-20 bg-gray-400"></div>

                </div>

                {/* Card */}

                <div className="grid lg:grid-cols-2 gap-10 bg-white rounded-3xl shadow-xl overflow-hidden">

                    {/* Map */}

                    <div className="h-[420px]">
                        <iframe
                            src={data.map}
                            className="w-full h-full border-0"
                            loading="lazy"
                            allowFullScreen
                        />

                    </div>

                    {/* Form */}

                    <div className="p-8 lg:p-12">

                        <h3 className="text-3xl font-bold text-[#8B5A2B] mb-8">
                            Contact Form
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-5">

                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="w-full border rounded-xl p-4 text-black outline-none focus:ring-2 focus:ring-[#8B5A2B]"
                            />

                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                value={form.phone}
                                onChange={handleChange}
                                required
                                className="w-full border rounded-xl p-4 text-black outline-none focus:ring-2 focus:ring-[#8B5A2B]"
                            />

                            <input
                                type="text"
                                name="address"
                                placeholder="Address"
                                value={form.address}
                                onChange={handleChange}
                                className="w-full border rounded-xl p-4 text-black outline-none focus:ring-2 focus:ring-[#8B5A2B]"
                            />

                            <textarea
                                rows={5}
                                name="notes"
                                placeholder="Your Message"
                                value={form.notes}
                                onChange={handleChange}
                                className="w-full border rounded-xl p-4 text-black outline-none focus:ring-2 focus:ring-[#8B5A2B]"
                            />

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full rounded-xl bg-[#8B5A2B] px-8 py-4 font-semibold text-white duration-300 hover:bg-black disabled:opacity-60"
                            >
                                {loading ? "Sending..." : "Send Message"}
                            </button>

                        </form>

                    </div>

                </div>

                {/* Contact Info */}

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">

                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                        <MapPin className="text-[#8B5A2B]" size={34} />
                        <h4 className="font-bold text-black text-xl mt-4">Address</h4>
                        <p className="text-gray-600 mt-3">
                            {data.address}
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                        <Phone className="text-[#8B5A2B]" size={34} />
                        <h4 className="font-bold text-black text-xl mt-4">Phone</h4>

                        <a
                            href={`tel:${data.phone}`}
                            className="text-gray-600 mt-3 block"
                        >
                            {data.phone}
                        </a>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                        <Mail className="text-[#8B5A2B]" size={34} />
                        <h4 className="font-bold text-black text-xl mt-4">Email</h4>

                        <a
                            href={`mailto:${data.email}`}
                            className="text-gray-600 mt-3 block"
                        >
                            {data.email}
                        </a>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                        <Clock className="text-[#8B5A2B]" size={34} />
                        <h4 className="font-bold text-black text-xl mt-4">Working Hours</h4>

                        <p className="text-gray-600 mt-3">
                            {data.timings}
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
}
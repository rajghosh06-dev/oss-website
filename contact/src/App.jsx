import React from "react";
import Navbar from "./assets/Navbar";
import Footer from "./assets/Footer";
import { Mail, Phone, MapPin, Clock, Github, Linkedin, Instagram } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const App = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden px-6 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
          variants={fadeUp}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl mt-12 mb-4">Get In Touch</h1>
          <p className="text-xl max-w-2xl mx-auto mb-12 text-black/70">
            Building Tomorrow's Open Source Contributors
          </p>
          <img
            className="mx-auto my-6 w-full max-w-md max-h-[560px] rounded-2xl shadow-lg object-cover"
            src="./contact.png"
            alt="Contact"
          />
        </motion.div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            className="text-3xl text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Contact Information
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              {
                icon: <Mail className="h-10 w-10 mb-4" />,
                title: "Email",
                content: (
                  <a href="mailto:ossclub@gcet.edu.in" className="hover:text-black">
                    ossclub@gcet.edu.in
                  </a>
                ),
                bg: "from-blue-50/60 via-cyan-50/40 to-yellow-50/60",
              },
              {
                icon: <MapPin className="h-10 w-10 mb-4" />,
                title: "Location",
                content: (
                  <p>Computer Lab 301<br />Block 2, GCET</p>
                ),
                bg: "from-pink-50/60 via-orange-50/40 to-yellow-50/60",
              },
              {
                icon: <Clock className="h-10 w-10 mb-4" />,
                title: "Meeting Time",
                content: (
                  <p>Every Saturday<br />10:00 AM - 03:00 PM</p>
                ),
                bg: "from-yellow-50/60 via-pink-50/40 to-blue-50/60",
              },
              {
                icon: <Phone className="h-10 w-10 mb-4" />,
                title: "Quick Response",
                content: <p>Discord Server<br />Join via invite link</p>,
                bg: "from-cyan-50/60 via-blue-50/40 to-pink-50/60",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                className={`relative overflow-hidden rounded-2xl p-8 min-h-[180px] bg-gradient-to-br ${card.bg}`}
              >
                <div className="relative">
                  {card.icon}
                  <h3 className="text-lg mb-2">{card.title}</h3>
                  <div className="text-black/70">{card.content}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Coordinator */}
      <section className="py-20 relative overflow-hidden">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto px-6 bg-white/60 backdrop-blur-sm rounded-2xl p-10 border border-black/5"
        >
          <h2 className="text-3xl text-center mb-10">Faculty Coordinator</h2>
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl mb-2">Dr. Faculty Name</h3>
            <p className="text-lg text-black/70 mb-4">
              Faculty Coordinator, Assistant Professor
            </p>
            <p className="text-black/60 mb-6">
              Computer Science & Engineering Department
            </p>
            <div className="space-y-2">
              <a href="mailto:faculty@gcet.edu.in" className="flex items-center justify-center gap-2 hover:text-black">
                <Mail className="h-5 w-5" /> faculty@gcet.edu.in
              </a>
              <a href="tel:+919876543210" className="flex items-center justify-center gap-2 hover:text-black">
                <Phone className="h-5 w-5" /> +91 98765 43210
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Core Team */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl text-center mb-16">Core Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {["President", "Secretary", "Technical Lead"].map((role, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-2xl p-8 bg-gradient-to-br from-blue-50/60 to-pink-50/40"
              >
                <div className="relative text-center">
                  <h3 className="text-xl mb-1">Student Name</h3>
                  <p className="text-black/70 mb-4">{role}</p>
                  <a
                    href="mailto:someone@student.gcet.edu.in"
                    className="flex items-center justify-center gap-2 text-sm text-black/60 hover:text-black mb-4"
                  >
                    <Mail className="h-4 w-4" /> {role.toLowerCase()}@student.gcet.edu.in
                  </a>
                  <div className="flex justify-center gap-4">
                    <a href="#"><Github className="h-5 w-5 hover:text-black" /></a>
                    <a href="#"><Linkedin className="h-5 w-5 hover:text-black" /></a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-20 relative overflow-hidden text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto px-6"
        >
          <h2 className="text-3xl mb-6">Connect With Us</h2>
          <p className="text-black/70 mb-12">Follow us on social media to stay updated</p>
          <div className="flex justify-center gap-6">
            <a href="https://github.com/GCET-Open-Source-Foundation" target="_blank" className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/company/gcet-open-source-foundation/" target="_blank" className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </motion.div>
      </section>

      <Footer />
    </>
  );
};

export default App;

import { useState, useRef } from "react";
import { PageShell } from "../components/layout/PageShell.jsx";
import { Hero } from "../components/ui/Hero.jsx";
import { Field } from "../components/ui/Field.jsx";
import { PrimaryButton } from "../components/ui/PrimaryButton.jsx";
import { SectionHeading } from "../components/ui/SectionHeading.jsx";
import { images } from "../data/assets.js";
import { gsap, ScrollTrigger, useGSAP } from "../lib/gsap.js";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  date: "",
  guests: "",
  message: "",
  booking: false,
};

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState(initialForm);
  const containerRef = useRef(null);

  useGSAP(() => {
    // Form reveal
    gsap.from('.contact-form', {
      y: 60,
      opacity: 0,
      rotateX: 5,
      duration: 1.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.contact-section',
        start: 'top 80%',
      }
    });

    // Info cards stagger
    gsap.from('.info-card', {
      x: -40,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.contact-section',
        start: 'top 80%',
      }
    });
  }, { scope: containerRef });

  function updateField(event) {
    const { name, type, checked, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <PageShell>
      <div ref={containerRef}>
        <Hero
          image={images.contactHero}
          eyebrow="Get in touch"
          title="I'd love to hear from you"
          copy="Whether you're planning a dinner, a celebration, or you're not quite sure yet, drop me a note below and tell me what you have in mind."
        />

        <section className="contact-section px-6 py-32 md:px-8">
          <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.9fr_1.1fr] perspective-[1000px]">
            <div className="space-y-10">
              <SectionHeading
                eyebrow="Booking enquiries"
                title="Tell me about the evening you want."
                copy="Whether you already have a date or you're still figuring it out, start here and I'll get back to you."
              />

              <div className="info-card rounded-[2.5rem] bg-[#dbc9af] p-10 text-stone-900 shadow-xl">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-stone-700">Availability</p>
                <p className="mt-5 text-xl leading-relaxed font-serif">
                  My diary gets booked up quickly. If I am unavailable for your
                  preferred date, I can recommend an alternative chef through my
                  network.
                </p>
              </div>

              <div className="info-card rounded-[2.5rem] border border-white/10 bg-surface-container-low p-10 transition-colors hover:bg-surface-container-high">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-stone-500">If I'm fully booked</p>
                <a
                  href="https://yhangry.com/booking/chef-register"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 block break-all font-serif text-3xl text-primary transition-colors hover:text-white"
                >
                  yhangry.com/booking/chef-register
                </a>
                <p className="mt-5 text-lg leading-relaxed text-on-surface-variant font-light">
                  If I can't do your date myself, you can use this link to find
                  another chef I trust.
                </p>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="contact-form rounded-[3rem] border border-white/5 bg-surface-container-low p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.18)]"
            >
              {submitted && (
                <div className="mb-8 rounded-[1.5rem] border border-primary/30 bg-primary/10 px-6 py-5 text-primary">
                  Thanks — I've got your message. (Demo: this form isn't wired to
                  email yet; hook it up when you're ready.)
                </div>
              )}

              <div className="grid gap-8 md:grid-cols-2">
                <Field label="Name">
                  <input
                    className="form-field"
                    name="name"
                    required
                    value={formData.name}
                    onChange={updateField}
                  />
                </Field>
                <Field label="Email">
                  <input
                    className="form-field"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={updateField}
                  />
                </Field>
              </div>

              <div className="mt-8 grid gap-8 md:grid-cols-2">
                <Field label="Phone">
                  <input
                    className="form-field"
                    name="phone"
                    value={formData.phone}
                    onChange={updateField}
                  />
                </Field>
                <Field label="Event Date">
                  <input
                    className="form-field"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={updateField}
                  />
                </Field>
              </div>

              <div className="mt-8">
                <Field label="Guest Count">
                  <input
                    className="form-field"
                    name="guests"
                    type="number"
                    value={formData.guests}
                    onChange={updateField}
                  />
                </Field>
              </div>

              <div className="mt-8">
                <Field label="Message">
                  <textarea
                    className="form-field min-h-48 resize-y"
                    name="message"
                    value={formData.message}
                    onChange={updateField}
                  />
                </Field>
              </div>

              <label className="mt-8 flex items-start gap-4 text-on-surface-variant cursor-pointer group">
                <input
                  type="checkbox"
                  name="booking"
                  checked={formData.booking}
                  onChange={updateField}
                  className="mt-1 h-6 w-6 rounded border-white/20 bg-black/20 text-primary transition-colors group-hover:border-primary/50"
                />
                <span className="text-lg font-light">Tick this if you're ready to talk dates and booking properly.</span>
              </label>

              <div className="mt-10">
                <PrimaryButton>SEND TO ME</PrimaryButton>
              </div>
            </form>
          </div>
        </section>
      </div>
    </PageShell>
  );
}

"use client";

import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppointmentForm from "./components/AppointmentForm";
import ContactInfoBox from "./components/ContactInfoBox";
import ScheduleAppointmentBox from "./components/ScheduleAppointmentBox";
import ExpertsContactBox from "./components/ExpertsContactBox";

import Link from "next/link";


// Reusable Input Component
type FormInputProps = {
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
};

function FormInput({
  name,
  placeholder,
  type = "text",
  required = false,
}: FormInputProps) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      required={required}
      className="w-full rounded-md border border-gray-300 bg-white px-3 py-3 text-sm text-gray-900 outline-none focus:border-orange-400"
    />
  );
}


export default function Home() {

  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <div>
      <Header />

      <section className="bg-gray-100 px-6 py-5">
        <div className="mx-auto max-w-7xl">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-sm">

              <li>
                <Link href="/" className="text-gray-700">
                  Home
                </Link>
              </li>

              <li className="text-gray-400">/</li>

              <li>
                <Link href="/articles" className="text-gray-700">
                  Articles
                </Link>
              </li>

              <li className="text-gray-400">/</li>

              <li aria-current="page" className="font-medium text-blue-800">
                Developmental Delays in Children Whitefield
              </li>

            </ol>
          </nav>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-10">

        {/* Main Article and Sidebar */}
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 lg:grid-cols-12">

          <div className="min-w-0 lg:col-span-9">
            {/* Article Image */}
            <div className="mb-6">
              <img
                src="/images/developmental-delays-in-children-whitefield.webp"
                alt="Developmental Delays in Children"
                className="h-auto w-full rounded-xl object-cover"
              />
            </div>
            <div className="mb-5 flex flex-wrap items-center justify-between gap-4 border-gray-200 pb-5">

              <div className="flex items-center gap-x-4 text-sm text-gray-600">
                <span>2,748 Views</span>
                <span>3.7 Minute Read</span>
              </div>

              <div className="flex flex-wrap items-center gap-3">

                <a
                  href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.medicoverhospitals.in%2Farticles%2Fdevelopmental-delays-in-children-whitefield"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md bg-blue-800 px-3 py-2 text-xs font-medium text-white hover:bg-blue-700"
                >
                  Facebook
                </a>

                <a
                  href="https://x.com/intent/post?url=https%3A%2F%2Fwww.medicoverhospitals.in%2Farticles%2Fdevelopmental-delays-in-children-whitefield"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md bg-gray-900 px-3 py-2 text-xs font-medium text-white hover:bg-black"
                >
                  Twitter
                </a>

                <a
                  href="https://www.linkedin.com/sharing/share-offsite/?url=https://www.medicoverhospitals.in/articles/developmental-delays-in-children-whitefield"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md bg-sky-600 px-3 py-2 text-xs font-medium text-white hover:bg-sky-700"
                >
                  LinkedIn
                </a>

                <a
                  href="https://api.whatsapp.com/send?text=Developmental%20Delays%20in%20Children%3A%20Signs%20Parents%20Should%20Know%20-%20https%3A%2F%2Fwww.medicoverhospitals.in%2Farticles%2Fdevelopmental-delays-in-children-whitefield"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md bg-green-700 px-3 py-2 text-xs font-medium text-white hover:bg-green-700"
                >
                  WhatsApp
                </a>

              </div>

            </div>


            <div className="mb-5 flex items-center gap-x-4 gap-y-2 text-sm text-gray-600">

              <span className="bg-pink-100 border-xl rounded-l px-2 py-1">10-09-2026</span>
              <span className="bg-pink-100 border-xl rounded-l px-2 py-1">Team Medicover</span>
              <span className="bg-pink-100 border-xl rounded-l px-2 py-1">Pediatrics</span>

            </div>

            {/* Author and Medical Reviewer */}
            <div className="mb-6 text-sm leading-6 text-gray-600">

              <p>
                <span className="mr-3 inline-flex h-4 w-4 items-center justify-center rounded-full bg-green-600 text-xs font-bold text-white">
                  ✓
                </span>
                Written by <span className="text-gray-600">Medicover Team</span>
                {" "}and Medically Reviewed by{" "}
                <Link
                  href="/doctors/dr-sreetama-chowdhury-developmental-pediatrician-bangalore"
                  className="text-sm text-blue-900 hover:underline"
                >
                  Dr Sreetama Chowdhury - Consultant Developmental Pediatrician
                </Link>
              </p>

            </div>


            <article className="text-gray-600">

              <h1 className="text-2xl font-semibold leading-tight mb-4 text-gray-900">
                Developmental Delays in Children: Signs Parents Should Know
              </h1>

              <h2 className="mb-4 text-xl font-semibold text-gray-900">
                Key Highlights
              </h2>

              <ul className="list-disc space-y-2 pl-10 text-sm leading-7 md:text-base">

                <li>
                  Developmental delays can affect speech, movement, learning,
                  social interaction or emotional skills.
                </li>

                <li>
                  Speech and language delays may appear as limited babbling,
                  gestures, words or difficulty following simple instructions.
                </li>

                <li>
                  Motor development delays can affect sitting, crawling, walking,
                  grasping and other age-appropriate movements.
                </li>

                <li>
                  Limited eye contact, social interaction or difficulty engaging
                  with others may indicate a social development concern.
                </li>

                <li>
                  Parents and caregivers should discuss persistent developmental
                  concerns with a pediatrician rather than relying on comparisons
                  with other children.
                </li>

                <li>
                  A developmental assessment can help identify areas where a child
                  may need additional support, therapy or monitoring.
                </li>

                <li>
                  Medicover Hospital in Bangalore has a team of pediatricians and
                  qualified therapists for professional developmental assessments
                  for children.
                </li>

              </ul>

              <section className="space-y-4">

                <p className="text-base leading-8 mt-6">
                  Almost every parent has had that quiet, sinking thought at a
                  playground or family get-together. You watch someone else's toddler
                  string together three-word requests or scramble up the monkey bar,
                  and your mind immediately turns home. Why isn’t my daughter babbling
                  like that yet? Shouldn’t my son be walking without holding onto the
                  couch by now?
                </p>

                <p className="text-base leading-8">
                  First, every parent must understand that children are humans, not
                  clockwork toys. They sprout teeth, take steps, and find their voices
                  along completely personal graphs. Still, knowing the actual signs
                  of developmental delay in children matters. Not because milestones
                  are tests your baby must pass to prove anything, but because
                  catching an area where they are genuinely stuck gives you the chance
                  to step in early.
                </p>

              </section>

              <section id="developmental" className="scroll-mt-24 space-y-4">

                <h2 className="mt-4 text-xl font-semibold text-gray-900">
                  What Counts as a Developmental Delay in Children?
                </h2>

                <p className="text-base leading-8">
                  A developmental delay refers to a consistent pattern where a child
                  has not gained the everyday physical, communicative, thinking, or
                  emotional skills expected for their age group. There is a difference
                  between children who simply do things at their own unhurried pace
                  and a true developmental delay in children.
                </p>

                <p className="text-base leading-8">
                  The most reassuring thing to understand early is that a delay isn't
                  a lifelong label or a fixed diagnosis. It simply tells you that
                  your toddler’s sensory system, speech apparatus, or motor
                  coordination needs targeted practice and therapeutic guidance.
                </p>

              <ContactInfoBox/>

                <h2 className="mt-4 text-xl font-semibold text-gray-900">
                  Key Signs of Development Delay in Children
                </h2>

                <p className="text-base leading-8">
                  A child’s brain builds more than a million neural connections per second in the first three years. When you introduce speech therapy or developmental exercises early, you take advantage of maximum neural connections. That is why it is important to recognize the early signs of development delay. It can help parents, first caregivers and teachers seek professional guidance at the right time and support a child’s growth, learning and overall development.
                </p>

                <h2 className="mt-4 text-xl font-semibold text-gray-900">
                  Speech and Language Delay
                </h2>

                <p className="text-base leading-8">
                  Communication isn't just about clear, full words. Long before speaking, babies chat with their eyes, body movements, and vocal experiments. You will want to discuss the potential speech and language delay with a pediatrician for development delay, if you notice these milestone missing the mark on the calendar:
                </p>

                <ul className="list-disc space-y-2 pl-10 text-sm leading-7 md:text-base">

                  <li>
                    Between 9 and 12 months: Doesn't babble back and forth, Does not string together two similar sounds like "ba-ba" or "ma-ma", won't imitate simple everyday sounds, or rarely turns when you call their name across a quiet room.
                  </li>

                  <li>
                    Between 12 and 14 months: Does not use communicative body languagesuch as pointing at objects they want, waving "bye-bye", shaking their head to express "no", or reaching up to be held.
                  </li>

                  <li>
                    By 18 months: Uses fewer than 10 to 15 distinct, meaningful words, or consistently prefers silent pointing over making any vocal effort to get attention.
                  </li>

                  <li>
                    By age 2: Cannot combine two simple words together such as "want juice" or "daddy go", mimics words without understanding their meaning, or struggles to follow simple, routine verbal directions like "bring your shoes".
                  </li>

                </ul>

                <h2 className="mt-4 text-xl font-semibold text-gray-900">
                  Motor Development Delay
                </h2>

                <p className="text-base leading-8">Physical milestones build muscle memory, posture control, and independence. An underlying motor development delay shows up in gross motor skills as well as fine motor coordination:</p>

                <ul className="list-disc space-y-2 pl-10 text-sm leading-7 md:text-base">

                  <li>
                    By 4 to 5 months: Noticeable head lag when pulled to sit, or limbs that feel unusually floppyor conversely, rigidly stiff with tight fists that rarely open.                  </li>

                  <li>
                    By 9 months: Cannot sit steadily on their own without toppling over sideways.
                  </li>

                  <li>
                    By 12 to 18 months: Doesn'tattempt to crawl, scoot, or pull up against low furniture by their first birthday, or hasn't taken unassisted steps by 18 months.                  </li>

                  <li>
                    Past the first year: Persistent struggle to grasp teething biscuits, pick up finger foods, hold a baby spoon, or pass a wooden block from one hand to the other.                  </li>

                </ul>

                <h2 className="mt-4 text-xl font-semibold text-gray-900">
                  Social and Emotional Development Delay
                </h2>

                <p className="text-base leading-8">Paying attention to how your toddler relates to familiar caregivers and other children can reveal whether a social development delay might be present:</p>

                <ul className="list-disc space-y-2 pl-10 text-sm leading-7 md:text-base">

                  <li>
                    By 6 months: Very limited eye contact, absence of warm reciprocal smiles, or seeming indifferent to familiar faces and voices.
                  </li>
                  <li>
                    By 9 to 12 months: No interest in interactive social games and rarely seeking to share enjoyment by showing you a favorite toy.
                  </li>
                  <li>
                    Around ages 2 to 3: Avoidance of parallel play alongside peers, severe difficulty coping with minor daily routine shifts, or frequent explosive meltdowns that feel unmanageable compared to typical toddler tantrums.</li>
                </ul>

               <ScheduleAppointmentBox/>

                <h2 className="mt-4 text-xl font-semibold text-gray-900">
                  What To Do If You FeelSomething Is Not Right? Development Assessment For Children in Whitefield
                </h2>

                <p className="text-base leading-8">
                  Trust your parental instinct. Nobody knows your child’s rhythms better than you do. If your gut says something isn’t clicking, don’t bottle it up or stay awake reading conflicting advice on internet forums.</p>

                <p className="text-base leading-8">
                  Your first practical step is setting up an appointment with an experienced pediatrician for developmental delay. Medicover Hospitals in Bangalore, has a team of experienced pediatricians offering expert evaluation for development delays in children.</p>

                <p className="text-base leading-8">
                  Our pediatric specialists use standardized clinical checklists alongside gentle observation to understand where your child is thriving and where they might need structured encouragement.</p>

                <p className="text-base leading-8">
                  We offer an accessible, supportive environment where pediatric specialists, occupational therapists, and speech pathologists work collaboratively under one roof. Having an integrated team ensures you leave with a clear, step-by-step roadmap rather than generic advice.</p>

                <p className="text-base leading-8">
                  If you notice any signs of development delay in your child, book a consultation at Medicover today.</p>


                <section className="my-10">

                  <h2 className="mb-6 mt-4 text-2xl font-bold text-gray-900">
                    Frequently Asked Questions
                  </h2>

                  <div className="space-y-4">

                    {[
                      {
                        question: "What are developmental delays in children?",
                        answer: "Developmental delays occur when a child takes longer than expected to reach milestones in areas such as speech, movement, learning, social interaction, or emotional development."
                      },
                      {
                        question: "What are the early signs of developmental delays?",
                        answer: "Early signs may include delayed speech, difficulty walking, limited eye contact, difficulty interacting with others, or not reaching age-appropriate milestones."
                      },
                      {
                        question: "What causes developmental delays in children?",
                        answer: "Developmental delays may be associated with genetic conditions, premature birth, pregnancy complications, neurological conditions, or environmental factors."
                      },
                      {
                        question: "When should I consult a doctor about developmental delays?",
                        answer: "Consult a pediatrician if your child is not reaching expected developmental milestones, loses previously acquired skills, or shows concerns with speech, movement, learning, or social interaction."
                      },
                      {
                        question: "Can developmental delays be treated?",
                        answer: "Many children benefit from early intervention, which may include speech therapy, occupational therapy, physical therapy, and developmental support based on their individual needs."
                      }
                    ].map((faq, index) => (

                      <div
                        key={index}
                        className="overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300"                      >

                        <button
                          type="button"
                          onClick={() =>
                            setActiveFaq(activeFaq === index ? null : index)
                          }
                          className="group flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                          aria-expanded={activeFaq === index}
                        >

                          <span className="text-base font-semibold text-gray-800">
                            {faq.question}
                          </span>

                          <span
                            className={`flex h-7 w-7 shrink-0 items-center justify-center text-2xl font-medium transition-all duration-300 ${activeFaq === index
                              ? ""
                              : "text-gray-700"
                              }`}
                          >
                            {activeFaq === index ? "−" : "+"}
                          </span>

                        </button>

                        <div
                          className={`grid transition-all duration-300 ease-in-out ${activeFaq === index
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                            }`}
                        >
                          <div className="overflow-hidden">
                            <p className="px-5 pb-5 text-sm leading-7 text-gray-600">
                              {faq.answer}
                            </p>
                          </div>
                        </div>

                      </div>

                    ))}

                  </div>

                </section>

              </section>

            </article>
          </div>

          <div className="min-w-0 space-y-6 lg:col-span-3">

            <div className="rounded-2xl border border-gray-200 bg-white px-5 py-2">

              <nav aria-label="Article navigation">
                <ul className="divide-y divide-gray-200">

                  <li>
                    <a
                      href="#developmental"
                      className="flex items-center justify-between py-4 text-sm text-gray-700"
                    >
                      Developmental
                      <span>›</span>
                    </a>
                  </li>

                  <li>
                    <a
                      href="#signs"
                      className="flex items-center justify-between py-4 text-sm text-gray-700"
                    >
                      Signs
                      <span>›</span>
                    </a>
                  </li>

                  <li>
                    <a
                      href="#assessment"
                      className="flex items-center justify-between py-4 text-sm text-gray-700"
                    >
                      Assessment
                      <span>›</span>
                    </a>
                  </li>

                  <li>
                    <a
                      href="#faqs"
                      className="flex items-center justify-between py-4 text-sm text-gray-700"
                    >
                      Frequently Asked Questions
                      <span>›</span>
                    </a>
                  </li>

                </ul>
              </nav>
            </div>


           <AppointmentForm/>


          </div>

        </div>

        <section className="my-8 w-full">
          <h2 className="mb-6 mt-4 text-center text-2xl font-bold text-gray-700">
            Related Blogs
          </h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">

            {/* Blog 1 */}
            <div className="overflow-hidden rounded-xl bg-white shadow-md transition-shadow duration-300 hover:shadow-lg">
              <div className="p-4">

                <h3 className="mb-2 mt-3 text-m text-gray-700">
                  Developmental Delays in Children : Parents Should Know</h3>

                <div className="mb-3 mt-4 flex items-center gap-2 text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.8}
                  >
                    <rect x="3" y="5" width="18" height="16" rx="2" />
                    <path strokeLinecap="round" d="M16 3v4M8 3v4M3 10h18" />
                  </svg>
                  <span>2026-10-09</span>


                  <Link
                    href="/articles/developmental-milestones-in-children"
                    className="ml-14 text-white bg-blue-900 p-2 rounded-lg hover:orange-500"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>

            {/* Blog 2 */}
            <div className="overflow-hidden rounded-xl bg-white shadow-md transition-shadow duration-300 hover:shadow-lg">
              <div className="p-4">

                <h3 className="mb-2 mt-3 text-m text-gray-700">
                  Newborn Jaundice : Normal Signs & When to Seek Medical Help
                </h3>

                <div className="mb-3 mt-4 flex items-center gap-2 text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.8}
                  >
                    <rect x="3" y="5" width="18" height="16" rx="2" />
                    <path strokeLinecap="round" d="M16 3v4M8 3v4M3 10h18" />
                  </svg>
                  <span>2026-10-09</span>


                  <Link
                    href="/articles/developmental-milestones-in-children"
                    className="ml-14 text-white bg-blue-900 p-2 rounded-lg hover:orange-500"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>

            {/* Blog 3 */}
            <div className="overflow-hidden rounded-xl bg-white shadow-md transition-shadow duration-300 hover:shadow-lg">
              <div className="p-4">

                <h3 className="mb-2 mt-3 text-m text-gray-700">
                  Pediatric Cardiac Arrest Cause Prevention
                </h3>

                <div className="mb-3 mt-4 flex items-center gap-2 text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.8}
                  >
                    <rect x="3" y="5" width="18" height="16" rx="2" />
                    <path strokeLinecap="round" d="M16 3v4M8 3v4M3 10h18" />
                  </svg>
                  <span>2026-10-09</span>


                  <Link
                    href="/articles/developmental-milestones-in-children"
                    className="ml-14 text-white bg-blue-900 p-2 rounded-lg hover:orange-500"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>

            {/* Blog 4 */}
            <div className="overflow-hidden rounded-xl bg-white shadow-md transition-shadow duration-300 hover:shadow-lg">
              <div className="p-4">

                <h3 className="mb-2 mt-3 text-m text-gray-700">
                  Pediacttric Dermatology Care in Hitech City | Child Skin Health</h3>

                <div className="mb-3 mt-4 flex items-center gap-2 text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.8}
                  >
                    <rect x="3" y="5" width="18" height="16" rx="2" />
                    <path strokeLinecap="round" d="M16 3v4M8 3v4M3 10h18" />
                  </svg>
                  <span>2026-10-09</span>


                  <Link
                    href="/articles/developmental-milestones-in-children"
                    className="ml-14 text-white bg-blue-900 p-2 rounded-lg hover:orange-500"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </section>

      <ExpertsContactBox/>
      </section>

      <Footer />
    </div>

  );
}


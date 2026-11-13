export default function ContactInfoBox() {
    return (
        <div
            className="mb-4 rounded-xl px-8 py-8 text-center text-white shadow-md"
            style={{
                background: "linear-gradient(135deg, #062847 0%, #0b4a8a 100%)"
            }}
        >
            <h2 className="mb-5 text-3xl font-bold text-white">
                Not sure where to start?
            </h2>

            <p className="mb-8 text-base leading-7 text-white text-[18px]">
                Talk to a patient care advisor — free, confidential, 24/7. We'll match you to the right specialist and book your appointment in minutes.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 text-base text-xl m-3 text-white">

                <span className="rounded-md border border-orange-400 bg-orange-400 px-8 py-2">
                    Call +91-40-6833-4455
                </span>

                <span className="rounded-md border border-blue-500 bg-blue-500 px-8 py-2">
                    Book Online
                </span>

                <span className="rounded-md border border-green-500 bg-green-500 px-8 py-2">
                    Whatsapp Us
                </span>

            </div>
        </div>
    );
}

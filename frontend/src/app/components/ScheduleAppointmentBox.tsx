export default function ScheduleAppointmentBox() {
    return (
        <div
            className="mb-4 rounded-xl px-8 py-8 text-center text-white shadow-md"
            style={{
                background: "linear-gradient(135deg, #062847 0%, #0b4a8a 100%)"
            }}
        >

            <p className="mb-8 text-base leading-7 text-white text-[20px]">
                Your health is everything - prioritize your well-being today.</p>

            <div className="flex flex-wrap items-center justify-center gap-3 text-base text-xl m-3 text-white">

                <span className="rounded-md border border-orange-400 bg-orange-400 px-8 py-2">

                    Schedule Your Appointment</span>

            </div>

        </div>

    );
}
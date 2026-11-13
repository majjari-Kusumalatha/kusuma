
import Link from "next/link";

export default function CategorySelectionForm() {
  const categories = [
    "Cardiology",
    "Neurology",
    "Orthopedics",
    "Gastroenterology",
    "Urology",
    "Oncology",
    "Dermatology",
    "Nephrology",
    "Pulmonology",
    "Gynecology",
    "Pediatrics",
    "Endocrinology",
    "ENT",
    "General Medicine",
    "Psychiatry",
    "Ophthalmology",
  ];

  return (
    <div className="mt-10 rounded-2xl border border-gray-200 bg-white p-5 shadow-m">
      {/* Category Heading */}
      <h2 className="mb-4 border-b border-gray-400 pb-2 text-xl font-bold text-gray-800">
        Category
      </h2>

      {/* Scrollable Category List */}
      <div className="h-120 space-y-2 overflow-y-auto pr-3">
        {categories.map((category) => (
          <Link
            key={category}
            href={`/categories/${category.toLowerCase().replace(/\s+/g, "-")}`}
            className="block rounded-lg p-2 text-sm text-gray-700 transition-colors hover:text-blue-700"
          >
            {category}
          </Link>
        ))}
      </div>
    </div>
  );
}

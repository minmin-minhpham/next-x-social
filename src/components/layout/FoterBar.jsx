import { RIGHT_BAR_FOTER } from "@/config/constants";
import Link from "next/link";

export default function FoterBar() {
  return (
    <div className="flex flex-wrap gap-x-4 px-6 text-[12px] text-gray-600">
      {RIGHT_BAR_FOTER.map(({ label, url }, index) => {
        const isLastItem = index === RIGHT_BAR_FOTER.length - 1;

        return (
          <div key={index}>
            {!isLastItem ? (
              <Link href={url} className="border-r-1 pr-3">
                {label}
              </Link>
            ) : (
              <p className="">{label}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}

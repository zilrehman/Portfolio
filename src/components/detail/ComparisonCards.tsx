import { SectionHeading } from "./SectionHeading";
import { CheckCircleIcon } from "@/components/ui/icons";

type Column = {
  title: string;
  subtitle: string;
  highlighted: boolean;
  rows: { value: string; detail: string }[];
};

/**
 * Side-by-side "us vs. the alternative" blocks. Built from the same card shell
 * as the pricing plans so the highlighted column reads the same way the
 * featured plan does.
 */
export function ComparisonCards({
  heading,
  sub,
  columns,
  paragraphs = [],
  bullets = [],
  background = "bg-cream",
}: {
  heading: string;
  sub?: string;
  columns: Column[];
  paragraphs?: string[];
  bullets?: string[];
  background?: string;
}) {
  if (!columns.length) return null;
  const cols = columns.length >= 3 ? "lg:grid-cols-3" : "md:grid-cols-2";

  return (
    <section className={`${background} py-12 md:py-16 lg:py-24`}>
      <div className="container mx-auto flex max-w-7xl flex-col gap-10 px-4 lg:gap-14 lg:px-8">
        <SectionHeading heading={heading} sub={sub} paragraphs={paragraphs} bullets={bullets} />

        <div className={`grid grid-cols-1 items-stretch gap-5 ${cols}`}>
          {columns.map((column, i) => (
            <div
              key={`${column.title}-${i}`}
              className={`flex h-full flex-col overflow-hidden rounded-2xl border bg-white drop-shadow-2xl transition-all duration-300 ease-out hover:-translate-y-1 lg:rounded-4xl ${
                column.highlighted ? "border-brand" : "border-gray-100"
              }`}
            >
              <div
                className={`flex flex-col gap-1 p-5 ${
                  column.highlighted
                    ? "bg-gradient-to-b from-[#D9D6FE] to-white"
                    : "bg-white"
                }`}
              >
                <p
                  className={`text-xl font-bold ${
                    column.highlighted ? "text-brand" : "text-black"
                  }`}
                >
                  {column.title}
                </p>
                <p className="text-sm text-gray-700">{column.subtitle}</p>
              </div>

              <div className="flex flex-1 flex-col gap-3 border-t border-gray-200 p-5">
                {column.rows.map((row, ri) => (
                  <div key={`${row.value}-${ri}`} className="flex flex-row gap-3">
                    <span className="mt-0.5 shrink-0">
                      <CheckCircleIcon />
                    </span>
                    <div className="flex flex-col gap-0.5">
                      <p className="text-sm font-medium text-gray-900">
                        {row.value}
                      </p>
                      {row.detail && (
                        <p className="text-xs text-gray-500">{row.detail}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

/**
 * Tabular comparisons that the original site renders as a real table. Scrolls
 * horizontally on small screens rather than reflowing, so the columns stay
 * readable.
 */
export function DataTable({
  heading,
  sub,
  headers,
  rows,
  truncatedRows = 0,
  paragraphs = [],
  bullets = [],
  background = "bg-white",
}: {
  heading: string;
  sub?: string;
  headers: string[];
  rows: string[][];
  truncatedRows?: number;
  paragraphs?: string[];
  bullets?: string[];
  background?: string;
}) {
  if (!headers.length || !rows.length) return null;

  return (
    <section className={`${background} py-12 md:py-16 lg:py-24`}>
      <div className="container mx-auto flex max-w-7xl flex-col gap-10 px-4 lg:gap-14 lg:px-8">
        <SectionHeading heading={heading} sub={sub} paragraphs={paragraphs} bullets={bullets} />

        <div className="overflow-x-auto rounded-2xl border border-gray-100 bg-white drop-shadow-2xl lg:rounded-4xl">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="bg-[#EDECFB]">
                {headers.map((header, i) => (
                  <th
                    key={`${header}-${i}`}
                    className="px-5 py-4 font-manrope text-sm font-bold text-brand lg:text-base"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, ri) => (
                <tr
                  key={ri}
                  className={ri % 2 === 1 ? "bg-cream" : "bg-white"}
                >
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      className={`border-t border-gray-200 px-5 py-4 text-sm lg:text-base ${
                        ci === 0
                          ? "font-medium text-gray-950"
                          : "text-gray-700"
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {truncatedRows > 0 && (
          <p className="measure text-sm text-gray-600 lg:mx-auto lg:text-center">
            Showing the first {rows.length} rows. {truncatedRows} further rows are
            published in the downloadable dataset.
          </p>
        )}
      </div>
    </section>
  );
}

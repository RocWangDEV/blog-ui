import Link from "next/link";
import "../app/globals.css";

const INFO_CONFIG: { title: string; url: string }[] = [
  {
    title: "email",
    url: "mailto:rocwang516@gmail.com",
  },
  {
    title: "leetcode",
    url: "https://leetcode.cn/u/ymgm/",
  },
];

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="mx-auto my-10 max-w-[720px] bg-white px-5 py-10 shadow-xl lg:px-10">
      <h1 className="mb-8 border-b border-gray-300 pb-2 text-4xl">
        <Link href="/">note</Link>
      </h1>
      <main>{children}</main>
      <footer className="mt-12 flex justify-between border-t border-gray-300 pt-2">
        <div>
          {INFO_CONFIG?.map((item) => (
            <a
              className="underline mr-3"
              key={item.title}
              href={item.url}
              target="_blank"
            >
              {item.title}
            </a>
          ))}
        </div>
        <a onClick={handleScrollToTop} className="cursor-pointer">
          top
        </a>
      </footer>
    </div>
  );
}

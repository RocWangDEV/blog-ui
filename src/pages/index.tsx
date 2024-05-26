import Leetcode from "@/components/leetcode";
import Articles from "@/components/articles";

const TITLE = `We'll find a way, we always have.`;

export default function Index() {
  return (
    <div>
      <p className="text-2xl">{TITLE}</p>
      <Leetcode />
      <Articles />
    </div>
  );
}

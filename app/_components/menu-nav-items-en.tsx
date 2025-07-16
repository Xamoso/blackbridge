import Link from "next/link";

const MenuNavItemsEN = () => {
  return (
    <ul className="space-y-6">
      <li><Link href="/en">Home</Link></li>
      <li><Link href="/en/about">About</Link></li>
      <li><Link href="/en/insight">Insight</Link></li>
      <li><Link href="/en/broker">Execution Broker</Link></li>
      <li><Link href="/en/contact">Contact</Link></li>
    </ul>
  );
};

export default MenuNavItemsEN;

import Link from "next/link";

const MenuNavItemsPT = () => {
  return (
    <ul className="space-y-6">
      <li><Link href="/pt">Home</Link></li>
      <li><Link href="/pt/sobre">Sobre</Link></li>
      <li><Link href="/pt/insight">Insight</Link></li>
      <li><Link href="/pt/broker">Broker Exclusivo</Link></li>
      <li><Link href="/pt/contato">Contato</Link></li>
    </ul>
  );
};

export default MenuNavItemsPT;

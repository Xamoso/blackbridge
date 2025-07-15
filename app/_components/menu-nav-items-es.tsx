import Link from "next/link";

const MenuNavItemsES = () => {
  return (
    <ul className="space-y-6">
      <li><Link href="/es">Inicio</Link></li>
      <li><Link href="/es/sobre">Sobre</Link></li>
      <li><Link href="/es/perspectiva">Insight</Link></li>
      <li><Link href="/es/broker">Broker de Ejecución Exclusivo</Link></li>
      {/* <li><Link href="/es/workshop">Taller</Link></li> */}
    </ul>
  );
};

export default MenuNavItemsES;

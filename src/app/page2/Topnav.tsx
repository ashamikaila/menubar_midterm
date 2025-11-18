import Image from "next/image";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";

export default function Topnav() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#fdfff4] text-[#3b3a26] py-4 px-10 flex justify-between items-center z-50 shadow-sm">
      <div className="flex items-center gap-2">
        <Link href="https://www.the-matcha.tokyo/en">
          <Image
            src="/matchalover_icon.svg"
            alt="Matcha Lover Logo"
            width={80}
            height={80}
            className="hover:opacity-80 transition"
          />
        </Link>
      </div>

      <NavigationMenu>
        <NavigationMenuList className="flex items-center gap-10">
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                href="/"
                className="font-semibold hover:opacity-70 transition"
              >
                HOME
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                href="/shop"
                className="font-semibold hover:opacity-70 transition"
              >
                SHOP
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                href="/about"
                className="font-semibold hover:opacity-70 transition"
              >
                ABOUT
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="flex items-center gap-6">
        <Link href="https://www.the-matcha.tokyo/en?srsltid=AfmBOorS8sChJw_AfaLJ4z-yx6zk-NQito7T1nIi1Bo9-mzlafc6MIn5">
          <Image src="/search.png" alt="Search" width={25} height={25} />
        </Link>
        <Link href="https://www.the-matcha.tokyo/en?srsltid=AfmBOorS8sChJw_AfaLJ4z-yx6zk-NQito7T1nIi1Bo9-mzlafc6MIn5">
          <Image src="/person.png" alt="User" width={25} height={25} />
        </Link>
        <Link href="https://www.the-matcha.tokyo/en/collections/100-organic-matcha">
          <Image src="/shop.png" alt="Cart" width={25} height={25} />
        </Link>
      </div>
    </nav>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navigationItems = [
  { name: "Home", href: "/" },
  { 
    name: "About Us", 
    href: "/about",
  },
  {
    name: "Services",
    href: "/services",
    submenu: [
      { name: "Strategy & Consulting", href: "/services/strategy" },
      { name: "Technology & Innovation", href: "/services/technology" },
      { name: "Operations & Growth", href: "/services/operations" },
      { name: "Product Evaluation", href: "/services/product-evaluation" },
    ],
  },
  { name: "Industries", href: "/industries" },
  { name: "Partnerships", href: "/partnerships" },
  { name: "Meet Joey", href: "/meet-joey" },
  { name: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm"
          : "bg-white"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative h-12 w-32">
              <Image
                src="/pet-jet-logo.png"
                alt="Pet Jet Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-1">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.submenu ? (
                  <>
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center space-x-1 px-3 py-2 text-sm font-medium transition-colors rounded-md",
                        pathname?.startsWith(item.href ?? '')
                          ? "text-pet-purple-500"
                          : "text-gray-700 hover:text-pet-purple-500 hover:bg-gray-50"
                      )}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="h-4 w-4" />
                    </Link>
                    {/* Dropdown menu */}
                    <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <div className="py-1">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className={cn(
                                "block px-4 py-2 text-sm transition-colors",
                                pathname === subItem.href
                                  ? "text-pet-purple-500 bg-purple-50"
                                  : "text-gray-700 hover:text-pet-purple-500 hover:bg-gray-50"
                              )}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "px-3 py-2 text-sm font-medium transition-colors rounded-md",
                      pathname === item.href
                        ? "text-pet-purple-500"
                        : "text-gray-700 hover:text-pet-purple-500 hover:bg-gray-50"
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="/partnerships">
              <Button className="bg-pet-purple-500 hover:bg-pet-purple-600 text-white">
                Become a Partner
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-1">
            {navigationItems.map((item) => (
              <div key={item.name}>
                {item.submenu ? (
                  <>
                    <button
                      onClick={() =>
                        setOpenSubmenu(
                          openSubmenu === item.name ? null : item.name
                        )
                      }
                      className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md"
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform",
                          openSubmenu === item.name && "transform rotate-180"
                        )}
                      />
                    </button>
                    {openSubmenu === item.name && (
                      <div className="pl-4 space-y-1">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-3 py-2 text-sm text-gray-600 hover:text-pet-purple-500 hover:bg-gray-50 rounded-md"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-pet-purple-500 hover:bg-gray-50 rounded-md"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4">
              <Link href="/partnerships" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full bg-pet-purple-500 hover:bg-pet-purple-600 text-white">
                  Become a Partner
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

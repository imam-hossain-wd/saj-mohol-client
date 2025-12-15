import Link from 'next/link'
import React from 'react'
import { Drawer } from '../Drawer/Drawer'
import { Menu } from 'lucide-react'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import { SiteConfig } from '@/config/siteconfig'

export default function NavMenuDrawer() {
    const pathname = usePathname();
    return (
        <div>

            <Drawer
                direction="left"
                side="left"
                icon={<Menu className="h-6 w-6 text-primary " />}
                className="md:hidden p-2"
            >
                <div className="p-6 h-full flex flex-col">
                    <div className="flex-1 space-y-1">
                        <h3 className="text-xl font-bold text-primary mb-6">Saj Mohol</h3>
                        {SiteConfig.navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    'block py-1 text-lg font-medium transition-colors hover:text-primary',
                                    pathname === item.href ? 'text-primary' : 'text-gray-700'
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    <div className="pb-6">
                        <h4 className="text-sm font-semibold text-gray-500 mb-3">Follow Us</h4>
                        <div className="flex items-center gap-4">
                            {SiteConfig.socialLinks.map((social, index) => {
                                const Icon = social.icon; // ✅ get the component
                                return (
                                    <Link
                                        key={index}
                                        href={social.href}
                                        className="text-gray-500 hover:text-primary transition-colors social-icon"
                                        aria-label={social.name}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Icon className="w-5 h-5" />
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                </div>
            </Drawer>
        </div>
    )
}

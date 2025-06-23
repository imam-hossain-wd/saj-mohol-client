import Link from 'next/link'
import React from 'react'
import { ReusableDrawer } from '../Drawer/Drawer'
import { Menu } from 'lucide-react'
import { navItems, socialIcons } from './Nav-icons-items'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

export default function NavDrawerTigger() {
    const pathname = usePathname();
    return (
        <div>

            <ReusableDrawer
                direction="left"
                side="left"
                icon={<Menu className="h-6 w-6 text-gray-700" />}
                className="md:hidden p-2"
            >
                <div className="p-6 h-full flex flex-col">
                    <div className="flex-1 space-y-1">
                        <h3 className="text-xl font-bold text-primary mb-6">Saj Mohol</h3>
                        {navItems.map((item) => (
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
                            {socialIcons.map((social, index) => (
                                <Link
                                    key={index}
                                    href={social.href}
                                    className="text-gray-500 hover:text-primary transition-colors social-icon"
                                    aria-label={social.icon.type.name}
                                >
                                    {social.icon}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </ReusableDrawer>
        </div>
    )
}

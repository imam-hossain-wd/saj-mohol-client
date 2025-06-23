import { Home, Search, ShoppingBag, User } from 'lucide-react'
import Link from 'next/link'


export default function BottomNavbar
    () {
    return (
        <div>
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 z-40 md:hidden shadow-lg">
                <div className="flex justify-around items-center h-16">
                    <Link href="/" className="flex flex-col items-center justify-center p-2 text-primary bottom-nav-item">
                        <Home className="h-6 w-6" />
                        <span className="text-xs mt-1">Home</span>
                    </Link>
                    <Link href="/shop" className="flex flex-col items-center justify-center p-2 text-gray-600 hover:text-primary bottom-nav-item">
                        <Search className="h-6 w-6" />
                        <span className="text-xs mt-1">Shop</span>
                    </Link>
                    <Link href="/cart" className="flex flex-col items-center justify-center p-2 text-gray-600 hover:text-primary relative bottom-nav-item">
                        <ShoppingBag className="h-6 w-6" />
                        <span className="absolute top-0 right-4 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                            0
                        </span>
                        <span className="text-xs mt-1">Cart</span>
                    </Link>
                    <Link href="/account" className="flex flex-col items-center justify-center p-2 text-gray-600 hover:text-primary bottom-nav-item">
                        <User className="h-6 w-6" />
                        <span className="text-xs mt-1">Account</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

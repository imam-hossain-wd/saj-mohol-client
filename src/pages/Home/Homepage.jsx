import { CategorySection } from '@/components/view/Home/CategorySection/CategorySection'
import HomeBanner from '@/components/view/Home/HomeBanner/HomeBanner'
import { PopularProducts } from '@/components/view/Home/PopularProducts/PopularProducts'
import SkinConcern from '@/components/view/SkinConcern/SkinConcern'
import { TrustSection } from '@/components/view/TrustSection/TrustSection'


export default function Homepage() {

    return (
        <>
            <HomeBanner />
            <TrustSection />
            <SkinConcern />
            <CategorySection />
            <PopularProducts />
        </>
    )
}

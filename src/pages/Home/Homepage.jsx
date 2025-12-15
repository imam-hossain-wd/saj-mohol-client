import { CategorySection } from '@/components/view/Home/CategorySection/CategorySection'
import HomeBanner from '@/components/view/Home/HomeBanner/HomeBanner'
import { PopularProducts } from '@/components/view/Home/PopularProducts/PopularProducts'


export default function Homepage() {

    return (
        <>
            <HomeBanner />
            <CategorySection />
            <PopularProducts />
        </>
    )
}

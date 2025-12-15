import ProductDetailsPage from '@/pages/Products/ProductDetailsPage'

export default async function ProductDetails({params}) {
    const { slug } = await params;

    console.log(slug, 'slug-------------1')
  return <ProductDetailsPage slug={slug} />
}

import SingleCategoryPage from "@/pages/Categories/SingleCategory";


export default async function SingleCategory({params}) {
    const { slug } = await params;
  return <SingleCategoryPage slug={slug} />
}

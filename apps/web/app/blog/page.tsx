// "use client";
// import Link from 'next/link'
// import Image from 'next/image'
// import { formatDistanceToNow } from 'date-fns'
// import { pl } from 'date-fns/locale'
// import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@repo/ui/components/ui/card"
// import blogPosts from '~/data/posts.json'

// export default function BlogListPage() {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100">
//       <div className="container mx-auto px-4 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {blogPosts.map((post) => (
//             <Link href={`/blog/${post.slug}`} key={post.id} className="block h-full">
//               <Card className="h-full flex flex-col transition-transform duration-300 hover:scale-105">
//                 <div className="relative w-full pt-[56.25%]">
//                   <Image
//                     src={post.coverImage}
//                     alt={post.title}
//                     layout="fill"
//                     objectFit="cover"
//                     className="rounded-t-lg"
//                   />
//                 </div>
//                 <CardHeader>
//                   <CardTitle className="text-xl text-purple-700">{post.title}</CardTitle>
//                 </CardHeader>
//                 <CardContent className="flex-grow">
//                   <p className="text-gray-600">{post.excerpt}</p>
//                 </CardContent>
//                 <CardFooter>
//                   <p className="text-sm text-gray-500">
//                     {formatDistanceToNow(post.date, { addSuffix: true, locale: pl })}
//                   </p>
//                 </CardFooter>
//               </Card>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }
export default function BlogListPage() {
  return (
    <h1></h1>
  )
}
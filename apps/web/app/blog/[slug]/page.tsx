// 'use client'

// import Image from 'next/image'
// import Link from 'next/link'
// import { useState, useEffect } from 'react'
// import { format } from 'date-fns'
// import { pl } from 'date-fns/locale'
// import ReactMarkdown from 'react-markdown'
// import remarkGfm from 'remark-gfm'
// import { ArrowLeft, Heart, Share2, Bookmark, MessageCircle, ThumbsUp } from 'lucide-react'
// import { motion } from 'framer-motion'
// import { Avatar, AvatarFallback, AvatarImage } from "@repo/ui/components/ui/avatar"
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@repo/ui/components/ui/tooltip"
// import { Button } from '@repo/ui/components/ui/button'
// import { RestrictedAccessModal } from '~/components/RestrictedAccessModal/RestrictedAccessModal'

// const blogPost = {
//   title: "5 Magicznych Sposobów na Niezapomnianą Pierwszą Randkę",
//   coverImage: "/blog/image1.png",
//   date: new Date('2023-06-15'),
//   author: {
//     name: "Anonim",
//     avatar: "/placeholder.svg?height=50&width=50&text=JN"
//   },
//   readTime: "5 min",
//   likes: 12,
//   content: `
// # 5 Magicznych Sposobów na Niezapomnianą Pierwszą Randkę

// Pierwsza randka to jak otwarcie nowej, fascynującej książki. Nie wiesz, co Cię czeka, ale czujesz ekscytację na myśl o nowych możliwościach. Oto kilka magicznych wskazówek, które sprawią, że Twoja pierwsza randka będzie niezapomniana:

// ## 1. Stwórz Atmosferę Przygody

// Zamiast tradycyjnej kawy, zaproponuj coś nietypowego. Co powiesz na piknik pod gwiazdami lub warsztaty gotowania sushi? Wspólne przeżywanie nowych doświadczeń tworzy silniejsze więzi.

// ## 2. Użyj Mocy Aktywnego Słuchania

// Słuchaj nie tylko uszami, ale całym sobą. Zadawaj pytania, które pokazują, że naprawdę interesujesz się tym, co mówi Twój partner. Pamiętaj, fascynacja drugim człowiekiem to najlepszy afrodyzjak!

// ## 3. Bądź Autentycznym Sobą

// Autentyczność to Twoja supermoc. Nie bój się pokazać swoich pasji, nawet jeśli wydają Ci się dziwne. Twoja unikalność jest tym, co czyni Cię wyjątkowym.

// ## 4. Stwórz Magiczny Moment

// Przygotuj mały, niespodziewany gest. Może to być zabawny magiczny trik lub ręcznie robiona origami róża. Takie drobnostki często zapadają w pamięć na długo.

// ## 5. Zakończ z Nutą Tajemnicy

// Nie przedłużaj pierwszego spotkania. Zakończ je w momencie, gdy jest najlepiej, zostawiając nutę tajemnicy i chęć na więcej. To jak dobry cliffhanger w serialu - sprawia, że nie możesz się doczekać kolejnego odcinka!

// Pamiętaj, że najważniejsze jest, abyś czuł się komfortowo i był sobą. Prawdziwa magia dzieje się wtedy, gdy dwoje autentycznych ludzi spotyka się i tworzy własną, unikalną historię. Powodzenia w tworzeniu Waszej magicznej opowieści!
//   `
// }

// const MarkdownComponents: React.ComponentProps<typeof ReactMarkdown>['components'] = {
//   h1: ({ children }) => <h1 className="text-3xl font-bold mt-8 mb-4 text-purple-800">{children}</h1>,
//   h2: ({ children }) => <h2 className="text-2xl font-semibold mt-6 mb-3 text-purple-700">{children}</h2>,
//   h3: ({ children }) => <h3 className="text-xl font-semibold mt-4 mb-2 text-purple-600">{children}</h3>,
//   p: ({ children }) => <p className="mb-4 text-gray-700">{children}</p>,
//   ul: ({ children }) => <ul className="list-disc list-inside mb-4 text-gray-700">{children}</ul>,
//   ol: ({ children }) => <ol className="list-decimal list-inside mb-4 text-gray-700">{children}</ol>,
//   li: ({ children }) => <li className="mb-2">{children}</li>,
//   a: ({ href, children }) => <a href={href} className="text-purple-600 hover:text-purple-800 underline">{children}</a>,
//   blockquote: ({ children }) => <blockquote className="border-l-4 border-purple-500 pl-4 italic my-4 text-gray-600">{children}</blockquote>,
//   code: ({ className, children }) => {
//     const match = /language-(\w+)/.exec(className || '')
//     return match ? (
//       <pre className="bg-gray-100 rounded p-4 overflow-x-auto">
//         <code className={`language-${match[1]} text-sm font-mono`}>{children}</code>
//       </pre>
//     ) : (
//       <code className="bg-gray-100 rounded px-1 py-0.5 text-sm font-mono">{children}</code>
//     )
//   },
// }

// export default function BlogPostPage() {
//   const [isBookmarked, setIsBookmarked] = useState(false)
//   const [showShareTooltip, setShowShareTooltip] = useState(false)
//   const [isModalOpen, setModalOpen] = useState(false)

//   useEffect(() => {
//     const timer = setTimeout(() => setShowShareTooltip(false), 2000)
//     return () => clearTimeout(timer)
//   }, [showShareTooltip])

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100">
//       <div className="container mx-auto px-4 py-16">
//         <Link href="/blog" className="inline-flex items-center text-purple-700 hover:text-purple-900 mb-8">
//           <ArrowLeft className="mr-2" />
//           Powrót do listy artykułów
//         </Link>
//         <article className="bg-white rounded-lg shadow-lg overflow-hidden">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <div className="relative h-96">
//               <Image
//                 src={blogPost.coverImage}
//                 alt={blogPost.title}
//                 layout="fill"
//                 objectFit="cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
//               <div className="absolute bottom-0 left-0 right-0 p-8">
//                 <h1 className="text-4xl font-bold mb-4 text-white">{blogPost.title}</h1>
//                 <div className="flex items-center text-white">
//                   <Avatar className="mr-2">
//                     <AvatarImage src={blogPost.author.avatar} alt={blogPost.author.name} />
//                     <AvatarFallback className='text-black'>{blogPost.author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
//                   </Avatar>
//                   <span>{blogPost.author.name}</span>
//                   <span className="mx-2">•</span>
//                   <span>{format(blogPost.date, 'd MMMM yyyy', { locale: pl })}</span>
//                   <span className="mx-2">•</span>
//                   <span>{blogPost.readTime} czytania</span>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//           <div className="p-8">
//             <ReactMarkdown 
//               remarkPlugins={[remarkGfm]} 
//               components={MarkdownComponents}
//             >
//               {blogPost.content}
//             </ReactMarkdown>
//           </div>
//         </article>
//         <div className="mt-8 flex justify-between items-center">
//           <div className="flex space-x-4">
//             <Button variant="outline" className="text-black" onClick={() => setModalOpen(true)}>
//               <Heart className={`mr-2 h-4 w-4 ${blogPost.likes > 0 ? 'fill-current text-red-500' : ''}`} />
//               {blogPost.likes} Polubień
//             </Button>
//             <TooltipProvider>
//               <Tooltip open={showShareTooltip}>
//                 <TooltipTrigger asChild>
//                   <Button variant="outline" className="text-black" onClick={() => {
//                     navigator.clipboard.writeText(window.location.href)
//                     setShowShareTooltip(true)
//                   }}>
//                     <Share2 className="mr-2 h-4 w-4" />
//                     Udostępnij
//                   </Button>
//                 </TooltipTrigger>
//                 <TooltipContent>
//                   <p>Link skopiowany!</p>
//                 </TooltipContent>
//               </Tooltip>
//             </TooltipProvider>
//           </div>
//           <Button variant="outline" className="text-black" onClick={() => setIsBookmarked(!isBookmarked)}>
//             <Bookmark className={`mr-2 h-4 w-4 ${isBookmarked ? 'fill-current text-purple-500' : ''}`} />
//             {isBookmarked ? 'Zapisano' : 'Zapisz'}
//           </Button>
//           </div>
//       </div>
//       <RestrictedAccessModal
//                 isOpen={isModalOpen}
//                 onClose={() => setModalOpen(false)}
//             />
//     </div>
//   )
// }
// 'use client';
// import useSWR from 'swr';
// import { fetcher } from '@/common/fetcher';
// import Image from 'next/image';
// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';
// import Link from 'next/link';
// import { Button } from '@/components/ui/button';
// import { RouteEnum } from '@/constants/RouteConstants';
// import { ChevronLeft } from 'lucide-react';
// import { useRouter } from 'next/navigation';
// import {
//   AlertDialog,
//   AlertDialogAction,
//   AlertDialogCancel,
//   AlertDialogContent,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogTitle,
//   AlertDialogTrigger,
// } from '@/components/ui/alert-dialog';
// import { ToastAction } from '@/components/ui/toast';
// import { useToast } from '@/components/ui/use-toast';

// export default function BlogAdminDetail({ params }: Params) {
//   const router = useRouter();
//   const { toast } = useToast();
//   const { id } = params;
//   const { data, isLoading } = useSWR(`/api/blogs/${id}`, fetcher);

//   const deleteBlogHandler = async () => {
//     try {
//       await fetch(`/api/blogs/${data?._id}`, {
//         method: 'DELETE',
//       });
//       toast({
//         variant: 'destructive',
//         title: `${data?.title} deleted`,
//         //  description: 'There was a problem with your request.',
//       });
//       router.push(RouteEnum.ADMIN_BLOGS);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <>
//       <div className='flex justify-between p-5'>
//         <Button variant='outline' size='icon'>
//           <Link href={RouteEnum.ADMIN_BLOGS}>
//             <ChevronLeft className='h-4 w-4' />
//           </Link>
//         </Button>

//         <div className='flex gap-3'>
//           <AlertDialog>
//             <AlertDialogTrigger asChild>
//               <Button variant='destructive'>Delete</Button>
//             </AlertDialogTrigger>
//             <AlertDialogContent>
//               <AlertDialogHeader>
//                 <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
//                 <AlertDialogDescription>
//                   This action cannot be undone. This will permanently delete
//                   this blog.
//                 </AlertDialogDescription>
//               </AlertDialogHeader>
//               <AlertDialogFooter>
//                 <AlertDialogCancel>Cancel</AlertDialogCancel>
//                 <AlertDialogAction
//                   className='bg-red-600 hover:bg-red-200'
//                   onClick={deleteBlogHandler}
//                 >
//                   Continue
//                 </AlertDialogAction>
//               </AlertDialogFooter>
//             </AlertDialogContent>
//           </AlertDialog>

//           <Button>Edit Blog</Button>
//         </div>
//       </div>

//       <div className='w-full p-5 my-10 flex md:flex-row flex-col justify-between md:items-start items-center mt-12  md:m-auto'>
//         {isLoading ? (
//           <Skeleton width={500} height={300} highlightColor='gray' inline />
//         ) : (
//           <div className='flex flex-col justify-center w-1/2'>
//             <Image
//               src={data?.coverImage}
//               width={500}
//               height={600}
//               alt='blog image'
//               className='rounded'
//             />
//           </div>
//         )}

//         <div className='w-full space-y-3 md:ml-4 md:w-1/2'>
//           {isLoading ? (
//             <Skeleton height={10} width={24} highlightColor='gray' />
//           ) : (
//             <h1 className='p-2 text-4xl text-center capitalize'>
//               {data?.title}
//             </h1>
//           )}
//           {isLoading ? (
//             <Skeleton height={10} highlightColor='gray' />
//           ) : (
//             <h2>{data?.content}</h2>
//           )}
//           {isLoading ? (
//             <Skeleton height={10} highlightColor='gray' />
//           ) : (
//             <h6>{data?.category}</h6>
//           )}
//           <div className='w-full flex items-center justify-between border-t-4 p-2'>
//             <p className='italic'>Date of Post</p>
//             <h2>{data?.createdAt.slice(0, 10)}</h2>
//             <span className='gap-2 flex'>
//               <p className='italic'>by</p>
//               {data?.name}
//             </span>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

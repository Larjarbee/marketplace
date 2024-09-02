import { RouteEnum } from '@/constants/RouteConstants';
import Link from 'next/link';

function BlogListAction({ data }: any) {
  return (
    <Link
      href={`${RouteEnum.ADMIN_BLOGS}/${data?._id}`}
      className='flex items-center gap-1'
    >
      View Details
    </Link>
  );
}

export default BlogListAction;

'use client'
import { usePathname, useRouter } from 'next/navigation';
import { FC } from 'react';

interface Breadcrumb {
  label?: string;
  href: string;
}

interface BreadcrumbProps {
  customBreadcrumbs?: Breadcrumb[]
}

const Breadcrumb: FC<BreadcrumbProps> = ({ customBreadcrumbs }) => {
  const router = useRouter();
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter(Boolean); // Split pathname into segments

  let breadcrumbs: Breadcrumb[] 
  // Define known segments with custom hrefs
  if (customBreadcrumbs && customBreadcrumbs.length > 0) {
    breadcrumbs = customBreadcrumbs; // Use custom breadcrumbs if provided
    breadcrumbs.unshift({ label: 'главная', href: '/' });
  } else {
    // Define known segments with custom hrefs
    const knownSegments: Breadcrumb[] = [
      {
        label: "уход для лица",
        href: "skincare"
      },
      {
        label: "очищение и демакияж",
        href: "cleansing-and-makeup-removal"
      },
      {
        label: "каталог",
        href: "catalog"
      }
    ];

    // Generate breadcrumbs from path segments
    breadcrumbs = knownSegments.filter(segment => pathSegments.includes(segment.href));
    breadcrumbs.unshift({ label: 'главная', href: '/' });
  }


  return (
    <div>
      {breadcrumbs.map((breadcrumb, index) => (
        <span key={index}>
            <a className='font-sans cursor-pointer primary-hover text-18px' onClick={() => router.push(`/${breadcrumb.href}`)}>{breadcrumb.label}</a>
            <span className='mx-1'> 
              {index < breadcrumbs.length - 1 && ' / '}
            </span>
        </span>
      ))}
    </div>
  );
};

export default Breadcrumb;

'use client'
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

interface Breadcrumb {
  label: string;
  href: string;
}

const Breadcrumb = () => {
  const router = useRouter();
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter(Boolean); // Split pathname into segments

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
  const breadcrumbs: Breadcrumb[] = pathSegments.map(segment => {
    const knownSegment = knownSegments.find(item => item.href === segment);
    if (knownSegment) {
      return knownSegment;
    } else {
      return { label: segment, href: '' }; // If segment not found in knownSegments, use segment as label
    }
  })

  breadcrumbs.unshift({ label: 'главная', href: '/' });

  useEffect(() => {
    console.log(pathSegments)
  }, [breadcrumbs]);

  return (
    <div>
      {breadcrumbs.map((breadcrumb, index) => (
        <span key={breadcrumb.href}>
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

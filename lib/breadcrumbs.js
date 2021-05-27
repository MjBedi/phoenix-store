import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styled from 'styled-components';

// ------------------STYLED COMPONENTS------------------

const OrderedListStyles = styled.ol`

  li a::after {
    content: '\203A';
    color: #b080ff;
    font-size: clamp(2rem, 3vw, 3rem);
    position: relative;
    top: 2px;
    left: 4px;
    height: fit-content;
    user-select: none;
  }

  li:nth-last-child(1) a::after {
    opacity: 0;
  }
`;

const BreadcrumbStyles = styled.div`
  nav > ol {
    display: flex;
    margin: 2rem 0;
    font-family: monospace;
    font-size: clamp(1.4rem, 1.8vw, 1.8rem);
    list-style: none;
    padding: 0;
    text-transform: uppercase;

    & > li {
      margin-right: 1rem;
      transition: all 0.3s ease-in-out;

      &:hover {
        font-weight: 600;
      }

      a {
        text-decoration: none;
      }
    }

    li:nth-last-child(1) a::after {
      opacity: 0;
    }
  }
`;

// ----Regexing----

const convertBreadcrumb = (string) =>
  string
    .replace(/-/g, ' ')
    .replace(/oe/g, 'ö')
    .replace(/ae/g, 'ä')
    .replace(/ue/g, 'ü')
    .replace(/\?.*/, '')
    .toUpperCase();

// ------------------Breadcrumbs COMPONENT------------------

export const Breadcrumbs = () => {
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState(null);

  useEffect(() => {
    if (router) {
      const linkPath = router.asPath.split('/');
      linkPath.shift();

      const pathArray = linkPath.map((path, i) => ({
        breadcrumb: path,
        href: `/${linkPath.slice(0, i + 1).join('/')}`,
      }));

      setBreadcrumbs(pathArray);
    }
  }, [router]);

  if (!breadcrumbs) {
    return null;
  }

  return (
    <>
      <BreadcrumbStyles>
        <nav>
          <ol>
            <li>
              <a href="/">HOME</a>
            </li>
            {breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.href}>
                <Link href={breadcrumb.href} passHref>
                  <a>{convertBreadcrumb(breadcrumb.breadcrumb)}</a>
                </Link>
              </li>
            ))}
          </ol>
        </nav>
      </BreadcrumbStyles>
    </>
  );
};
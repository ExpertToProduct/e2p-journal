import React from 'react';
import OriginalBlogPostItem from '@theme-original/BlogPostItem';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';
import Subscribe from '@site/src/components/Subscribe/Subscribe';

/**
 * Wrapper BlogPostItem
 *
 * Étend le composant Docusaurus original en ajoutant un formulaire
 * d'inscription Buttondown (Subscribe) en bas de chaque article complet.
 *
 * Le composant Subscribe n'est PAS affiché dans la liste des articles
 * (preview), uniquement dans la vue article complète (isBlogPostPage).
 */
export default function BlogPostItemWrapper(props) {
  const {isBlogPostPage} = useBlogPost();

  return (
    <>
      <OriginalBlogPostItem {...props} />
      {isBlogPostPage && (
        <Subscribe
          variant="inline"
          title="Vous avez aimé cet article ?"
          description="Recevez le journal chaque semaine. Une newsletter, une seule, sans spam."
        />
      )}
    </>
  );
}

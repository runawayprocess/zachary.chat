// Map URLs to preview images
// Add entries here for links that should show hover previews

export interface PreviewData {
  image: string;
  alt: string;
}

export const linkPreviews: Record<string, PreviewData> = {
  // Example entries - customize these with your actual links and preview images
  // 'https://example-project.com': {
  //   image: '/images/previews/project-1.jpg',
  //   alt: 'Screenshot of Example Project',
  // },
  // 'https://my-blog.com': {
  //   image: '/images/previews/blog.jpg',
  //   alt: 'Blog homepage screenshot',
  // },
};

export function getPreviewForUrl(url: string): PreviewData | null {
  return linkPreviews[url] || null;
}

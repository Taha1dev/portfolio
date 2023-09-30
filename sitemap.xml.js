import { SitemapStream, streamToPromise } from 'sitemap';
import { createGzip } from 'zlib';
import { Readable } from 'stream';
import { promisify } from 'util';
import fs from 'fs';

const sitemap = async (req, res) => {
  try {
    // Generate the sitemap using the SitemapStream
    const smStream = new SitemapStream({
      hostname: 'http://localhost:3000', // Replace with your website's URL
    });

    const pipeline = smStream.pipe(createGzip());

    // Add URLs to the sitemap
    smStream.write({ url: '/page1', changefreq: 'daily', priority: 0.7 });
    smStream.write({ url: '/page2', changefreq: 'weekly', priority: 0.5 });
    // Add more URLs as needed

    smStream.end();

    // Stream the sitemap to a file
    const streamToPromise = promisify(streamToPromise);
    const data = await streamToPromise(pipeline);

    res.setHeader('Content-Encoding', 'gzip');
    res.setHeader('Content-Type', 'application/xml');
    res.setHeader('Content-Length', data.length.toString());
    res.setHeader('Cache-Control', 'public, max-age=86400'); // 24 hours

    // Write the sitemap to a file (optional)
    fs.writeFileSync('./public/sitemap.xml.gz', data);

    // Send the sitemap as the response
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).end();
  }
};
export default sitemap;

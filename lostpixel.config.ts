import { CustomProjectConfig } from 'lost-pixel';

export const config: CustomProjectConfig = {
  pageShots: {
    pages: [{ path: '/', name: 'home' }],
    baseUrl: 'http://172.17.0.1:3000',
  },
  lostPixelProjectId: 'cluifcmts01bbkg0e08pepl32',
  apiKey: process.env.LOST_PIXEL_API_KEY,
};

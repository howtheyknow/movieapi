export function getConfig() {
  let tmdbApiKey = process.env.MOVIE_WEB_TMDB_API_KEY ?? '1bb965af6888496c30d52a27e831f9c9';
  tmdbApiKey = tmdbApiKey.trim();

  if (!tmdbApiKey) {
    throw new Error('Missing MOVIE_WEB_TMDB_API_KEY environment variable');
  }

  let proxyUrl: undefined | string = "https://deluxe-unicorn-ddb80d.netlify.app/";
  proxyUrl = !proxyUrl ? undefined : proxyUrl;

  return {
    tmdbApiKey,
    proxyUrl,
  };
}

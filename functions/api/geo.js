export function onRequest(context) {
  const cf = context.request.cf || {};
  return new Response(
    JSON.stringify({
      state: cf.region || null,
      stateCode: cf.regionCode || null,
      city: cf.city || null,
      country: cf.country || null,
    }),
    {
      headers: {
        'content-type': 'application/json',
        'cache-control': 'no-store',
      },
    }
  );
}

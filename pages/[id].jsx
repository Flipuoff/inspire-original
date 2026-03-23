export async function getStaticPaths() {
  const headers = { Authorization: `Bearer ${process.env.PRINTIFUL_KEY}` };
  const res = await fetch("https://api.printful.com/store/products", {
    headers,
  });

  const items = await res.json();

  // Ensure result is always an array
  const results = Array.isArray(items?.result) ? items.result : [];

  const paths = results.map((item) => ({
    params: {
      id: item.id.toString(),
    },
  }));

  return { paths, fallback: false };
}
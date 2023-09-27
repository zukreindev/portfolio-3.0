export default cachedEventHandler(
  async () => {
    const data = (await fetch(
      `https://api.github.com/users/${process.env.GITHUB_USERNAME}/repos`,
      {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_API_KEY}`,
        },
      }
    ).then((res) => res.json())) as Record<string, any>[];

    return data
      .filter((repo) => !repo.fork)
      .sort((a: any, b: any) => {
        return Date.parse(b.created_at) - Date.parse(a.created_at);
      });
  },
  {
    swr: true,
    maxAge: 60 * 60 * 6,
  }
);

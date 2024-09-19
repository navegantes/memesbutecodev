export async function getLinks(url) {
  const resp = await fetch(url, {
    mode: "no-cors",
  });

  const data = await resp.text();

  const matches = Array.from(data.matchAll('(?:href=")([^"]+)(?:")')).map((item) => {
    return item[1];
  });

  const imgs = matches.filter(
    (item) =>
      item.endsWith(".png") ||
      item.endsWith(".jpg") ||
      item.endsWith(".jpeg") ||
      item.endsWith(".gif")
  );

  const audios = matches.filter(
    (item) => item.endsWith(".mp3") || item.endsWith(".wav")
  );

  const videos = matches.filter((item) => item.endsWith(".mp4"));

  const docs = matches.filter((item) => item.endsWith(".pdf"));

  return {
    images: imgs,
    audios: audios,
    videos: videos,
    docs: docs,
  };
}

export async function getGithubUsers(users) {
  const baseUrl = "https://api.github.com/users";
  const list = [];
  const API_TOKEN = `${process.env.GITHUB_API_TOKEN}`;

  const resp = await Promise.all(
    await users.map(
      async (user) =>
        await fetch(`${baseUrl}/${user}`, {
          headers: {
            Authorization: `Bearer ${API_TOKEN}`,
          },
          method: "GET",
          mode: "no-cors",
        })
    )
  );

  const data = await Promise.all(resp.map((response) => response.json()));

  return Promise.all(
    data.map((data) => {
      return {
        login: data.login,
        avatar_url: data.avatar_url,
        id: data.id,
        bio: data.bio,
        name: data.name,
        location: data.location,
      };
    })
  );
}

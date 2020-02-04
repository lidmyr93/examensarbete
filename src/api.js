import { createClient } from "contentful";

var client = createClient({
  space: `hxzrkpn9wcyv`,
  accessToken: `UQrJ4wUkO0_luUL5ibOMFQRkP0GNVXtkUgkJH4Ki2no`
});

export async function fetchPosts() {
  const data = await client.getEntries({});
  const posts = [];
  data.items.map((item, i) =>
    posts.push({
      description: item.fields.photoDescription,
      imgUrl: data.includes.Asset[i].fields.file.url,
      imgTitle: data.includes.Asset[i].fields.title
    })
  );

  return posts;
}

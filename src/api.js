import { createClient } from "contentful";

var client = createClient({
  space: `hxzrkpn9wcyv`,
  accessToken: `UQrJ4wUkO0_luUL5ibOMFQRkP0GNVXtkUgkJH4Ki2no`
});

export async function fetchPosts() {
  const data = await client.getEntries();
  const posts = [];
  data.items.map((item, i) => {
    posts.push({
      description: item.fields.photoDescription,
      imgUrl: `https://${item.fields.photo.fields.file.url}`,
      imgTitle: item.fields.photo.fields.title
    });
  });

  return posts;
}

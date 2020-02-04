const API_URL = `https://cdn.contentful.com `;

const SPACE_ID = `hxzrkpn9wcyv`;

const ACCESS_TOKEN = "UQrJ4wUkO0_luUL5ibOMFQRkP0GNVXtkUgkJH4Ki2no";

export const test = async () => {
  const data = await fetch(
    `${API_URL}/${SPACE_ID}/entries?access_token=${ACCESS_TOKEN}`
  );
  console.log(data);
};

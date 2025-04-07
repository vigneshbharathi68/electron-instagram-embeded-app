const axios = window.require("axios");

// renderer.js
const accessToken = await window.electron.ipcRenderer.invoke('get-access-token');
console.log(accessToken)


async function scrapeInstagram(username) {
  const url = `https://graph.instagram.com/me`;

  try {
    const res = await axios.get(url, {
      params: {
        fields: 'id,username,account_type,media_count',
        access_token: accessToken
      },
    });

    const user = res.data;
    

    // console.log("🔍 Username:", user.username);
    // console.log("📷 Full Name:", user.full_name);
    // console.log("📝 Bio:", user.biography);
    // console.log("🌍 Website:", user.external_url);
    // console.log("📸 Total Posts:", user.edge_owner_to_timeline_media.count);
    // console.log("👥 Followers:", user.edge_followed_by.count);
    // console.log("👤 Following:", user.edge_follow.count);

    // Posts preview
    // const posts = user.edge_owner_to_timeline_media.edges.map((edge) => ({
    //   id: edge.node.id,
    //   image: edge.node.display_url,
    //   caption:
    //     edge.node.edge_media_to_caption.edges[0]?.node.text || "No caption",
    //   likes: edge.node.edge_liked_by.count,
    // }));

    console.log("🧾 Users:", user);
  } catch (error) {
    console.error("❌ Error scraping:", error.message);
  }
}

module.exports = scrapeInstagram;

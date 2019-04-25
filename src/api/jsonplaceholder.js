import { getRandomDays, getRandomRide } from "../utils/utils";
export async function getAllData() {
  return Promise.all([
    fetch("https://jsonplaceholder.typicode.com/users"),
    fetch("https://jsonplaceholder.typicode.com/albums"),
    fetch("https://jsonplaceholder.typicode.com/photos"),
    fetch("https://jsonplaceholder.typicode.com/posts")
  ])
    .then(values => organizeValues(values).then())
    .then(objs => formatData(objs))
    .catch(e => alert(`Error: ` + e));
}

const organizeValues = async values => {
  const users = await values[0].json();
  const albums = await values[1].json();
  const photos = await values[2].json();
  const posts = await values[3].json();

  return { users, albums, photos, posts };
};

const formatData = data => {
  return data.users.map(user => {
    const allPosts = data.posts.filter(posts => posts.userId === user.id);
    const allAlbums = data.albums.filter(album => album.userId === user.id);

    let allPhotos = 0;
    allAlbums.forEach(album => {
      allPhotos += data.photos.filter(photo => photo.albumId === album.id)
        .length;
    });

    let userObj = {
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email,
      city: user.address.city,
      posts: allPosts.length,
      albums: allAlbums.length,
      days: getRandomDays(),
      ride: getRandomRide(),
      photos: allPhotos
    };
    return userObj;
  });
};

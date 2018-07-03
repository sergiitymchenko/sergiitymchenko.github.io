'use strict';
const posts = [
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 1",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-1.com'
  },
  {
    img: "https://placeimg.com/400/150/nature",
    title: "Post title 2",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-2.com'
  },
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 3",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-3.com'
  }
];




const root = document.querySelector('.root');
const elements = createCard(posts);

root.append(...elements);


function createPostCard({img, title, text, link}) {
  const post = document.createElement('div');
  post.classList.add('post');

  const image = document.createElement('img');
  image.classList.add('post__image');
  image.setAttribute('src', img);

  const mainTitle = document.createElement('h2');
  mainTitle.classList.add('post__title');
  mainTitle.textContent = title;

  const paragraf = document.createElement('p');
  paragraf.classList.add('post__text');
  paragraf.textContent = text;

  const btn = document.createElement('a');
  btn.classList.add('button');
  btn.setAttribute('href', '#');
  btn.textContent = link;

  post.append(image, mainTitle, paragraf, btn);
  
  return post;
};

function createCard(posts) {
  return posts.reduce(
    (acc, val) => acc.concat( createPostCard(val) ),
    [],
  );

  // const elements = [];
  // posts.forEach( post => {
  //   const elem = createPostCard(post);
  //   elements.push(elem);
  // });
  // return elements;
};
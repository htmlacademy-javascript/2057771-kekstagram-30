/* const = {
  id: ,
  url: ,
  description: ,
  likes: ,
  comments: {
    commentId: ,
    avatar: '',
    message: '',
    name: '',
  } вот, как должен выглядеть сгенерированный объект. всего их должно быть 25
  Каждый объект массива — описание фотографии, опубликованной пользователем?
} */

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

function getRandomSentences(text, numSentences) {
  const sentences = text.split(/[\.\?!]/);
  sentences = sentences.filter(function(sentence) {
    return sentence.trim() !== '';
  });
  const randomSentences = [];
  for (const i = 0; i < numSentences; i++) {
    const randomIndex = Math.floor(Math.random() * sentences.length);
    randomSentences.push(sentences[randomIndex]);
  }
  return randomSentences;
}

const text = 'Всё отлично! В целом всё неплохо. Но не всё. Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально. Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше. Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше. Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'

const createPost = () => {
  const randomUserId = getRandomInteger(1, 25); // Это число от 1 до 25. Идентификаторы не должны повторяться.
  const randomUrl = 'photos/' + getRandomInteger(1, 25) + '.jpg';
  //url, строка — адрес картинки вида photos/{{i}}.jpg, где {{i}} — это число от 1 до 25. Адреса картинок не должны повторяться.
  const description = 'Тут может быть просто повторяющийся текст?';
  const randomLikes = getRandomInteger(1, 25);
  //вряд ли это должно быть тут const comments = [commentId, avatar, message, name];
  const randomCommentId = getRandomInteger(1, ?); //ЛЮБОЕ число
  const randomAvatar = 'img/avatar-' + getRandomInteger(1, 6) + '.svg';
  const randomMessage = getRandomSentences(text, 2);
  const randomName = getRandomInteger(0, NAMES.length - 1);

  return {
    userId: ;
    url: ;
    description: ;
    randomLikes: ;
    randomCommentId: ;
    randomAvatar: ;
    randomMessage: ;
    randomName: ;
  }
}

console.log(
  createPost()
);


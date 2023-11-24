const DESCRIPTIONS = [
  'Пляж',
  'Указатель',
  'Море',
  'Девушка',
  'Хехе',
  'Машина',
  'Клубничка',
  'Морс',
  'Пока-пока!',
  'Полочка на колёсиках',
  'Чистый песок',
  'Белая ауди',
  'Закуска с рыбой',
  'Не предлагайте мне суши, если они не похожи на это!',
  'Воу',
  'Путь',
  'Концерт хора',
  'Carry on my wayword soon',
  'Ночь',
  'пальмы!',
  'Боул',
  'Закат',
  'Краб',
  'Эминем?',
  'Опасная ситуация',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Елизавета',
  'Михаил',
  'Жанна',
  'Артём',
  'Настя',
  'Тимофей',
  'Соня',
  'Юра',
  'София',
  'Яна',
  'Василиса',
  'Света',
  'Таисия',
  'Андрей',
  'Полина',
  'Августин',
  'Бенисио дель Торо',
  'Дин Винчестер',
  'Мэттью Беллами',
  'Тося Чайкина',
  'Jay-Jay Johanson',
  'Рената Литвинова',
  'Ксения',
  'Нино',
  'Али',
];

const POSTS_COUNT = 25;

//функция по получению случайного числа из диапазона
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};
//функция, которая создаёт нужный объект
const createPost = () => ({
  const randomUserId = getRandomInteger(1, 25);//не должны повторяться
  const randomUrl = getRandomInteger(1, 25);//не должны повторяться
  const randomDescriptionIndex = getRandomInteger(0, DESCRIPTIONS.length - 1);
  const randomLikes = getRandomInteger(15, 200);
  const randomCommentId = getRandomInteger(0, 30);//не должны повторяться + как это число соотносится с тем, сколько комментарие действительно будет под постом?
  const randomAvatar = getRandomInteger(1, 6);
  const randomMessageIndex = getRandomInteger(0, MESSAGES.length - 1);//одно или ДВА предложения?
  const randomNameIndex = getRandomInteger(0, NAMES.length - 1);

  return {
    userId: randomUserId;
    url: 'photos/' + randomUrl + '.jpg';
    description: DESCRIPTIONS[randomDescriptionIndex];
    likes: randomLikes;
    сommentId: randomCommentId;
    avatar: 'img/avatar-' + randomAvatar + '.svg';
    message: MESSAGES[randomMessageIndex];
    name: NAMES[randomNameIndex];
  }
});

console.log(
  createPost()
);

const posts = Array.from({length: POSTS_COUNT}, createPost);

console.log(posts);


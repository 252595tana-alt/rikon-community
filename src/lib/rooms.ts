export type RoomCategory = "life" | "work" | "family" | "experience" | "listen";

export type Room = {
  slug: string;
  title: string;
  shortTitle: string;
  categories: RoomCategory[];
  region: "national" | "tokushima-prefecture" | "tokushima-city";
  regionLabel: "全国" | "徳島県" | "徳島市";
  description: string;
  question: string;
  tags: string[];
  members: number;
  postsToday: number;
  accent: string;
  icon: "wallet" | "briefcase" | "mother" | "father" | "compass" | "heart" | "map" | "pin";
  badge?: string;
};

export const rooms: Room[] = [
  {
    slug: "money-life",
    title: "お金と生活の部屋",
    shortTitle: "お金と生活",
    categories: ["life"],
    region: "national",
    regionLabel: "全国",
    description: "住まい、生活費、養育費、使える制度。暮らしの不安をひとつずつ整理する部屋です。",
    question: "別居後の生活費、みんなどう整理した？",
    tags: ["生活費", "住まい", "養育費"],
    members: 1248,
    postsToday: 18,
    accent: "sage",
    icon: "wallet",
    badge: "よく読まれています",
  },
  {
    slug: "work-career",
    title: "仕事・転職の部屋",
    shortTitle: "仕事・転職",
    categories: ["work"],
    region: "national",
    regionLabel: "全国",
    description: "働き方、再就職、キャリアと子育ての両立。これからの収入を考える部屋です。",
    question: "ブランクからの再就職で役立ったことは？",
    tags: ["再就職", "働き方", "資格"],
    members: 684,
    postsToday: 9,
    accent: "blue",
    icon: "briefcase",
  },
  {
    slug: "single-mother",
    title: "シングルマザーの部屋",
    shortTitle: "シングルマザー",
    categories: ["family"],
    region: "national",
    regionLabel: "全国",
    description: "子育て、仕事、元パートナーとの関わり。日々の工夫や本音を共有できます。",
    question: "子どもへの伝え方で大切にしたこと",
    tags: ["子育て", "両立", "面会交流"],
    members: 2176,
    postsToday: 31,
    accent: "coral",
    icon: "mother",
    badge: "新しい投稿",
  },
  {
    slug: "single-father",
    title: "シングルファザーの部屋",
    shortTitle: "シングルファザー",
    categories: ["family"],
    region: "national",
    regionLabel: "全国",
    description: "父子家庭ならではの困りごとや、周囲に話しにくい気持ちを分かち合う部屋です。",
    question: "仕事と保育園の送迎、どう両立してる？",
    tags: ["父子家庭", "家事", "両立"],
    members: 436,
    postsToday: 6,
    accent: "amber",
    icon: "father",
  },
  {
    slug: "ask-experienced",
    title: "経験者に聞く部屋",
    shortTitle: "経験者に聞く",
    categories: ["experience"],
    region: "national",
    regionLabel: "全国",
    description: "離婚を経験した人に、当時知りたかったことや、その後の変化を聞ける部屋です。",
    question: "決める前にやっておいてよかったこと",
    tags: ["体験談", "準備", "離婚後"],
    members: 1932,
    postsToday: 24,
    accent: "violet",
    icon: "compass",
    badge: "回答が集まっています",
  },
  {
    slug: "listen-to-me",
    title: "ちょっと聞いてほしい部屋",
    shortTitle: "聞いてほしい",
    categories: ["listen"],
    region: "national",
    regionLabel: "全国",
    description: "結論が出ていなくても大丈夫。今日感じたことを、安心して置いていける部屋です。",
    question: "今日は少しだけ、話を聞いてほしい",
    tags: ["気持ち", "ひと休み", "雑談"],
    members: 3041,
    postsToday: 47,
    accent: "mint",
    icon: "heart",
    badge: "いま会話中",
  },
  {
    slug: "tokushima-prefecture",
    title: "徳島県の部屋",
    shortTitle: "徳島県",
    categories: ["life", "work", "family", "experience", "listen"],
    region: "tokushima-prefecture",
    regionLabel: "徳島県",
    description: "徳島県内の制度、仕事、子育て、暮らしの地域情報を安心して共有できる部屋です。",
    question: "徳島県で使ってよかった支援や相談先は？",
    tags: ["徳島県", "地域情報", "支援制度"],
    members: 128,
    postsToday: 5,
    accent: "blue",
    icon: "map",
    badge: "先行エリア",
  },
  {
    slug: "tokushima-city",
    title: "徳島市の部屋",
    shortTitle: "徳島市",
    categories: ["life", "work", "family", "experience", "listen"],
    region: "tokushima-city",
    regionLabel: "徳島市",
    description: "徳島市の手続き、住まい、学校、身近な相談先について地域の経験を分かち合う部屋です。",
    question: "徳島市で相談しやすかった窓口を教えてください",
    tags: ["徳島市", "手続き", "相談窓口"],
    members: 76,
    postsToday: 3,
    accent: "sage",
    icon: "pin",
    badge: "地域の部屋",
  },
];

export const getRoom = (slug: string) => rooms.find((room) => room.slug === slug);

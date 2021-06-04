import connectDB from './config/db.js'
import dotenv from 'dotenv'
import Product from './models/productModel.js'

dotenv.config()

connectDB()

const SHOP_DATA = [
  {
    id: 1,
    category: 'women',
    name: 'Nike Zoom Pegasus Turbo 2',
    description: 'The Nike Zoom Pegasus Turbo 2 is updated with a feather-light upper, while innovative foam brings revolutionary responsiveness to your long-distance training.',
    imageUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/wvmovmshpndwztxisa32/zoom-pegasus-turbo-2-running-shoe-PDDCHc.jpg',
    images: [
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/xuzpd3x2qjs2qwgjw5sr/zoom-pegasus-turbo-2-running-shoe-PDDCHc.jpg',
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/ntrzwn9r3cy5bbzxifyu/zoom-pegasus-turbo-2-running-shoe-PDDCHc.jpg',
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/qlbuv1ccjowkgy7vxa0v/zoom-pegasus-turbo-2-running-shoe-PDDCHc.jpg',
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/onhv9nnkozmeo78elodi/zoom-pegasus-turbo-2-running-shoe-PDDCHc.jpg',
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/xjz2qtigh3pcgwnmuzpb/zoom-pegasus-turbo-2-running-shoe-PDDCHc.jpg',
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/vllj9co6mj865salg9zy/zoom-pegasus-turbo-2-running-shoe-PDDCHc.jpg'
    ],
    price: 235,
    stock: Math.ceil(Math.random(1, 99)*100)
  },
  {
    id: 2,
    category: 'women',
    name: 'Nike Joyride Run Flyknit',
    description: 'The Nike Joyride Run Flyknit is designed to help make running feel easier and give your legs a day off. Tiny foam beads underfoot contour to your foot for cushioning that stands up to your mileage.',
    imageUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/e4i53xwtw6gyjufm6mym/joyride-run-flyknit-running-shoe-9R1ktX.jpg',
    images: [
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/cvlxdd78cwqj0uoxzzy9/joyride-run-flyknit-running-shoe-9R1ktX.jpg',
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/qrs5y9hqpunmj0khircy/joyride-run-flyknit-running-shoe-9R1ktX.jpg',
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/vpu1dqtg4ei0omdfigcz/joyride-run-flyknit-running-shoe-9R1ktX.jpg',
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/sn3f9mfcdanhxpqep98x/joyride-run-flyknit-running-shoe-9R1ktX.jpg',
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/lgkywfysnrkivufxcifb/joyride-run-flyknit-running-shoe-9R1ktX.jpg',
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/sbklivgqb9idpcry8pjw/joyride-run-flyknit-running-shoe-9R1ktX.jpg'
    ],
    price: 235,
    stock: Math.ceil(Math.random(0, 99)*100)
  },
  {
    id: 3,
    category: 'women',
    name: 'Nike React Infinity Run Flyknit',
    description: 'The Nike React Infinity Run Flyknit is designed to keep you on the run. More foam and improved upper details provide a secure and cushioned feel. Lace up and feel the potential as you hit the road.',
    imageUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/i1-ceb52d30-900c-4220-a3e8-16022953e28a/react-infinity-run-flyknit-running-shoe-pl6fKJ.jpg',
    images: [
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-74cad647-f203-45d0-8e98-de410331d3e9/react-infinity-run-flyknit-running-shoe-pl6fKJ.jpg',
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-a88336b5-7b8a-4b84-b364-731624aebd05/react-infinity-run-flyknit-running-shoe-pl6fKJ.jpg',
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-0fdf8a15-6bea-4182-bed7-8b9bd2d4319b/react-infinity-run-flyknit-running-shoe-pl6fKJ.jpg',
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-339f9adb-ae87-41d6-a62c-ddfd779c2dff/react-infinity-run-flyknit-running-shoe-pl6fKJ.jpg',
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-43a8bb68-fbdd-4fc6-a013-a9ccbb7da79e/react-infinity-run-flyknit-running-shoe-pl6fKJ.jpg',
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-97a5368e-0b1f-48c9-9af8-9c7c609887a5/react-infinity-run-flyknit-running-shoe-pl6fKJ.jpg'
    ],
    price: 215,
    stock: Math.ceil(Math.random(0, 99)*100)
  },
  {
  id: 4,
  category: 'women',
  name: 'Nike Air Max 270 React ("Psychedelic Movement")',
  description: 'The Nike Air Max 270 React is a balanced blend of classic design and forward-looking innovation. Nike React foam delivers lightweight, bouncy comfort, while rubber outsole pods and an exaggerated outsole offer a cutting-edge look that begs a reaction.',
  imageUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/x2ihxsan4qjrvirja1lm/air-max-270-react-shoe-GCcKSq.jpg',
  images: [
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i5db0ikhnmywyoyuqr5r/air-max-270-react-shoe-GCcKSq.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/uz118pwylcyqkmm7j0cj/air-max-270-react-shoe-GCcKSq.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/sdjm9v7shr3yj9yzfnzv/air-max-270-react-shoe-GCcKSq.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/gojcht6ib66bwhidtinn/air-max-270-react-shoe-GCcKSq.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/mofict8t8aavnljssosh/air-max-270-react-shoe-GCcKSq.jpg',
  ],
  price: 195,
  stock: Math.ceil(Math.random(0, 99)*100)
},
{
  id: 5,
  category: 'women',
  name: 'Nike React Element 55 Premium',
  description: 'The Nike React Element 55 is a balanced blend of classic design and forward-looking innovation. Nike React foam delivers lightweight, bouncy comfort, while rubber outsole pods and an exaggerated outsole offer a cutting-edge look that begs a reaction.',
  imageUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/lzztwyeow1jqb2crwqp3/react-element-55-shoe-7sd1ql.jpg',
  images: [
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/oq5unnrdxpl6mkj9qoov/react-element-55-shoe-7sd1ql.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/v5l4kqgsm4ixlzceckmb/react-element-55-shoe-7sd1ql.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/p8n0bmd6ufrsfcvhqi77/react-element-55-shoe-7sd1ql.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/jl3xvd5ttfpk9rhdbuam/react-element-55-shoe-7sd1ql.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/fleb9lq2cmiuawvwfmy2/react-element-55-shoe-7sd1ql.jpg',
  ],
  price: 185,
  stock: Math.ceil(Math.random(0, 99)*100)
},
{
  id: 6,
  category: 'women',
  name: 'Nike Air Max Dia Icon Clash',
  description: 'The Nike Air Max Dia Icon Clash delivers a lifted look and airy aesthetic in a sleek shape. The minimal upper modernises the look, while a Max Air unit, surrounded by clear TPU, is amplified even further by an exaggerated midsole for a boost of style.',
  imageUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/lmq0c0cqcpekuk7ejzxb/air-max-dia-icon-clash-shoe-VzvlcR.jpg',
  images: [
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/c9snop30r81yunjil7m5/air-max-dia-icon-clash-shoe-VzvlcR.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/w30ellkdewmzpxfab0nr/air-max-dia-icon-clash-shoe-VzvlcR.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/hgv7wkw2idxnrozzatgj/air-max-dia-icon-clash-shoe-VzvlcR.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/h9auh5ofp7l7ldjrtqpd/air-max-dia-icon-clash-shoe-VzvlcR.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/ypazklikm1ljedqk1xln/air-max-dia-icon-clash-shoe-VzvlcR.jpg'
  ],
  price: 145,
  stock: Math.ceil(Math.random(0, 99)*100)
},
{
  id: 7,
  category: 'women',
  name: 'Nike Air Max Dia SE',
  description: 'The Nike Air Max Dia SE features sleek lines and a sheer upper that combine classic Air Max elements into a lightweight, comfy and versatile icon. Together with its smart toe-down profile and extra lift, the Nike Air Max Dia SE offers an ever-bigger expression of Nike Air.',
  imageUrl: 'https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/wiikh0vridjk9q2bs7ez/air-max-dia-se-shoe-SX3F1x.jpg',
  images: [
    'https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/sobfiufsszzdwj6whctg/air-max-dia-se-shoe-SX3F1x.jpg',
    'https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/knupe0mmgkd8su5qfshd/air-max-dia-se-shoe-SX3F1x.jpg',
    'https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/vxfm7bsmvkhjzj0qqmdj/air-max-dia-se-shoe-SX3F1x.jpg',
    'https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/iswln438wpuaweff4cfj/air-max-dia-se-shoe-SX3F1x.jpg',
    'https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/gqagapvzhokj0b8y7fsh/air-max-dia-se-shoe-SX3F1x.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/zr1xthm5u4cgyhopv610/air-max-dia-se-shoe-SX3F1x.jpg'
  ],
  price: 155,
  stock: Math.ceil(Math.random(0, 99)*100)
},
{
  id: 8,
  category: 'women',
  name: 'Air Jordan 1 Mid SE',
  description: "Air Jordan 1 Mid SE takes a step up from its predecessor with smooth, lightweight performance and a bold look. An updated Flyknit upper contours to your foot with a minimal, supportive design. Underfoot, durable Nike React technology defies the odds by being both soft and responsive, for comfort that lasts as long as you can run.",
  imageUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/i1-2dbe5f8c-ea37-43a1-a643-31a0ed9c2e64/air-jordan-1-mid-se-shoe-pbLqN5.jpg',
  images: [
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-0f456238-5998-4bf7-8d21-c070ea61898c/air-jordan-1-mid-se-shoe-pbLqN5.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-89bf4d08-a9dc-481d-ada5-80e62c53c6ce/air-jordan-1-mid-se-shoe-pbLqN5.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-95642fb4-5bad-4ff1-85df-7595f7082971/air-jordan-1-mid-se-shoe-pbLqN5.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-59538245-4b24-4b5a-b54a-4fb6652957bd/air-jordan-1-mid-se-shoe-pbLqN5.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-cae58066-c1e0-4aa7-bfba-4c45a0b01761/air-jordan-1-mid-se-shoe-pbLqN5.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-ad54fea7-be14-4813-b40e-80ce86101dc8/air-jordan-1-mid-se-shoe-pbLqN5.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-9d1a3e6b-be00-4986-8c5b-118e78ab29db/air-jordan-1-mid-se-shoe-pbLqN5.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-6f737a9c-170a-4dd3-a805-c7fd6e323893/air-jordan-1-mid-se-shoe-pbLqN5.jpg'
  ],
  price: 165,
  stock: Math.ceil(Math.random(0, 99)*100)
},
{
  id: 9,
  category: 'women',
  name: 'Nike Epic React Flyknit 2',
  description: "The Nike Epic React Flyknit 2 takes a step up from its predecessor with smooth, lightweight performance and a bold look. An updated Flyknit upper contours to your foot with a minimal, supportive design. Underfoot, durable Nike React technology defies the odds by being both soft and responsive, for comfort that lasts as long as you can run.",
  imageUrl: 'https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/csdbpwsgablm58zc2cgf/epic-react-flyknit-2-running-shoe-03DmKd.jpg',
  images: [
    'https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/kvje3gz6ylfx8mxwzqjt/epic-react-flyknit-2-running-shoe-03DmKd.jpg',
    'https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/ovogdks2pvdt3a305j0d/epic-react-flyknit-2-running-shoe-03DmKd.jpg',
    'https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/q17tvwwepebnlwprnsbd/epic-react-flyknit-2-running-shoe-03DmKd.jpg',
    'https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/rijnj4dtyn40frq40ua5/epic-react-flyknit-2-running-shoe-03DmKd.jpg',
    'https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/pvlyr0fpkidcr6ggvoih/epic-react-flyknit-2-running-shoe-03DmKd.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/bp6v0cqsiotncrju3mjs/epic-react-flyknit-2-running-shoe-03DmKd.jpg'
  ],
  price: 195,
  stock: Math.ceil(Math.random(0, 99)*100)
},
{
  id: 10,
  category: 'women',
  name: 'Nike Wildhorse 6',
  description: "The Nike Wildhorse 6 keeps it stable, secure and lightweight on the trail. An updated outsole delivers the traction you need, while a foam midsole keeps you cushioned on your run.",
  imageUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/i1-70e85685-d1fa-4ad9-a74c-ce1209adc64d/wildhorse-6-trail-running-shoe-1PJkl2.jpg',
  images: [
    'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/i1-b8e65353-87cf-4796-ab05-ccdc679667c4/wildhorse-6-trail-running-shoe-1PJkl2.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-04880634-d13c-48b0-b766-f664d4da9802/wildhorse-6-trail-running-shoe-1PJkl2.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-81d1af4a-0b77-4b18-a84f-5feeb1f4ffb0/wildhorse-6-trail-running-shoe-1PJkl2.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-c92b0198-e540-4fd8-b00f-4bc215f4e3a6/wildhorse-6-trail-running-shoe-1PJkl2.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-e245fd8c-ca52-4ead-930d-d267b56fc98d/wildhorse-6-trail-running-shoe-1PJkl2.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-cb6e404f-cd3b-47b6-8140-a1cfebb2bfc4/wildhorse-6-trail-running-shoe-1PJkl2.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-6dd454ab-fd52-4a00-8b35-2d7747757d3e/wildhorse-6-trail-running-shoe-1PJkl2.jpg'
  ],
  price: 170,
  stock: Math.ceil(Math.random(0, 99)*100)
},
{
  id: 11,
  category: 'women',
  name: 'Nike Air Force Max II',
  description: "The game has gone small, so bigs have to be faster, more agile and more versatile to stay relevant. Keeping pace with ever-evolving player needs, the Nike Air Force Max II provides the responsive cushioning that allows big players to keep crashing the boards and banging in the post, while helping them stay light and quick on the break.",
  imageUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/f1b41126-3c6d-479b-9012-5296c261531f/air-force-max-ii-basketball-shoe-ZXgnrV.jpg',
  images: [
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/716d170f-6ac4-44e6-becd-28e45c1e2dc6/air-force-max-ii-basketball-shoe-ZXgnrV.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/513dfe43-6624-4657-9ea2-8f520d81fd39/air-force-max-ii-basketball-shoe-ZXgnrV.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/716d170f-6ac4-44e6-becd-28e45c1e2dc6/air-force-max-ii-basketball-shoe-ZXgnrV.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/4c9aac0b-43c8-477f-b197-31065b8d0355/air-force-max-ii-basketball-shoe-ZXgnrV.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/7044efab-f578-49bd-bd7f-8b26778f341a/air-force-max-ii-basketball-shoe-ZXgnrV.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/ac217332-112d-42e2-9eeb-64604b99d49c/air-force-max-ii-basketball-shoe-ZXgnrV.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/d7e73a6a-c075-4c07-9bc5-065c02ecd9ca/air-force-max-ii-basketball-shoe-ZXgnrV.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/cb5c91f0-8e02-4d57-a2c0-9df7a266805d/air-force-max-ii-basketball-shoe-ZXgnrV.jpg'
  ],
  price: 165,
  stock: Math.ceil(Math.random(0, 99)*100)
},
{
  id: 12,
  category: 'women',
  name: 'Nike SuperRep Go',
  description: "The Nike SuperRep Go combines comfortable foam cushioning, flexibility and support to get you moving in circuit-based fitness classes or while streaming workouts at home.",
  imageUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/65acdb60-b5ff-403a-b5f4-b51d769741f6/superrep-go-training-shoe-4RH1PB.jpg',
  images: [
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/e978eab3-4005-4e3d-8b24-90ee1182fa20/superrep-go-training-shoe-4RH1PB.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/d757f256-4163-4200-ace3-cbb1ab86c073/superrep-go-training-shoe-4RH1PB.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/c627498a-e437-492f-aae3-89a9879e5c25/superrep-go-training-shoe-4RH1PB.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/e9df9552-2262-44eb-aa90-3faa3dea2e6a/superrep-go-training-shoe-4RH1PB.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/4cd469ee-24a0-4d3f-bf54-a75034242817/superrep-go-training-shoe-4RH1PB.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/859aaa96-702d-4e38-982b-e92ae4a45008/superrep-go-training-shoe-4RH1PB.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/6da0b4f8-6a86-43b7-ae8f-c2d3eb655fe0/superrep-go-training-shoe-4RH1PB.jpg'
  ],
  price: 135,
  stock: Math.ceil(Math.random(0, 99)*100)
},
{
  id: 13,
  category: 'women',
  name: 'Nike Air Max Bella TR 3',
  description: "The Nike Air Max Bella TR 3 provides stable, comfortable cushioning for weightlifting and circuit training. Lightweight mesh lets your feet breathe, and the laces secure your foot.",
  imageUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/i1-49103d44-fa72-47b3-ae12-27cef8f55373/air-max-bella-tr-3-training-shoe-P9GLBR.jpg',
  images: [
    'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/i1-ce37a47e-d168-4114-ad73-53379a57ae89/air-max-bella-tr-3-training-shoe-P9GLBR.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-a50ebb99-52d8-4fbc-bd11-313854cddc88/air-max-bella-tr-3-training-shoe-P9GLBR.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-74cd673d-5791-4fc8-b7bd-e0eefe656582/air-max-bella-tr-3-training-shoe-P9GLBR.jpg',
    'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/i1-6c6cb113-e40d-4034-a347-e3e878e6e72f/air-max-bella-tr-3-training-shoe-P9GLBR.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-cd140dc8-777f-4fff-aff3-c2e4d855cd9e/air-max-bella-tr-3-training-shoe-P9GLBR.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-ad9003ea-79d7-49b2-9893-23fcae530840/air-max-bella-tr-3-training-shoe-P9GLBR.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-b3f9c26a-ab01-4a0b-a3ce-d723dd56eea3/air-max-bella-tr-3-training-shoe-P9GLBR.jpg'
  ],
  price: 105,
  stock: Math.ceil(Math.random(0, 99)*100)
},
{
  id: 14,
  category: 'women',
  name: 'Nike React Metcon AMP',
  description: "The Nike React Metcon AMP takes the stability and traction from the original and pairs it with React foam, Nike's most comfortable cushioning. It feels soft and springy with a breathable upper, but it's still stable enough to tackle lifting and high-impact workouts. A glow-in-the-dark rubber sole climbs up the side of the shoe for durability and extra grip during rope climbs.",
  imageUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b0fcfd71-248d-491c-bd42-8652c3cd7d7e/react-metcon-amp-training-shoe-B1cmnb.jpg',
  images: [
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/038d2a8f-a23c-4e96-a1cd-87db09b58ba3/react-metcon-amp-training-shoe-B1cmnb.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/d90a6156-e996-4b9a-a699-fc662e833221/react-metcon-amp-training-shoe-B1cmnb.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/3ecea26e-8428-4997-b6bf-c281c4e5da49/react-metcon-amp-training-shoe-B1cmnb.jpg',
    'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/6fce88db-e9e2-4f5f-8916-83b350f61140/react-metcon-amp-training-shoe-B1cmnb.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/7bb9a20d-e0ee-4145-8cc9-a2087f6f501a/react-metcon-amp-training-shoe-B1cmnb.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/fa662e19-5e77-4b52-aec0-1230fe9f7579/react-metcon-amp-training-shoe-B1cmnb.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/60b025cc-7f91-4708-a24e-cb16292f6d9e/react-metcon-amp-training-shoe-B1cmnb.jpg',
    'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/b862caff-8004-4429-ba04-476141fa9cb8/react-metcon-amp-training-shoe-B1cmnb.jpg'
  ],
  price: 215,
  stock: Math.ceil(Math.random(0, 99)*100)
},
{
  id: 15,
  category: 'women',
  name: 'Air Jordan 2 Retro',
  imageUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/i1-b3190605-c6c8-4fc8-8e82-d09d2ced4c6c/air-jordan-2-retro-shoe-HTcK0B.jpg',
  images: [
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-91fcb38d-c297-4139-bc88-63428709ffaa/air-jordan-2-retro-shoe-HTcK0B.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-7893f293-ba2e-409c-9c6f-590aba575e03/air-jordan-2-retro-shoe-HTcK0B.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-0d8f4f20-f54e-4b61-9815-b8137dcb00ee/air-jordan-2-retro-shoe-HTcK0B.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-10417cb1-5c5a-4fb0-8d2d-22ecb4d82d2a/air-jordan-2-retro-shoe-HTcK0B.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-5a9454d4-bae1-4d16-8050-78fe6b71ab39/air-jordan-2-retro-shoe-HTcK0B.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-4878a0ac-3f7d-49cb-b320-000bee0b8224/air-jordan-2-retro-shoe-HTcK0B.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-e6a0171f-4e47-4608-aba2-93ebec610584/air-jordan-2-retro-shoe-HTcK0B.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-54586dd0-4353-4396-8076-ee6873eeef1b/air-jordan-2-retro-shoe-HTcK0B.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-c06e8007-cbc0-4eb0-b835-630bb2c21102/air-jordan-2-retro-shoe-HTcK0B.jpg'
  ],
  price: 255,
  stock: Math.ceil(Math.random(0, 99)*100)
},
{
  id: 16,
  category: 'women',
  name: 'Nike Air Max 1 G',
  description: "The Nike Air Max 1 G reinvents an icon with details made for the course. A visible Max Air unit cushions every step while creating a look that transitions seamlessly from the course to the concrete.",
  imageUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/hudbhybztzrxpwbyhbnr/air-max-1-g-golf-shoe-hQXK8B.jpg',
  images: [
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/vch5b4id2r22qqrzayeb/air-max-1-g-golf-shoe-hQXK8B.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/rgqlhs06tinzuu3cehnx/air-max-1-g-golf-shoe-hQXK8B.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/rzjxvwtvuiqrcfpnmavy/air-max-1-g-golf-shoe-hQXK8B.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/y0gdstam3qwjlgsstspw/air-max-1-g-golf-shoe-hQXK8B.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/joxux9znk4nf3iq3yytg/air-max-1-g-golf-shoe-hQXK8B.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/umena3xg9cbin6n4yev4/air-max-1-g-golf-shoe-hQXK8B.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/uejcpllndhsimdyzniec/air-max-1-g-golf-shoe-hQXK8B.jpg'
  ],
  price: 160,
  stock: Math.ceil(Math.random(0, 99)*100)
},
{
  id: 17,
  category: 'women',
  name: 'Nike Roshe G',
  description: "Inspired by a Nike icon, the Nike Roshe G elevates your look with plush, breathable materials. Its integrated traction pattern means you won't lose time transitioning from the course to the concrete.",
  imageUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/n2oj5vj4yj6dqxxhuo3a/roshe-g-golf-shoe-XvZcGV.jpg',
  images: [
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/fe78nq0ebflsp8xvlpto/roshe-g-golf-shoe-XvZcGV.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/wemqhc3wes3wjuc8vxsd/roshe-g-golf-shoe-XvZcGV.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/bt4vmz559tieuokdhjuv/roshe-g-golf-shoe-XvZcGV.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/cnmbt8jqefgwdnaymjkx/roshe-g-golf-shoe-XvZcGV.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/seetidprhmcvvjvjsve1/roshe-g-golf-shoe-XvZcGV.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/nsrr5xfpv9voxwlmgvaf/roshe-g-golf-shoe-XvZcGV.jpg'
  ],
  price: 110,
  stock: Math.ceil(Math.random(0, 99)*100)
},
{
  id: 18,
  category: 'women',
  name: 'NikeCourt Air Zoom Zero',
  description: "Featuring the first full-length Zoom Air unit in NikeCourt history, the NikeCourt Air Zoom Zero delivers exceptional responsiveness and great court feel. Its fabric and synthetic upper with a customisable lacing system offers second-skin-like comfort.",
  imageUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/fawrirbpmqh0eqz4odzz/nikecourt-air-zoom-zero-tennis-shoe-2Qfmnm.jpg',
  images: [
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/gefchfxjczfpxkzvioxc/nikecourt-air-zoom-zero-tennis-shoe-2Qfmnm.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/xvpdck0ecynpzefexmzu/nikecourt-air-zoom-zero-tennis-shoe-2Qfmnm.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/dwqhwwrl0t1hkmoqt5e4/nikecourt-air-zoom-zero-tennis-shoe-2Qfmnm.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/rlyhvp1vcmx1azsw8mqu/nikecourt-air-zoom-zero-tennis-shoe-2Qfmnm.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/yrxkb99suroj7gqrwy1r/nikecourt-air-zoom-zero-tennis-shoe-2Qfmnm.jpg'
  ],
  price: 175,
  stock: Math.ceil(Math.random(0, 99)*100)
},
{
  id: 19,
  category: 'women',
  name: 'NikeCourt Flare 2',
  description: "As our only female-specific design, the NikeCourt Flare 2 QS takes inspiration from Serena Williams' on-court shoe. It combines speed and style with lightweight cushioning and a supportive lacing system.",
  imageUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/k7virvtnbzgomtwxxflt/nikecourt-flare-2-hard-court-tennis-shoe-JGVBm4.jpg',
  images: [
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/h8d2zjwnlkt5rhxabpv2/nikecourt-flare-2-hard-court-tennis-shoe-JGVBm4.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/riiawqxh8btyb2pkrwee/nikecourt-flare-2-hard-court-tennis-shoe-JGVBm4.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/kz6eodkskvpg1fztmddb/nikecourt-flare-2-hard-court-tennis-shoe-JGVBm4.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/dsqkfhzuww0dukzywqdo/nikecourt-flare-2-hard-court-tennis-shoe-JGVBm4.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/azxu0royhqivjplfrwju/nikecourt-flare-2-hard-court-tennis-shoe-JGVBm4.jpg'
  ],
  price: 165,
  stock: Math.ceil(Math.random(0, 99)*100)
},
{
  id: 20,
  category: 'women',
  name: 'Nike Zoom Victory 3',
  description: "The Nike Zoom Victory 3 Racing Spike features a minimal design for an ultra-lightweight feel and innovative spike plate that combines zones of stiffness and flexibility for incredible propulsion. Ideal for 1500m to 5K events.",
  imageUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ef815e2e-11e2-4b74-83eb-89bab09512a3/zoom-victory-3-racing-shoe-7BTDPz90.jpg',
  images: [
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/40cfec2d-4f33-42a3-bca3-c11616687e4f/zoom-victory-3-racing-shoe-7BTDPz90.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/094c62ee-ee11-4863-b7f5-b05ea18bb243/zoom-victory-3-racing-shoe-7BTDPz90.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/17ebd6b5-e4bf-4071-8706-34f8431ef52f/zoom-victory-3-racing-shoe-7BTDPz90.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/e15f2ff7-bd0d-4865-b9d6-35c8bc709f61/zoom-victory-3-racing-shoe-7BTDPz90.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/2871b4f3-4c8b-4cbb-9191-ff7a08748b0b/zoom-victory-3-racing-shoe-7BTDPz90.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/81eaff77-424a-406e-9423-d8ad1c98e2b3/zoom-victory-3-racing-shoe-7BTDPz90.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/de6e1b50-2322-41f9-9a91-cc6b965fd2c7/zoom-victory-3-racing-shoe-7BTDPz90.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/2e341168-333e-4ebb-ba0d-07959c8ac4de/zoom-victory-3-racing-shoe-7BTDPz90.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/2fd37d59-4e4c-4775-b2e6-2cde1112b176/zoom-victory-3-racing-shoe-7BTDPz90.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/f078a912-e5a9-4d67-9278-bfb3ae0026ac/zoom-victory-3-racing-shoe-7BTDPz90.jpg'
  ],
  price: 165,
  stock: Math.ceil(Math.random(0, 99)*100)
},



{
  id: 21,
  name: 'NikeCourt Tech Challenge 20',
  category: 'men',
  description: "Celebrating the 30th anniversary of the Nike Air Tech Challenge 2, the NikeCourt Tech Challenge 20 puts a modern spin on an iconic court shoe. You'll get the same vibrant graphics found on the original design with the added comfort of modern materials.",
  imageUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/i1-dbccc8c2-7c28-4a75-9379-d5fac2c81188/nikecourt-tech-challenge-20-tennis-shoe-b4KfJ1.jpg',
  images: [
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-28b968b9-d613-4de3-a3d4-2251eb63916e/nikecourt-tech-challenge-20-tennis-shoe-b4KfJ1.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-446b5dce-e1b1-43a3-bf71-791cdaa0b8b8/nikecourt-tech-challenge-20-tennis-shoe-b4KfJ1.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-fd84bbfe-b8b3-40b1-9353-2829c9ab74f1/nikecourt-tech-challenge-20-tennis-shoe-b4KfJ1.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-0a039f94-6dfb-4eea-b31f-dc6a93ab7fdf/nikecourt-tech-challenge-20-tennis-shoe-b4KfJ1.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-dfca1cbf-bd4d-42bf-a167-4ecd1fb2bc20/nikecourt-tech-challenge-20-tennis-shoe-b4KfJ1.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-98ce0790-662d-478d-81af-17271725b69f/nikecourt-tech-challenge-20-tennis-shoe-b4KfJ1.jpg'
  ],
  price: 165,
  stock: Math.ceil(Math.random(0, 99)*100)
},
{
  id: 22,
  name: 'Nike Phantom Vision Elite Dynamic Fit FG',
  category: 'men',
  description: "The Nike Phantom Vision Elite Dynamic Fit FG brings the fierce precision of street play to the pitch. A foot-hugging inner sleeve is concealed in a Flyknit constructed outer layer to create a boot for the finishers, the providers and the battlers of tomorrow's game.",
  imageUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/m4fwi6gc1ufrk9wbfxnr/phantom-vision-elite-dynamic-fit-fg-football-boot-zhhjXk.jpg',
  images: [
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/wnuzjcgxznqczlx70epe/phantom-vision-elite-dynamic-fit-fg-football-boot-zhhjXk.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/hsvvnogbatrlchhdssit/phantom-vision-elite-dynamic-fit-fg-football-boot-zhhjXk.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/hvmf0ylhxjjjbcsn2axi/phantom-vision-elite-dynamic-fit-fg-football-boot-zhhjXk.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/kcdakp7xrefnurvcvotz/phantom-vision-elite-dynamic-fit-fg-football-boot-zhhjXk.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/oicfzj2bo9nikmoxppyz/phantom-vision-elite-dynamic-fit-fg-football-boot-zhhjXk.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/hwgkpszvk6qxnh4swct2/phantom-vision-elite-dynamic-fit-fg-football-boot-zhhjXk.jpg'  
  ],
  price: 360,
  stock: Math.ceil(Math.random(0, 99)*100)
},
{
  id: 23,
  category: 'men',
  name: 'Nike Metcon 5 AMP',
  description: "The Nike Metcon 5 AMP arms you with stability for heavy lifting and traction for sprints during high-impact training. It combines breathability and durability to be your secret weapon in the gym.",
  imageUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/i1-fe8f87b9-e08a-4762-be12-4b50ddb5acbe/metcon-5-amp-training-shoe-9SMJ9m.jpg',
  images: [
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-1bee9365-afba-48eb-9dff-0dd237153226/metcon-5-amp-training-shoe-9SMJ9m.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-31709e11-536e-4d5f-a353-3b1ff341ee49/metcon-5-amp-training-shoe-9SMJ9m.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-29da44a8-a67f-48fd-a9f6-714d95d3e4f7/metcon-5-amp-training-shoe-9SMJ9m.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-ea12f3c5-50c1-4c76-b840-13c334c76069/metcon-5-amp-training-shoe-9SMJ9m.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-6e0b73b0-079b-4b58-8c38-0a42e715fd1e/metcon-5-amp-training-shoe-9SMJ9m.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-f898ae67-eefa-4ce3-9aab-7d818c2a2e96/metcon-5-amp-training-shoe-9SMJ9m.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-5848dc6f-0de5-4b37-bb6a-4a8a5fbfc8a9/metcon-5-amp-training-shoe-9SMJ9m.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-2525c5eb-dbc6-42f8-8abc-762644f569e9/metcon-5-amp-training-shoe-9SMJ9m.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-e8b58a15-7b4b-4b82-a73a-533e782ba785/metcon-5-amp-training-shoe-9SMJ9m.jpg'
  ],
  price: 165,
  stock: Math.ceil(Math.random(0, 99)*100)
},
{
  id: 24,
  category: 'men',
  name: 'Nike SB Air Max Stefan Janoski 2',
  description: "The Nike SB Air Max Stefan Janoski 2 hugs your foot with a breathable textile upper. A Max Air unit in the heel cushions every step, while a flat rubber outsole optimises grip when you're on your board.",
  imageUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/dpwuzaavztberafce5bd/sb-air-max-stefan-janoski-2-skate-shoe-s05dbb.jpg',
  images: [
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/ehlyzr55fnsldcs6xsqi/sb-air-max-stefan-janoski-2-skate-shoe-s05dbb.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/h9ejbup4pc9usl87gn7u/sb-air-max-stefan-janoski-2-skate-shoe-s05dbb.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/dfqwoxctaze5wltgfxbg/sb-air-max-stefan-janoski-2-skate-shoe-s05dbb.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/ylbdenp1kg5qaz14nzqn/sb-air-max-stefan-janoski-2-skate-shoe-s05dbb.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/yjzytxpqk4dkdfsexr3r/sb-air-max-stefan-janoski-2-skate-shoe-s05dbb.jpg',

  ],
  price: 145,
  stock: Math.ceil(Math.random(0, 99)*100)
},
{
  id: 25,
  category: 'men',
  name: 'Nike SB GTS Return Premium',
  description: "Infused with Nike DNA, the Nike SB GTS Return Premium puts an iconic spin on a classic skate silhouette. Its reinvented design updates the classic cupsole for a more flexible, lightweight feel right out of the box.",
  imageUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/c2073dc7-7290-4d9f-b839-395f6aa5f740/sb-gts-return-skate-shoe-d2B7J5.jpg',
  images: [
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/c886d6ee-701b-4b8a-8339-69acc0d416da/sb-gts-return-skate-shoe-d2B7J5.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/ac5ea4fc-605e-48b5-88c7-2284d651625e/sb-gts-return-skate-shoe-d2B7J5.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/13f2d0d5-5624-4033-be7b-8ae04ff40e33/sb-gts-return-skate-shoe-d2B7J5.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/af0c9103-434a-42b2-97bf-228d1512d6d0/sb-gts-return-skate-shoe-d2B7J5.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/f6603d46-37b8-46ba-9f55-550ccec65853/sb-gts-return-skate-shoe-d2B7J5.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/3f65893a-1aec-4a62-ba4f-d69193b8346f/sb-gts-return-skate-shoe-d2B7J5.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/9b9f10d5-f453-4b21-a48c-07a162519e79/sb-gts-return-skate-shoe-d2B7J5.jpg'
  ],
  price: 120,
  stock: Math.ceil(Math.random(0, 99)*100)
},
{
  id: 26,
  category: 'men',
  name: 'Nike React Infinity Pro',
  description: "Built with revolutionary cushioning and innovative traction, the Nike React Infinity Pro gives you the support, comfort and grip you need to play at your best.",
  imageUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/i1-825ac313-6bb1-4866-9295-14da3de7b9ed/react-infinity-pro-golf-shoe-DPBNlg.jpg',
  images: [
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-c9c2bd66-0ed6-4e46-90b2-624b285a46d6/react-infinity-pro-golf-shoe-DPBNlg.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-3eee2673-b5e7-4f61-8b7a-4c2335fb6bca/react-infinity-pro-golf-shoe-DPBNlg.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-119d8488-7c11-40f4-a6ec-b9e52793fc31/react-infinity-pro-golf-shoe-DPBNlg.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-97faabc7-2aca-4eea-ba36-24ce9a477122/react-infinity-pro-golf-shoe-DPBNlg.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-714897c4-bc55-4956-824e-9a78d6e2cf96/react-infinity-pro-golf-shoe-DPBNlg.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-cf4e4823-257e-4f83-8be2-6327a0f9c1e7/react-infinity-pro-golf-shoe-DPBNlg.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-7d0ed8dc-fe43-4d43-9ad0-2636318d24e2/react-infinity-pro-golf-shoe-DPBNlg.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-011bc3c1-c27b-4995-8070-b285af7153ef/react-infinity-pro-golf-shoe-DPBNlg.jpg'
  ],
  price: 160,
  stock: Math.ceil(Math.random(0, 99)*100)
},
{
  id: 27,
  name: 'Nike Air Max 270 React',
  category: 'men',
  description: 'The bold silhouette of Nike Air lifts the Nike Air Max 270 React to new heights, while the Nike React foam midsole delivers exceptional cushioning. Imagine all-day comfort with unstoppable style.',
  imageUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/qohsnboimfosmm7tw4dx/air-max-270-react-shoe-kZBR2B.jpg',
  images: [
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/ad687ptrujye7uyvcdj7/air-max-270-react-shoe-kZBR2B.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/dbrehdi8tn7c6palvusz/air-max-270-react-shoe-kZBR2B.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/ftenzihwrubuagadqukp/air-max-270-react-shoe-kZBR2B.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/rwb0jthqza9oaeymhhkd/air-max-270-react-shoe-kZBR2B.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/mf7etr6siqliojhqmy8h/air-max-270-react-shoe-kZBR2B.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/upsh8wpkqu1g7er6nsdy/air-max-270-react-shoe-kZBR2B.jpg'
  ],
  price: 195,
  stock: Math.ceil(Math.random(0, 99)*100)
},
{
  id: 28,
  name: 'Nike Air Max 2090',
  category: 'men',
  description: 'Bring the past into the future with the Nike Air Max 2090, a bold look inspired by the DNA of the iconic Air Max 90. Brand-new Nike Air cushioning underfoot adds unparalleled comfort while transparent fabric on the upper is blended with timeless OG features for an edgy, modernised look.',
  imageUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b5caf032-fd90-4baa-bd11-75e2c97e39e2/air-max-2090-shoe-X3ztPn.jpg',
  images: [
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/84e9ba73-d0b2-4a91-8100-f11e720886c0/air-max-2090-shoe-X3ztPn.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/a3b3d811-483d-4ade-8a1a-101b75b127a3/air-max-2090-shoe-X3ztPn.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/fce5eec6-22d6-4c28-b93f-41e532656cd9/air-max-2090-shoe-X3ztPn.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/ff37b386-e7f2-4315-9d6a-e01098509af2/air-max-2090-shoe-X3ztPn.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/a34975d2-98cb-4cf5-a9a5-4b3ff8eff0f2/air-max-2090-shoe-X3ztPn.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/bdf85acb-a136-4dc2-a207-bb78ce5d220d/air-max-2090-shoe-X3ztPn.jpg'
  ],
  price: 195,
  stock: Math.ceil(Math.random(0, 99)*100)
},
{
  id: 29,
  name: 'Nike SuperRep Go',
  category: 'men',
  description: 'The Nike SuperRep Go combines comfortable foam cushioning, flexibility and support to get you moving in circuit-based fitness classes or while streaming workouts at home.',
  imageUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/i1-e887d5c3-44f4-42fb-be9b-8e19cbd2f1a7/superrep-go-training-shoe-WxK0Dl.jpg',
  images: [
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-59d068c9-24d2-4412-9825-9c09464f1cb3/superrep-go-training-shoe-WxK0Dl.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-cace8203-57c5-43ca-b60a-be708a523c15/superrep-go-training-shoe-WxK0Dl.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-23e6d113-1a48-42d9-b087-8b65828cd2fd/superrep-go-training-shoe-WxK0Dl.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-00078b1d-d88f-4156-bbe5-1708e58e36a8/superrep-go-training-shoe-WxK0Dl.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-fc5ab858-9584-41db-b53b-c7454202bfee/superrep-go-training-shoe-WxK0Dl.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-e0f26a00-3f8d-4c41-8b5d-12f1a487f2ed/superrep-go-training-shoe-WxK0Dl.jpg'
  ],
  price: 135,
  stock: Math.ceil(Math.random(0, 99)*100)
},
{
  id: 30,
  name: 'LeBron 17',
  category: 'men',
  description: "The LeBron 17 harnesses LeBron's strength and speed with containment and support for all-court domination. It features a lightweight mix of knit and heat-moulded yarns that gives each one a durable look and feel. Combined cushioning provides LeBron with the impact support and responsive energy return he needs to power through the long season.",
  imageUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/u30ipllzikle4oj5uwli/lebron-17-basketball-shoe-FKCmbK.jpg',
  images: [
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/zeied0bpgvjyydqbvbts/lebron-17-basketball-shoe-FKCmbK.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/hhbg01fgmufmdu6go6u0/lebron-17-basketball-shoe-FKCmbK.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/zadresxn9jvcvmadehl9/lebron-17-basketball-shoe-FKCmbK.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/zxfb334jooc33xetugbq/lebron-17-basketball-shoe-FKCmbK.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/uzbv9w54pxyfnfnzxvmx/lebron-17-basketball-shoe-FKCmbK.jpg'
  ],
  price: 260,
  stock: Math.ceil(Math.random(0, 99)*100)
},
{
  id: 31,
  name: 'PG 4',
  category: 'men',
  description: "Paul George is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivalled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.",
  imageUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/i1-5968d983-afa3-43f8-b3c9-803941e88956/pg-4-basketball-shoe-4NzGtl.jpg',
  images: [
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-e2673b9e-3672-4be3-b2d7-8fbfe35aec00/pg-4-basketball-shoe-4NzGtl.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-ac6e4f72-b14e-41cd-9f07-c27cc12162ea/pg-4-basketball-shoe-4NzGtl.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-d80ba59e-8d22-4a09-9696-e3cbade612b3/pg-4-basketball-shoe-4NzGtl.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-6ac0e5aa-c14a-4b6c-9050-837c93797d9b/pg-4-basketball-shoe-4NzGtl.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-87db071b-0b82-4621-91ea-95d1c3be460c/pg-4-basketball-shoe-4NzGtl.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-3a197cff-26ee-43f4-8278-7a44206e11dc/pg-4-basketball-shoe-4NzGtl.jpg'
  ],
  price: 145,
  stock: Math.ceil(Math.random(0, 99)*100)
},
{
  id: 32,
  name: 'Nike Air Zoom Pegasus 36 Trail',
  category: 'men',
  description: 'An icon trades pavement for path with the Nike Air Zoom Pegasus 36 Trail. A perforated mesh upper adds breathability, as double Zoom Air units underfoot cushion your stride. Opposing lugs on the outsole optimise traction on your uphill climbs.',
  imageUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/06799cfa-f860-4a95-995d-71f2b9f3a5e2/air-zoom-pegasus-36-trail-trail-running-shoe-zdtVpM.jpg',
  images: [
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/350b6be0-4bf8-4ba6-8dc3-2f59ce8ed60d/air-zoom-pegasus-36-trail-trail-running-shoe-zdtVpM.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/9b99b915-c851-4030-bdcf-9fcdc0f29fd3/air-zoom-pegasus-36-trail-trail-running-shoe-zdtVpM.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/1080f568-4ac0-490f-9a93-67943baef81f/air-zoom-pegasus-36-trail-trail-running-shoe-zdtVpM.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/95390c4f-a543-4765-916d-c28589f36a3d/air-zoom-pegasus-36-trail-trail-running-shoe-zdtVpM.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/524d5ffb-3849-4dac-abc7-37bf8c78fb22/air-zoom-pegasus-36-trail-trail-running-shoe-zdtVpM.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/78f6e8d2-a2d3-4b1f-823a-4c1c8575fab2/air-zoom-pegasus-36-trail-trail-running-shoe-zdtVpM.jpg'
  ],
  price: 165,
  stock: Math.ceil(Math.random(0, 99)*100)
},
{
  id: 33,
  category: 'men',
  name: 'Nike Air Zoom Victory',
  description: "Crafted for comfort, the Nike Air Zoom Victory pairs a Zoom Air unit with a plush sockliner for responsive cushioning, round after round. The Oxford-inspired upper helps support your foot through your swing.",
  imageUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/e8nijvkyqrnojkqgzvbk/air-zoom-victory-golf-shoe-kpLkwt.jpg',
  images: [
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/qgh1gtjwpllhe0mry5uo/air-zoom-victory-golf-shoe-kpLkwt.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/vjhmgrbgrivw4vm41h2d/air-zoom-victory-golf-shoe-kpLkwt.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/srqt7wcgpkcsomm86m7l/air-zoom-victory-golf-shoe-kpLkwt.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/qfvvi7deafulvuaj25rt/air-zoom-victory-golf-shoe-kpLkwt.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/sayu7wovc5vpjrfg86bz/air-zoom-victory-golf-shoe-kpLkwt.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/vdssq0manwubseqirmno/air-zoom-victory-golf-shoe-kpLkwt.jpg'
  ],
  price: 120,
  stock: Math.ceil(Math.random(0, 99)*100)
},
{
  id: 34,
  category: 'men',
  name: 'Jordan ADG',
  description: "The Jordan ADG optimises cushioning and ground feel, creating an innovative experience on the course. Its plush midsole and flexible outsole let your feet bend naturally through your swing.",
  imageUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/jxveg4jonioh5suqv60q/jordan-adg-golf-shoe-Jd9Psb.jpg',
  images: [
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/ncfip9klt7ka9wnqxpxf/jordan-adg-golf-shoe-Jd9Psb.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/juei4ttr5on229wj2sfu/jordan-adg-golf-shoe-Jd9Psb.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/t2mpyjagjxwwspv5nrgr/jordan-adg-golf-shoe-Jd9Psb.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/ngw6zjspooc4ylcrw8wy/jordan-adg-golf-shoe-Jd9Psb.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/gmw8mbkhhndw1aa9ty4n/jordan-adg-golf-shoe-Jd9Psb.jpg',

  ],
  price: 180,
  stock: Math.ceil(Math.random(0, 99)*100)
},
{
  id: 35,
  category: 'men',
  name: 'Nike React Infinity Run Flyknit A.I.R.',
  description: "The Nike React Infinity Run Flyknit is designed to help reduce injury and keep you on the run. More foam and improved upper details provide a secure and cushioned feel. Lace up and feel the potential as you hit the road.",
  imageUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/8871efc3-d28e-47dc-b267-132e5f0a4ad5/react-infinity-run-flyknit-air-running-shoe-v9LwlL.jpg',
  images: [
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/ccb090e5-8793-4529-8efc-7225911b5244/react-infinity-run-flyknit-air-running-shoe-v9LwlL.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/7768aa25-711a-4c95-8a8b-8bb4abaf14d9/react-infinity-run-flyknit-air-running-shoe-v9LwlL.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/6529de8a-e2d8-4672-88b0-b10c21291008/react-infinity-run-flyknit-air-running-shoe-v9LwlL.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/d31284da-e7a5-4447-8441-8c69c371af04/react-infinity-run-flyknit-air-running-shoe-v9LwlL.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/7ddb43ed-c9bd-4744-aebc-f58a08ad4b0a/react-infinity-run-flyknit-air-running-shoe-v9LwlL.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/9e2d8d51-a1d2-41f4-9414-09ad6dc49960/react-infinity-run-flyknit-air-running-shoe-v9LwlL.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/6734f418-06fb-445a-9238-4fba6287b812/react-infinity-run-flyknit-air-running-shoe-v9LwlL.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/0c5e0367-e44e-48a0-b0e1-1a60dd82f129/react-infinity-run-flyknit-air-running-shoe-v9LwlL.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/0c07f5a8-4dba-4102-9ec4-c4d01e6adfe9/react-infinity-run-flyknit-air-running-shoe-v9LwlL.jpg'
  ],
  price: 215,
  stock: Math.ceil(Math.random(0, 99)*100)
},
{
  id: 36,
  category: 'men',
  name: 'Nike React Phantom Run Flyknit 2',
  description: "The Nike React Phantom Run Flyknit 2 offers versatility for the everyday runner. Building on the foundation of its predecessor, the shoe expands on its laceless design by adding secure support that feels like it 'disappears' on your foot. More foam means better cushioning, keeping you comfortable as you run.",
  imageUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ea103b88-07c0-4f45-b6e7-4aa52e76af2c/react-phantom-run-flyknit-2-running-shoe-Djlst6.jpg',
  images: [
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/713e05d4-edf0-4910-b9a6-37c12c96df2a/react-phantom-run-flyknit-2-running-shoe-Djlst6.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/2a4433c7-2049-4fe8-8bb0-7255d6d4c402/react-phantom-run-flyknit-2-running-shoe-Djlst6.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/98e2cf37-f425-4c4e-951d-405d5648ac37/react-phantom-run-flyknit-2-running-shoe-Djlst6.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/f4163568-4ab9-4fed-9170-efee60bebc33/react-phantom-run-flyknit-2-running-shoe-Djlst6.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/db927636-e781-416d-a2fe-27649100d380/react-phantom-run-flyknit-2-running-shoe-Djlst6.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/f4015f04-1945-4095-b4e7-8d2375f95422/react-phantom-run-flyknit-2-running-shoe-Djlst6.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/89b15914-7746-4a35-a7f2-09f8f97a5d3c/react-phantom-run-flyknit-2-running-shoe-Djlst6.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/aef803c8-af9e-4930-accf-2c3cd13a899d/react-phantom-run-flyknit-2-running-shoe-Djlst6.jpg'
  ],
  price: 185,
  stock: Math.ceil(Math.random(0, 99)*100)
},
{
  id: 37,
  category: 'men',
  name: 'Nike Joyride Dual Run',
  description: "The Nike Joyride Dual Run blazes its own route. Tiny foam beads underfoot are combined with cushioning in the forefoot for an incredibly smooth feel that contours to your foot.",
  imageUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/i1-6493b050-27c8-44c8-886b-d48523e816f3/joyride-dual-run-running-shoe-5Fz5h5.jpg',
  images: [
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-dbf37957-d830-4844-b0bc-86dd267c4bd0/joyride-dual-run-running-shoe-5Fz5h5.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-77406124-bce4-4bc5-b569-28fa6143651b/joyride-dual-run-running-shoe-5Fz5h5.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-dfd113cf-558a-4685-a3f7-381c4c6c04a6/joyride-dual-run-running-shoe-5Fz5h5.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-b605df64-e814-4089-9494-39f99982e4f3/joyride-dual-run-running-shoe-5Fz5h5.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-063ed154-3a8d-41ac-92e1-8dcb9dad773a/joyride-dual-run-running-shoe-5Fz5h5.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-8ae08d97-0a94-4b16-9607-49547d1485e3/joyride-dual-run-running-shoe-5Fz5h5.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-0ebc9dad-6d78-4c18-a85e-ca1cea22aa4d/joyride-dual-run-running-shoe-5Fz5h5.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-63a7b62e-6f41-4739-8ef9-7e0451ceb272/joyride-dual-run-running-shoe-5Fz5h5.jpg'
  ],
  price: 170,
  stock: Math.ceil(Math.random(0, 99)*100)
},
{
  id: 38,
  category: 'men',
  name: 'Nike Premier 2 Sala IC',
  description: "Look ready for small-side scrimmage in the Nike Premier 2 Sala IC. A calfskin overlay on the upper feels soft while providing touch specifically geared to street-style surfaces. Whether you're in the match or off the court, springy Lunarlon foam keeps your foot cushioned in comfort.",
  imageUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/0fae3a8b-4569-4ce9-8fa7-c7e791d2d59a/premier-2-sala-ic-indoor-court-football-shoe-W65Cbq.jpg',
  images: [
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/505e7a12-8f07-4a48-ab3a-e30cb76e78eb/premier-2-sala-ic-indoor-court-football-shoe-W65Cbq.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/09a88bda-d112-4a61-b563-1e79b41aac86/premier-2-sala-ic-indoor-court-football-shoe-W65Cbq.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/785826f2-b103-49f9-aa85-cf41005cb8c8/premier-2-sala-ic-indoor-court-football-shoe-W65Cbq.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/85e2a560-2f64-4bea-a4b2-7f7cc15a3178/premier-2-sala-ic-indoor-court-football-shoe-W65Cbq.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/b76f6940-bba0-46c8-9e83-a89b16e095a8/premier-2-sala-ic-indoor-court-football-shoe-W65Cbq.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/ca4f3a03-dd0c-483f-bde2-02b05ef390aa/premier-2-sala-ic-indoor-court-football-shoe-W65Cbq.jpg'
  ],
  price: 110,
  stock: Math.ceil(Math.random(0, 99)*100)
},
{
  id: 39,
  category: 'men',
  name: 'Nike Tiempo Legend 8 Academy TF',
  description: "The Nike Tiempo Legend 8 Academy TF takes the legendary touch of calfskin leather and adds a grippy rubber outsole for multi-directional traction.",
  imageUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/c311b839-1874-44b1-bdc0-65070063b52f/tiempo-legend-8-academy-tf-artificial-football-shoe-8wt4CZ.jpg',
  images: [
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/3db8848e-30b3-4d6c-b679-3bd83b0fe993/tiempo-legend-8-academy-tf-artificial-football-shoe-8wt4CZ.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/a8033001-adc5-48ea-a26d-0d7c01468b44/tiempo-legend-8-academy-tf-artificial-football-shoe-8wt4CZ.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/4542d690-880b-445f-9e47-92217c2bb716/tiempo-legend-8-academy-tf-artificial-football-shoe-8wt4CZ.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/67a8e83e-97fd-4ae7-b516-196e4d1881fa/tiempo-legend-8-academy-tf-artificial-football-shoe-8wt4CZ.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/010fc371-c517-400d-af89-eae268387bd7/tiempo-legend-8-academy-tf-artificial-football-shoe-8wt4CZ.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/f056d3a1-de2b-4f71-919c-7e2ad84739ba/tiempo-legend-8-academy-tf-artificial-football-shoe-8wt4CZ.jpg'
  ],
  price: 165,
  stock: Math.ceil(Math.random(0, 99)*100)
},
{
  id: 40,
  category: 'men',
  name: 'Nike Renew Fusion',
  description: "The Nike Renew Fusion blends stability, cushioning and durability for high-impact training sessions. A foam sole cushions heavy-weight, high-paced activities, while a midfoot cage locks your foot down to a flat, wide base for stability.",
  imageUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/d1778ec8-9a01-47b6-b5e8-f61bcfae2702/renew-fusion-training-shoe-vJJLDK.jpg',
  images: [
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/93289b99-9f9a-492c-9d6e-8134cbf4aad5/renew-fusion-training-shoe-vJJLDK.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/9101984b-f06d-4088-bd0b-4c52b2816dd6/renew-fusion-training-shoe-vJJLDK.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/b1336848-8c2e-4c12-8206-2127e4155a6b/renew-fusion-training-shoe-vJJLDK.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/cd2ed55a-8c66-451d-bc4e-8d7a24daa4dd/renew-fusion-training-shoe-vJJLDK.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/01406917-fb5d-40f4-98c0-1adde4b3f18b/renew-fusion-training-shoe-vJJLDK.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/b7970583-a1d0-4aa0-97c2-ccee1e650d51/renew-fusion-training-shoe-vJJLDK.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/de44629a-50e8-4d36-9b31-d6b2efca2647/renew-fusion-training-shoe-vJJLDK.jpg'
  ],
  price: 115,
  stock: Math.ceil(Math.random(0, 99)*100)
},


{
  id: 41,
  name: 'Nike Air Max 90 FlyEase',
  category: 'kids',
  description: "Iconic kicks remade for kids to get in and out of quickly? We're in! The Nike Air Max 90 FlyEase is super-easy—stomp on the heel, slip your foot in and watch the shoe pop back into place. So magical that you'll need to feel it to believe it.",
  imageUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/i1-bc3668ac-f851-4247-9fcd-fc6f48caed0e/air-max-90-flyease-older-shoe-0hV9ql.jpg',
  images: [
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-0ed8d03a-d783-43a5-9f04-ef6b66c48bdc/air-max-90-flyease-older-shoe-0hV9ql.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-4b6af0f4-ecca-492f-b831-076a5f445f7c/air-max-90-flyease-older-shoe-0hV9ql.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-b9b1b36f-8209-47b9-bddc-2521a9b4fe17/air-max-90-flyease-older-shoe-0hV9ql.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-cf9c14fc-aa93-41b6-aef6-82cf64990867/air-max-90-flyease-older-shoe-0hV9ql.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-c9ea42ac-be91-46d4-a355-de5b5ffe6d9e/air-max-90-flyease-older-shoe-0hV9ql.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-2c55f587-360a-46fb-a538-e4afbe63f712/air-max-90-flyease-older-shoe-0hV9ql.jpg'
  ],
  price: 130,
  stock: Math.ceil(Math.random(0, 99)*100)
},
{
  id: 42,
  category: 'kids',
  name: 'Nike Air Max 2090',
  description: "The Nike Air Max 2090 celebrates the 30th anniversary of the iconic Air Max 90 release with extreme Air and classic details made right for kiddos.",
  imageUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/i1-7d9e2bdb-06f5-40f2-a849-962de717755a/air-max-2090-older-shoe-DSLvWj.jpg',
  images: [
    'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/i1-6c1a20cb-8ee5-4cd3-914c-194e376a39cc/air-max-2090-older-shoe-DSLvWj.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-908e3c57-5bf5-4835-8544-d431faac88e3/air-max-2090-older-shoe-DSLvWj.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-8352ae6a-135d-4ffe-8692-a040317db933/air-max-2090-older-shoe-DSLvWj.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-8d0b872c-8f84-408b-a711-53ec1b35c9a9/air-max-2090-older-shoe-DSLvWj.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-d9d7851d-acd5-41a2-9711-426f8a851f56/air-max-2090-older-shoe-DSLvWj.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-34e56a69-f07a-4e0f-b566-da253758d3c2/air-max-2090-older-shoe-DSLvWj.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-a61f2208-490c-49c4-b679-509f5fc9ca56/air-max-2090-older-shoe-DSLvWj.jpg'
  ],
  price: 145,
  stock: Math.ceil(Math.random(0, 99)*100)
},
{
  id: 43,
  category: 'kids',
  name: 'Jordan Air Max 200',
  description: "With design elements inspired by the Air Jordan 4, the Jordan Air Max 200 brings a new level of Air to Jordan for all-day comfort.",
  imageUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/i1-eeba15da-bef8-41b4-b128-17b05f24f8e8/jordan-air-max-200-older-shoe-bfZXKD.jpg',
  images: [
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-c49b5154-5640-489a-80ca-8903795db9ed/jordan-air-max-200-older-shoe-bfZXKD.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-05dcf57a-a145-4981-9ec0-85e6ad65f903/jordan-air-max-200-older-shoe-bfZXKD.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-762425c5-7f66-484a-8c10-e4036b790cbb/jordan-air-max-200-older-shoe-bfZXKD.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-f7641c73-a63d-4f5b-b75e-857466fcc734/jordan-air-max-200-older-shoe-bfZXKD.jpg',
    'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/i1-76916463-44a3-44ca-9df2-054d9d3607d0/jordan-air-max-200-older-shoe-bfZXKD.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-34aff85b-70c6-4c30-9444-e5c7a1907d27/jordan-air-max-200-older-shoe-bfZXKD.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-c5e733fc-b8f7-4aa1-b59f-3862e1c47575/jordan-air-max-200-older-shoe-bfZXKD.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-d00926c0-ef50-44db-a6ba-bd9e0e85641b/jordan-air-max-200-older-shoe-bfZXKD.jpg'
  ],
  price: 120,
  stock: Math.ceil(Math.random(0, 99)*100)
},
{
  id: 44,
  category: 'kids',
  name: 'Air Jordan 4 Retro WNTR',
  description: "The unmistakable model from 1989 gets a wintry upgrade with the Air Jordan 4 Retro WNTR. It's got all the original flavour, with fleece-lined areas for warmth and the iconic quarter-panel grid made from perforated synthetic material.",
  imageUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ab2bd32d-0ab7-4977-9033-8bca5bcfa1cd/air-jordan-4-retro-wntr-older-shoe-JMbmjf.jpg',
  images: [
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/7ee665c2-1cc4-440d-9a05-67779ea21fe2/air-jordan-4-retro-wntr-older-shoe-JMbmjf.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/edec07ba-d792-4fa0-9f3e-a62b6339c3c1/air-jordan-4-retro-wntr-older-shoe-JMbmjf.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/667b55be-b3dc-415a-bd64-4d55f6a5d07c/air-jordan-4-retro-wntr-older-shoe-JMbmjf.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/b11398b7-2832-4c22-85cc-e4422acb8a5a/air-jordan-4-retro-wntr-older-shoe-JMbmjf.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/b9f68f47-ff2c-4166-99d5-7f744b063cfa/air-jordan-4-retro-wntr-older-shoe-JMbmjf.jpg'
  ],
  price: 165,
  stock: Math.ceil(Math.random(0, 99)*100)
},
{
  id: 45,
  category: 'kids',
  name: 'Nike SB Stefan Janoski Canvas Premium',
  description: "The Nike SB Stefan Janoski Canvas Premium has a low-profile silhouette that delivers durability, grip and responsive cushioning without sacrificing boardfeel.",
  imageUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/yezv2nfvplr7f5mcwf6r/sb-stefan-janoski-canvas-older-skate-shoe-sngjhm.jpg',
  images: [
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/z4e4p8l1f5bwab991asn/sb-stefan-janoski-canvas-older-skate-shoe-sngjhm.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/agem5bzwo9dkcyum75r8/sb-stefan-janoski-canvas-older-skate-shoe-sngjhm.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/v43fiuppzpsikrz5ax89/sb-stefan-janoski-canvas-older-skate-shoe-sngjhm.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/vnfcl6hhwo1goah45sr4/sb-stefan-janoski-canvas-older-skate-shoe-sngjhm.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/kaarpchylzcrmw30kqcp/sb-stefan-janoski-canvas-older-skate-shoe-sngjhm.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/eu8squ2fdaga44c52htr/sb-stefan-janoski-canvas-older-skate-shoe-sngjhm.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/oadqlbencnvplgsdeinr/sb-stefan-janoski-canvas-older-skate-shoe-sngjhm.jpg'
  ],
  price: 95,
  stock: Math.ceil(Math.random(0, 99)*100)
},
{
  id: 46,
  category: 'kids',
  name: 'Nike SB Charge Canvas',
  description: "The Nike SB Charge Canvas is a flexible skate essential. Breathable canvas hugs your feet while soft foam cushions every step.",
  imageUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/i1-510327ca-86be-4a01-8173-35ed9a322d91/sb-charge-canvas-older-skate-shoe-zrSRN8.jpg',
  images: [
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-9aa4eac3-d75a-4064-84b2-c45eac1cbe36/sb-charge-canvas-older-skate-shoe-zrSRN8.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-d7774069-2cfc-434a-8d8c-de00d1151602/sb-charge-canvas-older-skate-shoe-zrSRN8.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-8728bd65-73a9-436f-aa78-724690a3ee68/sb-charge-canvas-older-skate-shoe-zrSRN8.jpg',
    'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/i1-0136c19e-4d22-4698-ac00-dd91bc2dadb0/sb-charge-canvas-older-skate-shoe-zrSRN8.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-d3ccaa44-b9d5-428f-bea6-3ee98fed0f65/sb-charge-canvas-older-skate-shoe-zrSRN8.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-1314689d-7f25-4ea4-a552-7ed3a3067ba5/sb-charge-canvas-older-skate-shoe-zrSRN8.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-d8f4c57f-1cf4-4fa3-bb2f-b50f5bb6349a/sb-charge-canvas-older-skate-shoe-zrSRN8.jpg'
  ],
  price: 65,
  stock: Math.ceil(Math.random(0, 99)*100)
},
{
  id: 47,
  category: 'kids',
  name: 'Nike Joyride Dual Run',
  imageUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/8bf27cb6-cd23-4a3d-9dcc-bca4d658aa00/joyride-dual-run-older-running-shoe-S8McRF.jpg',
  images: [
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/a057d49a-ff58-4659-9eaa-a0964b3c4141/joyride-dual-run-older-running-shoe-S8McRF.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/8e9f3d28-af4d-46c9-913d-2957717d5475/joyride-dual-run-older-running-shoe-S8McRF.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/66fd770f-fe4c-4275-99a6-2c0134478081/joyride-dual-run-older-running-shoe-S8McRF.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/d714e82b-6dc6-489c-82d5-cf4a1d000b4d/joyride-dual-run-older-running-shoe-S8McRF.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/ac795497-6abe-4531-b0ef-1b6a4dad4af3/joyride-dual-run-older-running-shoe-S8McRF.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/00a37094-18ac-4237-98eb-5febe2115859/joyride-dual-run-older-running-shoe-S8McRF.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/a7030e48-9f78-44c6-a7f2-a17c8f2bf4e5/joyride-dual-run-older-running-shoe-S8McRF.jpg'
  ],
  price: 95,
  stock: Math.ceil(Math.random(0, 99)*100)
},
{
  id: 48,
  category: 'kids',
  name: 'Nike Air Max Sequent 3',
  description: "The Nike Air Max Sequent 3 Older Kids' Shoe combines a Max Air unit in the heel, soft foam cushioning and grooves on the sole for a smooth heel-to-toe step.",
  imageUrl: 'https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/vh2qt1h8jhgyw2tyi7ff/air-max-sequent-3-older-shoe-gXTO91or.jpg',
  images: [
    'https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/nrqkryjnu9zx2p3qdfex/air-max-sequent-3-older-shoe-gXTO91or.jpg',
    'https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/yci0vkvp4dptqd6jmpyn/air-max-sequent-3-older-shoe-gXTO91or.jpg',
    'https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/fenf0ih2pnmrtz3ikaa4/air-max-sequent-3-older-shoe-gXTO91or.jpg',
    'https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/xueockrpn8dwd0mdjssk/air-max-sequent-3-older-shoe-gXTO91or.jpg',
    'https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/cw83fx6qh56sohxildtt/air-max-sequent-3-older-shoe-gXTO91or.jpg'
  ],
  price: 95,
  stock: Math.ceil(Math.random(0, 99)*100)
},
{
  id: 49,
  category: 'kids',
  name: 'Nike Renew Run',
  description: "The Nike Renew Run keeps you moving with soft foam for a cushioned feel. It's also lightweight and breathable so you can stay comfortable while you run and play.",
  imageUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/dcf4e201-94ca-4ced-833e-6800b36e55cf/renew-run-older-running-shoe-L7Kq1k.jpg',
  images: [
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/52c787e4-e7ae-44c9-a76c-10c4248b77e5/renew-run-older-running-shoe-L7Kq1k.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/ee8d6cc4-a090-4510-8697-b93f8f5166ff/renew-run-older-running-shoe-L7Kq1k.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/24a89104-fc83-4a0d-9ff0-205f0915775c/renew-run-older-running-shoe-L7Kq1k.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/36baf476-b834-402a-a30d-4a8a11acb87a/renew-run-older-running-shoe-L7Kq1k.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/deb87162-c323-469d-a616-a5358a36ee3b/renew-run-older-running-shoe-L7Kq1k.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/9b44c8ce-bd5a-4911-a8c6-6cbc5bec5b2a/renew-run-older-running-shoe-L7Kq1k.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/030c20c9-2014-4001-8408-93c2ddd57f1f/renew-run-older-running-shoe-L7Kq1k.jpg'
  ],
  price: 88,
  stock: Math.ceil(Math.random(0, 99)*100)
},
{
  id: 50,
  category: 'kids',
  name: 'Freak 1',
  description: "Find your inner Greek Freak in this debut signature shoe scaled for older kids. Giannis Antetokounmpo's Freak 1 builds in responsive cushioning, forefoot lockdown and multi-directional traction to create a shoe that can keep up with the positionless players of the next generation. 'I am my father's legacy' is printed on the bottom to give you a peek into the Greek Freak's inspiration.",
  imageUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/i1-3c21de03-4273-4381-b5d5-bec6daadda75/freak-1-older-shoe-MtXdG4.jpg',
  images: [
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-76a20b80-3f37-4c16-bdb0-908496c730d7/freak-1-older-shoe-MtXdG4.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-43562772-efdc-4332-8554-c376e7f24007/freak-1-older-shoe-MtXdG4.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-13671856-0e5e-4b6f-9707-ed6ae8124a2f/freak-1-older-shoe-MtXdG4.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-a1decbed-7000-4f19-9597-8fcaf3d0448c/freak-1-older-shoe-MtXdG4.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-7de3699b-220e-4941-a90c-d75b67c94622/freak-1-older-shoe-MtXdG4.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-95aa54bd-bc66-4d0b-ba62-b9ccf4c7de27/freak-1-older-shoe-MtXdG4.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-361b2e8d-f26c-48f7-889c-bf43101bb362/freak-1-older-shoe-MtXdG4.jpg'
  ],
  price: 120,
  stock: Math.ceil(Math.random(0, 99)*100)
},
{
  id: 51,
  category: 'kids',
  name: 'Nike Jr. Phantom Vision 2 Elite Dynamic Fit MG',
  description: "The Nike Jr. Phantom Vision 2 Elite Dynamic Fit MG brings a new level of fierce precision to the pitch. A comfortable inner sleeve is concealed in a Flyknit constructed outer layer to create a boot for the finishers, the providers and the battlers of tomorrow's game.",
  imageUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/6cd02718-643d-4e78-b253-a88ba9c53c3f/jr-phantom-vision-2-elite-dynamic-fit-mg-older-multi-ground-football-boot-fnbg1f.jpg',
  images: [
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/a8eda8f7-d40a-4c6b-a239-a695eb7eb572/jr-phantom-vision-2-elite-dynamic-fit-mg-older-multi-ground-football-boot-fnbg1f.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/871db434-8dfb-4903-bdb7-ba919bbd8f85/jr-phantom-vision-2-elite-dynamic-fit-mg-older-multi-ground-football-boot-fnbg1f.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/78126324-e2f9-4e38-b8e5-df26df8e73c3/jr-phantom-vision-2-elite-dynamic-fit-mg-older-multi-ground-football-boot-fnbg1f.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/ae03b968-de0a-4195-a4ad-15ddee83e650/jr-phantom-vision-2-elite-dynamic-fit-mg-older-multi-ground-football-boot-fnbg1f.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/2a215afb-d23a-4d37-be39-543c1477020e/jr-phantom-vision-2-elite-dynamic-fit-mg-older-multi-ground-football-boot-fnbg1f.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/e4707b26-d4f6-40e0-9980-0192f70df338/jr-phantom-vision-2-elite-dynamic-fit-mg-older-multi-ground-football-boot-fnbg1f.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/f10d598a-818d-488c-b947-b5ebef54f80a/jr-phantom-vision-2-elite-dynamic-fit-mg-older-multi-ground-football-boot-fnbg1f.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/3ee3e628-2b76-42ac-90ae-c38088d2b1a4/jr-phantom-vision-2-elite-dynamic-fit-mg-older-multi-ground-football-boot-fnbg1f.jpg'
  ],
  price: 230,
  stock: Math.ceil(Math.random(0, 99)*100)
},
{
  id: 52,
  category: 'kids',
  name: 'Nike Jr. Mercurial Vapor 13 Club IC',
  description: "The Nike Jr. Mercurial Vapor 13 Club IC Shoe wraps your foot for streamlined speed on the street, court or on indoor surfaces.",
  imageUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/4a4418a5-4937-4598-b4fe-79005ae3f240/jr-mercurial-vapor-13-club-ic-younger-older-indoor-court-football-shoe-hg2QPd.jpg',
  images: [
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/d4be786a-e5cf-4560-9b61-65cab43cd789/jr-mercurial-vapor-13-club-ic-younger-older-indoor-court-football-shoe-hg2QPd.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/84087476-2999-40e9-a1eb-0e18e942e167/jr-mercurial-vapor-13-club-ic-younger-older-indoor-court-football-shoe-hg2QPd.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/5635f345-097c-406d-8edd-9d9faac3a0db/jr-mercurial-vapor-13-club-ic-younger-older-indoor-court-football-shoe-hg2QPd.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/81b2b86d-54e7-4982-8202-ae543da3a65e/jr-mercurial-vapor-13-club-ic-younger-older-indoor-court-football-shoe-hg2QPd.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/a3a9530e-ca3d-412e-b2a0-e6af1cda9f9b/jr-mercurial-vapor-13-club-ic-younger-older-indoor-court-football-shoe-hg2QPd.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/8d52c61b-c86b-478c-92cf-7d31481299bd/jr-mercurial-vapor-13-club-ic-younger-older-indoor-court-football-shoe-hg2QPd.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/b8ef8db6-42a8-42a8-b7a6-2d169a381768/jr-mercurial-vapor-13-club-ic-younger-older-indoor-court-football-shoe-hg2QPd.jpg'
  ],
  price: 58,
  stock: Math.ceil(Math.random(0, 99)*100)
},
{
  id: 53,
  category: 'kids',
  name: 'Nike Roshe G Jr.',
  description: "The Nike Roshe G Jr features a pressure-mapped outsole that provides traction in key zones. Inspired by the original, iconic Roshe, the mesh upper offers breathability and a modern look, while the soft, flexible, foam midsole cushions every step.",
  imageUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/dq3u4otw1s3s3t6cweci/roshe-g-jr-golf-shoe-Q18nHr.jpg',
  images: [
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/fl24wuuout4chycscupj/roshe-g-jr-golf-shoe-Q18nHr.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/e1vdbhk3smhvmfztffv6/roshe-g-jr-golf-shoe-Q18nHr.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/z5nlujdbqavaza8xbh4i/roshe-g-jr-golf-shoe-Q18nHr.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/msnkmnr27cu2hpbdnxwe/roshe-g-jr-golf-shoe-Q18nHr.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/ldgwpxmr4tvxpe6vtjdj/roshe-g-jr-golf-shoe-Q18nHr.jpg'
  ],
  price: 85,
  stock: Math.ceil(Math.random(0, 99)*100)
},
{
  id: 54,
  category: 'kids',
  name: 'Nike Revolution 5',
  description: "Run and play in the Nike Revolution 5. Lightweight mesh stretches around your feet, and soft foam cushioning gives you revolutionary comfort.",
  imageUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ee6ec311-c9b0-40a3-90db-aa6e3b56e9f1/revolution-5-older-running-shoe-6WcfZl.jpg',
  images: [
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/daa408f3-814c-43b1-a8c3-853ed4945eb4/revolution-5-older-running-shoe-6WcfZl.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/b0755227-26d1-4476-ac36-854adcfa204d/revolution-5-older-running-shoe-6WcfZl.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/9ff10075-2774-4d09-a1f8-ef6ce58574db/revolution-5-older-running-shoe-6WcfZl.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/a782a2c1-0421-49cb-9b06-f6cecd794439/revolution-5-older-running-shoe-6WcfZl.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/bd55ba5b-7dce-4011-be0f-179ae5b24144/revolution-5-older-running-shoe-6WcfZl.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/52b2264b-4e48-485e-9845-4cb61770298b/revolution-5-older-running-shoe-6WcfZl.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/9c51f019-c405-4bf5-9cb8-7b91ce4e53a1/revolution-5-older-running-shoe-6WcfZl.jpg'
  ],
  price: 90,
  stock: Math.ceil(Math.random(0, 99)*100)
},
{
  id: 55,
  category: 'kids',
  name: 'NikeCourt Jr. Lite 2',
  description: "The NikeCourt Jr. Lite 2 is designed to cushion and support your feet during training and play. The rubber outsole features 5 distinctive patterns. Each pattern is designed to visually outline 1 of the 5 basic movements new tennis players learn.",
  imageUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ojpdfynzajet5h2k349p/nikecourt-jr-lite-2-older-tennis-shoe-QtvRPw.jpg',
  images: [
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/lzi9qv8ymacrbdqinrv6/nikecourt-jr-lite-2-older-tennis-shoe-QtvRPw.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/z9jukn9cgj2ncbgshwo3/nikecourt-jr-lite-2-older-tennis-shoe-QtvRPw.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/uwjl832ttnyiilotw8gz/nikecourt-jr-lite-2-older-tennis-shoe-QtvRPw.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/ondhshtdj324qpuj7qbb/nikecourt-jr-lite-2-older-tennis-shoe-QtvRPw.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/eklgrglavcuv2ks4bmk0/nikecourt-jr-lite-2-older-tennis-shoe-QtvRPw.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/o3dmdhfjwzp82yjurxfq/nikecourt-jr-lite-2-older-tennis-shoe-QtvRPw.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/nrxlnjtq20r2zoaim9ke/nikecourt-jr-lite-2-older-tennis-shoe-QtvRPw.jpg'
  ],
  price: 58,
  stock: Math.ceil(Math.random(0, 99)*100)
},
{
  id: 56,
  category: 'kids',
  name: 'NikeCourt Jr. Vapor X',
  description: "Step into ultimate comfort in the NikeCourt Jr. Vapor X. Breathable mesh helps your feet stay cool and dry, while supportive overlays hug your foot during quick cuts and fast sprints.",
  imageUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/6418f167-60c4-41eb-bef1-1c131c229ebd/nikecourt-jr-vapor-younger-older-tennis-shoe-LzH2Bm.jpg',
  images: [
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/5dc81379-de03-431f-909d-f11645556ccb/nikecourt-jr-vapor-younger-older-tennis-shoe-LzH2Bm.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/c93cd5c2-a658-484d-93d4-3c6ed39ee042/nikecourt-jr-vapor-younger-older-tennis-shoe-LzH2Bm.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/3691bd84-d940-4572-aa61-0eb8597246ea/nikecourt-jr-vapor-younger-older-tennis-shoe-LzH2Bm.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/7109e6a3-90d1-45b6-9048-0e3171c130e9/nikecourt-jr-vapor-younger-older-tennis-shoe-LzH2Bm.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/7cd3b51e-eda7-4f64-9461-6e09ca845d48/nikecourt-jr-vapor-younger-older-tennis-shoe-LzH2Bm.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/22a33bed-0cd9-4e12-98ad-13f31a0bd2fc/nikecourt-jr-vapor-younger-older-tennis-shoe-LzH2Bm.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/515a40ad-6814-4ea7-bf1f-3b805355ff71/nikecourt-jr-vapor-younger-older-tennis-shoe-LzH2Bm.jpg'
  ],
  price: 95,
  stock: Math.ceil(Math.random(0, 99)*100)
},
{
  id: 57,
  category: 'kids',
  name: 'Freak 1 Employee of the Month',
  description: "Get your freak on in Giannis Antetokounmpo's debut signature shoe, Nike's first-ever for the international basketball sensation. The Freak 1 has the forefoot lockdown and multi-directional traction needed to complement his freakishly athletic game.",
  imageUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b3c197d7-ee54-4f8f-9eb3-0fdaac6ff21e/freak-1-employee-of-month-older-basketball-shoe-gdHdXS.jpg',
  images: [
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/5e6b93f5-3cfc-4650-902f-f39aed125f0c/freak-1-employee-of-month-older-basketball-shoe-gdHdXS.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/ed577119-3175-4d96-825a-8c810c0f1c47/freak-1-employee-of-month-older-basketball-shoe-gdHdXS.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/e7c866be-fd11-41f7-baa1-6eb4ce53da47/freak-1-employee-of-month-older-basketball-shoe-gdHdXS.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/6da3e5ea-c4cf-48ee-b573-fc58739c189a/freak-1-employee-of-month-older-basketball-shoe-gdHdXS.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/e7c6ca11-db54-47cf-9015-7233ec658784/freak-1-employee-of-month-older-basketball-shoe-gdHdXS.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/fc9e8094-46bf-4c73-8387-9e96b9fdac2c/freak-1-employee-of-month-older-basketball-shoe-gdHdXS.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/1686effb-25d8-4f74-8bb4-e900e9213595/freak-1-employee-of-month-older-basketball-shoe-gdHdXS.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/d0a794a8-7ff9-42d4-8bec-34551ca01856/freak-1-employee-of-month-older-basketball-shoe-gdHdXS.jpg'
  ],
  price: 120,
  stock: Math.ceil(Math.random(0, 99)*100)
},
{
  id: 58,
  category: 'kids',
  name: 'Air Jordan 1 Mid',
  description: "The Air Jordan 1 Mid Older Kids' Shoe brings full-court style and premium comfort with an iconic look. A comfortable upper combines with time-tested cushioning for street-ready style on and off the court.",
  imageUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/awk6ukg8ma8bssqd2cga/air-jordan-1-mid-older-shoe-ZwTAwrwx.jpg',
  images: [
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/auz2f3hh9niwy1rgdjip/air-jordan-1-mid-older-shoe-ZwTAwrwx.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/tepnwxv1c90fimophirn/air-jordan-1-mid-older-shoe-ZwTAwrwx.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/anwvy0nfufyhgnnedmoc/air-jordan-1-mid-older-shoe-ZwTAwrwx.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/k7wkmdeu45qdpkrwiaci/air-jordan-1-mid-older-shoe-ZwTAwrwx.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/fub8lepqouxdi88n1m8m/air-jordan-1-mid-older-shoe-ZwTAwrwx.jpg'
  ],
  price: 105,
  stock: Math.ceil(Math.random(0, 99)*100)
},
{
  id: 59,
  category: 'kids',
  name: 'Nike Revolution 5 FlyEase',
  description: "Run and play in the Nike Revolution 5. FlyEase technology has a strap and zip that wraps around the heel so you can easily take the shoe on and off. Lightweight mesh and foam cushioning give you revolutionary comfort.",
  imageUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ebe0f21e-0cb0-44eb-85d2-db8f463fedd1/revolution-5-flyease-older-running-shoe-Dgz4hr.jpg',
  images: [
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/8a1224f2-5a8b-4a6e-820c-30597a1b7a1c/revolution-5-flyease-older-running-shoe-Dgz4hr.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/31565200-aa2c-4d74-94bd-7b860c893c66/revolution-5-flyease-older-running-shoe-Dgz4hr.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/2e105985-ed06-4c14-a324-e6211b66bd27/revolution-5-flyease-older-running-shoe-Dgz4hr.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/78cf125a-f178-46df-b0e3-d37c0b8ce164/revolution-5-flyease-older-running-shoe-Dgz4hr.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/fc83efb7-5b10-4072-82ee-c9a6de77c540/revolution-5-flyease-older-running-shoe-Dgz4hr.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/87bbaf1d-7628-4dd0-ac03-c3ee86e4b6c2/revolution-5-flyease-older-running-shoe-Dgz4hr.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/f8be4dec-9a81-40fd-b127-e6a351817824/revolution-5-flyease-older-running-shoe-Dgz4hr.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/e5f72daf-110a-4852-ad38-35cff0df55f2/revolution-5-flyease-older-running-shoe-Dgz4hr.jpg'
  ],
  price: 70,
  stock: Math.ceil(Math.random(0, 99)*100)
},
{
  id: 60,
  category: 'kids',
  name: 'Nike Star Runner 2',
  description: "Shoot for the stars in the Nike Star Runner 2. It's lightweight and durable for out-of-this-world comfort. Peek underneath to reveal stars moulded into the sole to help you orbit around your next route.",
  imageUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ggkegecz2fj0uxf9d4om/star-runner-2-older-running-shoe-CcvWQp.jpg',
  images: [
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/nb2es8ydztw8fzayxlxy/star-runner-2-older-running-shoe-CcvWQp.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/hiyp9jtm3exrfyy47wvg/star-runner-2-older-running-shoe-CcvWQp.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/rgcjm4lkeb4g1ofjubvx/star-runner-2-older-running-shoe-CcvWQp.jpg',
    'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/gq5prgmpmq36lif7bune/star-runner-2-older-running-shoe-CcvWQp.jpg',
    'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/wphcf3gfl2waiyh00nhw/star-runner-2-older-running-shoe-CcvWQp.jpg'
  ],
  price: 65,
  stock: Math.ceil(Math.random(0, 99)*100)
}

]


const seed = async () => {
    await Product.insertMany(SHOP_DATA)
    console.log('Data Imported!')
    process.exit()
}

seed()


export default SHOP_DATA

import connectDB from "./config/db.js";
// import dotenv from "dotenv";
import Product from "./models/productModel.js";

// dotenv.config();

connectDB();

const SHOP_DATA = [
	{
		id: 1,
		type: "Women's Running Shoe",
		category: "women",
		name: "Nike Zoom Pegasus Turbo 2",
		description:
			"The Nike Zoom Pegasus Turbo 2 is updated with a feather-light upper, while innovative foam brings revolutionary responsiveness to your long-distance training.",
		imageUrl:
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/wvmovmshpndwztxisa32/zoom-pegasus-turbo-2-running-shoe-PDDCHc.jpg",
		price: 235,
	},
	{
		id: 2,
		type: "Women's Shoe",
		category: "women",
		name: "Nike Joyride Run Flyknit",
		description:
			"The Nike Joyride Run Flyknit is designed to help make running feel easier and give your legs a day off. Tiny foam beads underfoot contour to your foot for cushioning that stands up to your mileage.",
		imageUrl:
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/e4i53xwtw6gyjufm6mym/joyride-run-flyknit-running-shoe-9R1ktX.jpg",
		price: 235,
	},
	{
		id: 3,
		type: "Women's Running Shoe",
		category: "women",
		name: "Nike React Infinity Run Flyknit",
		description:
			"The Nike React Infinity Run Flyknit is designed to keep you on the run. More foam and improved upper details provide a secure and cushioned feel. Lace up and feel the potential as you hit the road.",
		imageUrl:
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/i1-ceb52d30-900c-4220-a3e8-16022953e28a/react-infinity-run-flyknit-running-shoe-pl6fKJ.jpg",
		price: 215,
	},
	{
		id: 4,
		type: "Women's Shoe",
		category: "women",
		name: 'Nike Air Max 270 React ("Psychedelic Movement")',
		description:
			"Follow the path between consciousness and subconscious in your psychedelic art-inspired Nike Air Max 270 React. It fuses colours of electric sunsets and dancing flowers, while soft cushioning takes you into the clouds.",
		imageUrl:
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/x2ihxsan4qjrvirja1lm/air-max-270-react-shoe-GCcKSq.jpg",
		price: 195,
	},
	{
		id: 5,
		type: "Women's Shoe",
		category: "women",
		name: "Nike React Element 55 Premium",
		description:
			"The Nike React Element 55 is a balanced blend of classic design and forward-looking innovation. Nike React foam delivers lightweight, bouncy comfort, while rubber outsole pods and an exaggerated outsole offer a cutting-edge look that begs a reaction.",
		imageUrl:
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/lzztwyeow1jqb2crwqp3/react-element-55-shoe-7sd1ql.jpg",
		price: 185,
	},
	{
		id: 6,
		type: "Women's Shoe",
		category: "women",
		name: "Nike Air Max Dia Icon Clash",
		description:
			"The Nike Air Max Dia Icon Clash delivers a lifted look and airy aesthetic in a sleek shape. The minimal upper modernises the look, while a Max Air unit, surrounded by clear TPU, is amplified even further by an exaggerated midsole for a boost of style.",
		imageUrl:
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/lmq0c0cqcpekuk7ejzxb/air-max-dia-icon-clash-shoe-VzvlcR.jpg",
		price: 145,
	},
	{
		id: 7,
		type: "Women's Shoe",
		category: "women",
		name: "Nike Air Max Dia SE",
		description:
			"The Nike Air Max Dia SE features sleek lines and a sheer upper that combine classic Air Max elements into a lightweight, comfy and versatile icon. Together with its smart toe-down profile and extra lift, the Nike Air Max Dia SE offers an ever-bigger expression of Nike Air.",
		imageUrl:
			"https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/wiikh0vridjk9q2bs7ez/air-max-dia-se-shoe-SX3F1x.jpg",
		price: 155,
	},
	{
		id: 8,
		type: "Women's Shoe",
		category: "women",
		name: "Air Jordan 1 Mid SE",
		description:
			"A new, colourful spin on an icon. The Air Jordan 1 Mid SE gives you the unmistakable style and attitude of the original AJ1 with a fit that's updated for versatility.",
		imageUrl:
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/i1-2dbe5f8c-ea37-43a1-a643-31a0ed9c2e64/air-jordan-1-mid-se-shoe-pbLqN5.jpg",
		price: 165,
	},
	{
		id: 9,
		type: "Women's Running Shoe",
		category: "women",
		name: "Nike Epic React Flyknit 2",
		description:
			"The Nike Epic React Flyknit 2 takes a step up from its predecessor with smooth, lightweight performance and a bold look. An updated Flyknit upper contours to your foot with a minimal, supportive design. Underfoot, durable Nike React technology defies the odds by being both soft and responsive, for comfort that lasts as long as you can run.",
		imageUrl:
			"https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/csdbpwsgablm58zc2cgf/epic-react-flyknit-2-running-shoe-03DmKd.jpg",
		price: 195,
	},
	{
		id: 10,
		type: "Women's Trail Running Shoe",
		category: "women",
		name: "Nike Wildhorse 6",
		description:
			"The Nike Wildhorse 6 keeps it stable, secure and lightweight on the trail. An updated outsole delivers the traction you need, while a foam midsole keeps you cushioned on your run.",
		imageUrl:
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/i1-70e85685-d1fa-4ad9-a74c-ce1209adc64d/wildhorse-6-trail-running-shoe-1PJkl2.jpg",
		price: 170,
	},
	{
		id: 11,
		type: "Basketball Shoe",
		category: "women",
		name: "Nike Air Force Max II",
		description:
			"The game has gone small, so bigs have to be faster, more agile and more versatile to stay relevant. Keeping pace with ever-evolving player needs, the Nike Air Force Max II provides the responsive cushioning that allows big players to keep crashing the boards and banging in the post, while helping them stay light and quick on the break.",
		imageUrl:
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/f1b41126-3c6d-479b-9012-5296c261531f/air-force-max-ii-basketball-shoe-ZXgnrV.jpg",
		price: 165,
	},
	{
		id: 12,
		type: "Women's Training Shoe",
		category: "women",
		name: "Nike SuperRep Go",
		description:
			"The Nike SuperRep Go combines comfortable foam cushioning, flexibility and support to get you moving in circuit-based fitness classes or while streaming workouts at home.",
		imageUrl:
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/65acdb60-b5ff-403a-b5f4-b51d769741f6/superrep-go-training-shoe-4RH1PB.jpg",
		price: 135,
	},
	{
		id: 13,
		type: "Women's Training Shoe",
		category: "women",
		name: "Nike Air Max Bella TR 3",
		description:
			"The Nike Air Max Bella TR 3 provides stable, comfortable cushioning for weightlifting and circuit training. Lightweight mesh lets your feet breathe, and the laces secure your foot.",
		imageUrl:
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/i1-49103d44-fa72-47b3-ae12-27cef8f55373/air-max-bella-tr-3-training-shoe-P9GLBR.jpg",
		price: 105,
	},
	{
		id: 14,
		type: "Women's Training Shoe",
		category: "women",
		name: "Nike React Metcon AMP",
		description:
			"The Nike React Metcon AMP takes the stability and traction from the original and pairs it with React foam, Nike's most comfortable cushioning. It feels soft and springy with a breathable upper, but it's still stable enough to tackle lifting and high-impact workouts. A glow-in-the-dark rubber sole climbs up the side of the shoe for durability and extra grip during rope climbs.",
		imageUrl:
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b0fcfd71-248d-491c-bd42-8652c3cd7d7e/react-metcon-amp-training-shoe-B1cmnb.jpg",
		price: 215,
	},
	{
		id: 15,
		type: "Women's Shoe",
		category: "women",
		name: "Air Jordan 2 Retro",
		description:
			"Featuring bold colour-blocking inspired by MJ's most formidable rivals, the Air Jordan 2 Retro for women re-energises the '86 original. Its luxurious upper uses a clashing mix of textiles and leathers for a unique look and feel.",
		imageUrl:
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/i1-b3190605-c6c8-4fc8-8e82-d09d2ced4c6c/air-jordan-2-retro-shoe-HTcK0B.jpg",
		price: 255,
	},
	{
		id: 16,
		type: "Women's Golf Shoe",
		category: "women",
		name: "Nike Air Max 1 G",
		description:
			"The Nike Air Max 1 G reinvents an icon with details made for the course. A visible Max Air unit cushions every step while creating a look that transitions seamlessly from the course to the concrete.",
		imageUrl:
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/hudbhybztzrxpwbyhbnr/air-max-1-g-golf-shoe-hQXK8B.jpg",
		price: 160,
	},
	{
		id: 17,
		type: "Women's Golf Shoe",
		category: "women",
		name: "Nike Roshe G",
		description:
			"Inspired by a Nike icon, the Nike Roshe G elevates your look with plush, breathable materials. Its integrated traction pattern means you won't lose time transitioning from the course to the concrete.",
		imageUrl:
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/n2oj5vj4yj6dqxxhuo3a/roshe-g-golf-shoe-XvZcGV.jpg",
		price: 110,
	},
	{
		id: 18,
		type: "Women's Tennis Shoe",
		category: "women",
		name: "NikeCourt Air Zoom Zero",
		description:
			"Featuring the first full-length Zoom Air unit in NikeCourt history, the NikeCourt Air Zoom Zero delivers exceptional responsiveness and great court feel. Its fabric and synthetic upper with a customisable lacing system offers second-skin-like comfort.",
		imageUrl:
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/fawrirbpmqh0eqz4odzz/nikecourt-air-zoom-zero-tennis-shoe-2Qfmnm.jpg",
		price: 175,
	},
	{
		id: 19,
		type: "Women's Tennis Shoe",
		category: "women",
		name: "NikeCourt Flare 2",
		description:
			"As our only female-specific design, the NikeCourt Flare 2 QS takes inspiration from Serena Williams' on-court shoe. It combines speed and style with lightweight cushioning and a supportive lacing system.",
		imageUrl:
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/k7virvtnbzgomtwxxflt/nikecourt-flare-2-hard-court-tennis-shoe-JGVBm4.jpg",
		price: 165,
	},
	{
		id: 20,
		type: "Racing Shoe",
		category: "women",
		name: "Nike Zoom Victory 3",
		description:
			"The Nike Zoom Victory 3 Racing Spike features a minimal design for an ultra-lightweight feel and innovative spike plate that combines zones of stiffness and flexibility for incredible propulsion. Ideal for 1500m to 5K events.",
		imageUrl:
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ef815e2e-11e2-4b74-83eb-89bab09512a3/zoom-victory-3-racing-shoe-7BTDPz90.jpg",
		price: 165,
	},
	{
		id: 21,
		name: "NikeCourt Tech Challenge 20",
		type: "Men's Tennis Shoe",
		category: "men",
		description:
			"Celebrating the 30th anniversary of the Nike Air Tech Challenge 2, the NikeCourt Tech Challenge 20 puts a modern spin on an iconic court shoe. You'll get the same vibrant graphics found on the original design with the added comfort of modern materials.",
		imageUrl:
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/i1-dbccc8c2-7c28-4a75-9379-d5fac2c81188/nikecourt-tech-challenge-20-tennis-shoe-b4KfJ1.jpg",
		price: 165,
	},
	{
		id: 22,
		name: "Nike Phantom Vision Elite Dynamic Fit FG",
		type: "Firm-Ground Football Boot",
		category: "men",
		description:
			"The Nike Phantom Vision Elite Dynamic Fit FG brings the fierce precision of street play to the pitch. A foot-hugging inner sleeve is concealed in a Flyknit constructed outer layer to create a boot for the finishers, the providers and the battlers of tomorrow's game.",
		imageUrl:
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/m4fwi6gc1ufrk9wbfxnr/phantom-vision-elite-dynamic-fit-fg-football-boot-zhhjXk.jpg",
		price: 360,
	},
	{
		id: 23,
		type: "Training Shoe",
		category: "men",
		name: "Nike Metcon 5 AMP",
		description:
			"The Nike Metcon 5 AMP arms you with stability for heavy lifting and traction for sprints during high-impact training. It combines breathability and durability to be your secret weapon in the gym.",
		imageUrl:
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/i1-fe8f87b9-e08a-4762-be12-4b50ddb5acbe/metcon-5-amp-training-shoe-9SMJ9m.jpg",
		price: 165,
	},
	{
		id: 24,
		type: "Men's Skate Shoe",
		category: "men",
		name: "Nike SB Air Max Stefan Janoski 2",
		description:
			"The Nike SB Air Max Stefan Janoski 2 hugs your foot with a breathable textile upper. A Max Air unit in the heel cushions every step, while a flat rubber outsole optimises grip when you're on your board.",
		imageUrl:
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/dpwuzaavztberafce5bd/sb-air-max-stefan-janoski-2-skate-shoe-s05dbb.jpg",
		price: 145,
	},
	{
		id: 25,
		type: "Skate Shoe",
		category: "men",
		name: "Nike SB GTS Return Premium",
		description:
			"Infused with Nike DNA, the Nike SB GTS Return Premium puts an iconic spin on a classic skate silhouette. Its reinvented design updates the classic cupsole for a more flexible, lightweight feel right out of the box.",
		imageUrl:
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/c2073dc7-7290-4d9f-b839-395f6aa5f740/sb-gts-return-skate-shoe-d2B7J5.jpg",
		price: 120,
	},
	{
		id: 26,
		type: "Golf Shoe",
		category: "men",
		name: "Nike React Infinity Pro",
		description:
			"Built with revolutionary cushioning and innovative traction, the Nike React Infinity Pro gives you the support, comfort and grip you need to play at your best.",
		imageUrl:
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/i1-825ac313-6bb1-4866-9295-14da3de7b9ed/react-infinity-pro-golf-shoe-DPBNlg.jpg",
		price: 160,
	},
	{
		id: 27,
		name: "Nike Air Max 270 React",
		type: "Men's shoe",
		category: "men",
		description:
			"The bold silhouette of Nike Air lifts the Nike Air Max 270 React to new heights, while the Nike React foam midsole delivers exceptional cushioning. Imagine all-day comfort with unstoppable style.",
		imageUrl:
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/qohsnboimfosmm7tw4dx/air-max-270-react-shoe-kZBR2B.jpg",
		price: 195,
	},
	{
		id: 28,
		name: "Nike Air Max 2090",
		type: "Men's shoe",
		category: "men",
		description:
			"Bring the past into the future with the Nike Air Max 2090, a bold look inspired by the DNA of the iconic Air Max 90. Brand-new Nike Air cushioning underfoot adds unparalleled comfort while transparent fabric on the upper is blended with timeless OG features for an edgy, modernised look.",
		imageUrl:
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b5caf032-fd90-4baa-bd11-75e2c97e39e2/air-max-2090-shoe-X3ztPn.jpg",
		price: 195,
	},
	{
		id: 29,
		name: "Nike SuperRep Go",
		type: "Men's Training shoe",
		category: "men",
		description:
			"The Nike SuperRep Go combines comfortable foam cushioning, flexibility and support to get you moving in circuit-based fitness classes or while streaming workouts at home.",
		imageUrl:
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/i1-e887d5c3-44f4-42fb-be9b-8e19cbd2f1a7/superrep-go-training-shoe-WxK0Dl.jpg",
		price: 135,
	},
	{
		id: 30,
		name: "LeBron 17",
		type: "Basketball Shoe",
		category: "men",
		description:
			"The LeBron 17 harnesses LeBron's strength and speed with containment and support for all-court domination. It features a lightweight mix of knit and heat-moulded yarns that gives each one a durable look and feel. Combined cushioning provides LeBron with the impact support and responsive energy return he needs to power through the long season.",
		imageUrl:
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/u30ipllzikle4oj5uwli/lebron-17-basketball-shoe-FKCmbK.jpg",
		price: 260,
	},
	{
		id: 31,
		name: "PG 4",
		type: "Basketball shoe",
		category: "men",
		description:
			"Paul George is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivalled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.",
		imageUrl:
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/i1-5968d983-afa3-43f8-b3c9-803941e88956/pg-4-basketball-shoe-4NzGtl.jpg",
		price: 145,
	},
	{
		id: 32,
		name: "Nike Air Zoom Pegasus 36 Trail",
		type: "Men's Trail Running Shoe",
		category: "men",
		description:
			"An icon trades pavement for path with the Nike Air Zoom Pegasus 36 Trail. A perforated mesh upper adds breathability, as double Zoom Air units underfoot cushion your stride. Opposing lugs on the outsole optimise traction on your uphill climbs.",
		imageUrl:
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/06799cfa-f860-4a95-995d-71f2b9f3a5e2/air-zoom-pegasus-36-trail-trail-running-shoe-zdtVpM.jpg",
		price: 165,
	},
	{
		id: 33,
		type: "Men's Golf Shoe",
		category: "men",
		name: "Nike Air Zoom Victory",
		description:
			"Crafted for comfort, the Nike Air Zoom Victory pairs a Zoom Air unit with a plush sockliner for responsive cushioning, round after round. The Oxford-inspired upper helps support your foot through your swing.",
		imageUrl:
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/e8nijvkyqrnojkqgzvbk/air-zoom-victory-golf-shoe-kpLkwt.jpg",
		price: 120,
	},
	{
		id: 34,
		type: "Men's Golf Shoe",
		category: "men",
		name: "Jordan ADG",
		description:
			"The Jordan ADG optimises cushioning and ground feel, creating an innovative experience on the course. Its plush midsole and flexible outsole let your feet bend naturally through your swing.",
		imageUrl:
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/jxveg4jonioh5suqv60q/jordan-adg-golf-shoe-Jd9Psb.jpg",
		price: 180,
	},
	{
		id: 35,
		type: "Men's Running Shoe",
		category: "men",
		name: "Nike React Infinity Run Flyknit A.I.R.",
		description:
			"The Nike React Infinity Run Flyknit is designed to help reduce injury and keep you on the run. More foam and improved upper details provide a secure and cushioned feel. Lace up and feel the potential as you hit the road.",
		imageUrl:
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/8871efc3-d28e-47dc-b267-132e5f0a4ad5/react-infinity-run-flyknit-air-running-shoe-v9LwlL.jpg",
		price: 215,
	},
	{
		id: 36,
		type: "Men's Running Shoe",
		category: "men",
		name: "Nike React Phantom Run Flyknit 2",
		description:
			"The Nike React Phantom Run Flyknit 2 offers versatility for the everyday runner. Building on the foundation of its predecessor, the shoe expands on its laceless design by adding secure support that feels like it 'disappears' on your foot. More foam means better cushioning, keeping you comfortable as you run.",
		imageUrl:
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ea103b88-07c0-4f45-b6e7-4aa52e76af2c/react-phantom-run-flyknit-2-running-shoe-Djlst6.jpg",
		price: 185,
	},
	{
		id: 37,
		type: "Running Shoe",
		category: "men",
		name: "Nike Joyride Dual Run",
		description:
			"The Nike Joyride Dual Run blazes its own route. Tiny foam beads underfoot are combined with cushioning in the forefoot for an incredibly smooth feel that contours to your foot.",
		imageUrl:
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/i1-6493b050-27c8-44c8-886b-d48523e816f3/joyride-dual-run-running-shoe-5Fz5h5.jpg",
		price: 170,
	},
	{
		id: 38,
		type: "Indoor Court Football Shoe",
		category: "men",
		name: "Nike Premier 2 Sala IC",
		description:
			"Look ready for small-side scrimmage in the Nike Premier 2 Sala IC. A calfskin overlay on the upper feels soft while providing touch specifically geared to street-style surfaces. Whether you're in the match or off the court, springy Lunarlon foam keeps your foot cushioned in comfort.",
		imageUrl:
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/0fae3a8b-4569-4ce9-8fa7-c7e791d2d59a/premier-2-sala-ic-indoor-court-football-shoe-W65Cbq.jpg",
		price: 110,
	},
	{
		id: 39,
		type: "Artificial-Turf Football Shoe",
		category: "men",
		name: "Nike Tiempo Legend 8 Academy TF",
		description:
			"The Nike Tiempo Legend 8 Academy TF takes the legendary touch of calfskin leather and adds a grippy rubber outsole for multi-directional traction.",
		imageUrl:
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/c311b839-1874-44b1-bdc0-65070063b52f/tiempo-legend-8-academy-tf-artificial-football-shoe-8wt4CZ.jpg",
		price: 165,
	},
	{
		id: 40,
		type: "Men's Training Shoe",
		category: "men",
		name: "Nike Renew Fusion",
		description:
			"The Nike Renew Fusion blends stability, cushioning and durability for high-impact training sessions. A foam sole cushions heavy-weight, high-paced activities, while a midfoot cage locks your foot down to a flat, wide base for stability.",
		imageUrl:
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/d1778ec8-9a01-47b6-b5e8-f61bcfae2702/renew-fusion-training-shoe-vJJLDK.jpg",
		price: 115,
	},
	{
		id: 41,
		name: "Nike Air Max 90 FlyEase",
		type: "Older Kids' Shoe",
		category: "kids",
		description:
			"Iconic kicks remade for kids to get in and out of quickly? We're in! The Nike Air Max 90 FlyEase is super-easy—stomp on the heel, slip your foot in and watch the shoe pop back into place. So magical that you'll need to feel it to believe it.",
		imageUrl:
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/i1-bc3668ac-f851-4247-9fcd-fc6f48caed0e/air-max-90-flyease-older-shoe-0hV9ql.jpg",
		price: 130,
	},
	{
		id: 42,
		type: "Older Kids' Shoe",
		category: "kids",
		name: "Nike Air Max 2090",
		description:
			"The Nike Air Max 2090 celebrates the 30th anniversary of the iconic Air Max 90 release with extreme Air and classic details made right for kiddos.",
		imageUrl:
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/i1-7d9e2bdb-06f5-40f2-a849-962de717755a/air-max-2090-older-shoe-DSLvWj.jpg",
		price: 145,
	},
	{
		id: 43,
		type: "Older Kids' Shoe",
		category: "kids",
		name: "Jordan Air Max 200",
		description:
			"With design elements inspired by the Air Jordan 4, the Jordan Air Max 200 brings a new level of Air to Jordan for all-day comfort.",
		imageUrl:
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/i1-eeba15da-bef8-41b4-b128-17b05f24f8e8/jordan-air-max-200-older-shoe-bfZXKD.jpg",
		price: 120,
	},
	{
		id: 44,
		type: "Older Kids' Shoe",
		category: "kids",
		name: "Air Jordan 4 Retro WNTR",
		description:
			"The unmistakable model from 1989 gets a wintry upgrade with the Air Jordan 4 Retro WNTR. It's got all the original flavour, with fleece-lined areas for warmth and the iconic quarter-panel grid made from perforated synthetic material.",
		imageUrl:
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ab2bd32d-0ab7-4977-9033-8bca5bcfa1cd/air-jordan-4-retro-wntr-older-shoe-JMbmjf.jpg",
		price: 165,
	},
	{
		id: 45,
		type: "Older Kids' Skate Shoe",
		category: "kids",
		name: "Nike SB Stefan Janoski Canvas Premium",
		description:
			"The Nike SB Stefan Janoski Canvas Premium has a low-profile silhouette that delivers durability, grip and responsive cushioning without sacrificing boardfeel.",
		imageUrl:
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/yezv2nfvplr7f5mcwf6r/sb-stefan-janoski-canvas-older-skate-shoe-sngjhm.jpg",
		price: 95,
	},
	{
		id: 46,
		type: "Older Kids' Skate Shoe",
		category: "kids",
		name: "Nike SB Charge Canvas",
		description:
			"The Nike SB Charge Canvas is a flexible skate essential. Breathable canvas hugs your feet while soft foam cushions every step.",
		imageUrl:
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/i1-510327ca-86be-4a01-8173-35ed9a322d91/sb-charge-canvas-older-skate-shoe-zrSRN8.jpg",
		price: 65,
	},
	{
		id: 47,
		type: "Older Kids' Running Shoe",
		category: "kids",
		name: "Nike Joyride Dual Run",
		description:
			"The Nike Joyride Dual Run blazes a new route with cushioning like never before. Tiny colourful beads mash with soft foam to contour to your foot with every move. With running kicks this squishy, comfy and fun, you may never take them off.",
		imageUrl:
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/8bf27cb6-cd23-4a3d-9dcc-bca4d658aa00/joyride-dual-run-older-running-shoe-S8McRF.jpg",
		price: 95,
	},
	{
		id: 48,
		type: "Older Kids' Shoe",
		category: "kids",
		name: "Nike Air Max Sequent 3",
		description:
			"The Nike Air Max Sequent 3 Older Kids' Shoe combines a Max Air unit in the heel, soft foam cushioning and grooves on the sole for a smooth heel-to-toe step.",
		imageUrl:
			"https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/vh2qt1h8jhgyw2tyi7ff/air-max-sequent-3-older-shoe-gXTO91or.jpg",
		price: 95,
	},
	{
		id: 49,
		type: "Older Kids' Running Shoe",
		category: "kids",
		name: "Nike Renew Run",
		description:
			"The Nike Renew Run keeps you moving with soft foam for a cushioned feel. It's also lightweight and breathable so you can stay comfortable while you run and play.",
		imageUrl:
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/dcf4e201-94ca-4ced-833e-6800b36e55cf/renew-run-older-running-shoe-L7Kq1k.jpg",
		price: 88,
	},
	{
		id: 50,
		type: "Older Kids' Shoe",
		category: "kids",
		name: "Freak 1",
		description:
			"Find your inner Greek Freak in this debut signature shoe scaled for older kids. Giannis Antetokounmpo's Freak 1 builds in responsive cushioning, forefoot lockdown and multi-directional traction to create a shoe that can keep up with the positionless players of the next generation. 'I am my father's legacy' is printed on the bottom to give you a peek into the Greek Freak's inspiration.",
		imageUrl:
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/i1-3c21de03-4273-4381-b5d5-bec6daadda75/freak-1-older-shoe-MtXdG4.jpg",
		price: 120,
	},
	{
		id: 51,
		type: "Older Kids' Football Boot",
		category: "kids",
		name: "Nike Jr. Phantom Vision 2 Elite Dynamic Fit MG",
		description:
			"The Nike Jr. Phantom Vision 2 Elite Dynamic Fit MG brings a new level of fierce precision to the pitch. A comfortable inner sleeve is concealed in a Flyknit constructed outer layer to create a boot for the finishers, the providers and the battlers of tomorrow's game.",
		imageUrl:
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/6cd02718-643d-4e78-b253-a88ba9c53c3f/jr-phantom-vision-2-elite-dynamic-fit-mg-older-multi-ground-football-boot-fnbg1f.jpg",
		price: 230,
	},
	{
		id: 52,
		type: "Older Kids' Football Shoe",
		category: "kids",
		name: "Nike Jr. Mercurial Vapor 13 Club IC",
		description:
			"The Nike Jr. Mercurial Vapor 13 Club IC Shoe wraps your foot for streamlined speed on the street, court or on indoor surfaces.",
		imageUrl:
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/4a4418a5-4937-4598-b4fe-79005ae3f240/jr-mercurial-vapor-13-club-ic-younger-older-indoor-court-football-shoe-hg2QPd.jpg",
		price: 58,
	},
	{
		id: 53,
		type: "Kids' Golf Shoe",
		category: "kids",
		name: "Nike Roshe G Jr.",
		description:
			"The Nike Roshe G Jr features a pressure-mapped outsole that provides traction in key zones. Inspired by the original, iconic Roshe, the mesh upper offers breathability and a modern look, while the soft, flexible, foam midsole cushions every step.",
		imageUrl:
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/dq3u4otw1s3s3t6cweci/roshe-g-jr-golf-shoe-Q18nHr.jpg",
		price: 85,
	},
	{
		id: 54,
		type: "Older Kids' Running Shoe",
		category: "kids",
		name: "Nike Revolution 5",
		description:
			"Run and play in the Nike Revolution 5. Lightweight mesh stretches around your feet, and soft foam cushioning gives you revolutionary comfort.",
		imageUrl:
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ee6ec311-c9b0-40a3-90db-aa6e3b56e9f1/revolution-5-older-running-shoe-6WcfZl.jpg",
		price: 90,
	},
	{
		id: 55,
		type: "Older Kids' Tennis Shoe",
		category: "kids",
		name: "NikeCourt Jr. Lite 2",
		description:
			"The NikeCourt Jr. Lite 2 is designed to cushion and support your feet during training and play. The rubber outsole features 5 distinctive patterns. Each pattern is designed to visually outline 1 of the 5 basic movements new tennis players learn.",
		imageUrl:
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ojpdfynzajet5h2k349p/nikecourt-jr-lite-2-older-tennis-shoe-QtvRPw.jpg",
		price: 58,
	},
	{
		id: 56,
		type: "Younger/Older Kids' Tennis Shoe",
		category: "kids",
		name: "NikeCourt Jr. Vapor X",
		description:
			"Step into ultimate comfort in the NikeCourt Jr. Vapor X. Breathable mesh helps your feet stay cool and dry, while supportive overlays hug your foot during quick cuts and fast sprints.",
		imageUrl:
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/6418f167-60c4-41eb-bef1-1c131c229ebd/nikecourt-jr-vapor-younger-older-tennis-shoe-LzH2Bm.jpg",
		price: 95,
	},
	{
		id: 57,
		type: "Older Kids' Basketball Shoe",
		category: "kids",
		name: "Freak 1 Employee of the Month",
		description:
			"Get your freak on in Giannis Antetokounmpo's debut signature shoe, Nike's first-ever for the international basketball sensation. The Freak 1 has the forefoot lockdown and multi-directional traction needed to complement his freakishly athletic game.",
		imageUrl:
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b3c197d7-ee54-4f8f-9eb3-0fdaac6ff21e/freak-1-employee-of-month-older-basketball-shoe-gdHdXS.jpg",
		price: 120,
	},
	{
		id: 58,
		type: "Older Kids' Shoe",
		category: "kids",
		name: "Air Jordan 1 Mid",
		description:
			"The Air Jordan 1 Mid Older Kids' Shoe brings full-court style and premium comfort with an iconic look. A comfortable upper combines with time-tested cushioning for street-ready style on and off the court.",
		imageUrl:
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/awk6ukg8ma8bssqd2cga/air-jordan-1-mid-older-shoe-ZwTAwrwx.jpg",
		price: 105,
	},
	{
		id: 59,
		type: "Older Kids' Running Shoe",
		category: "kids",
		name: "Nike Revolution 5 FlyEase",
		description:
			"Run and play in the Nike Revolution 5. FlyEase technology has a strap and zip that wraps around the heel so you can easily take the shoe on and off. Lightweight mesh and foam cushioning give you revolutionary comfort.",
		imageUrl:
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ebe0f21e-0cb0-44eb-85d2-db8f463fedd1/revolution-5-flyease-older-running-shoe-Dgz4hr.jpg",
		price: 70,
	},
	{
		id: 60,
		type: "Older Kids' Running Shoe",
		category: "kids",
		name: "Nike Star Runner 2",
		description:
			"Shoot for the stars in the Nike Star Runner 2. It's lightweight and durable for out-of-this-world comfort. Peek underneath to reveal stars moulded into the sole to help you orbit around your next route.",
		imageUrl:
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ggkegecz2fj0uxf9d4om/star-runner-2-older-running-shoe-CcvWQp.jpg",
		price: 65,
	},
];

const seed = async () => {
	await Product.insertMany(SHOP_DATA);
	console.log("Data Imported!");
	process.exit();
};

seed();

export default SHOP_DATA;
